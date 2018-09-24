package wang.yobbo.db;

import com.alibaba.druid.pool.DruidDataSourceFactory;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import wang.yobbo.common.db.DataSourceEnum;
import wang.yobbo.common.db.DynamicDataSource;
import wang.yobbo.common.util.AESUtil;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * 主从配置 dataSourceConfig
 */
@Configuration
public class DataSourceConfig {

    @Autowired
    private Environment environment;

    @Bean("masterDataSource")
    public DataSource masterDataSource(){
        Properties props = new Properties();
        try {
            props.setProperty("url", environment.getProperty("master.jdbc.url"));
            props.setProperty("driverClassName", environment.getProperty("master.jdbc.driverClassName"));
            props.setProperty("username", environment.getProperty("master.jdbc.username"));
            props.setProperty("password", AESUtil.aesDecode(environment.getProperty("master.jdbc.password")));
            props.setProperty("initialSize", environment.getProperty("master.jdbc.initialSize"));
            props.setProperty("minIdle", environment.getProperty("master.jdbc.minIdle"));
            props.setProperty("maxActive", environment.getProperty("master.jdbc.maxActive"));
            props.setProperty("maxWaitMillis", environment.getProperty("master.jdbc.maxWaitMillis"));
            props.setProperty("timeBetweenEvictionRunsMillis", environment.getProperty("master.jdbc.timeBetweenEvictionRunsMillis"));
            return DruidDataSourceFactory.createDataSource(props);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Bean("slaveDataSource")
    public DataSource slaveDataSource(){
        Properties props = new Properties();
        try {
            props.setProperty("url", environment.getProperty("slave.jdbc.url"));
            props.setProperty("driverClassName", environment.getProperty("slave.jdbc.driverClassName"));
            props.setProperty("username", environment.getProperty("slave.jdbc.username"));
            props.setProperty("password", AESUtil.aesDecode(environment.getProperty("slave.jdbc.password")));
            props.setProperty("initialSize", environment.getProperty("master.jdbc.initialSize"));
            props.setProperty("minIdle", environment.getProperty("master.jdbc.minIdle"));
            props.setProperty("maxActive", environment.getProperty("master.jdbc.maxActive"));
            props.setProperty("maxWaitMillis", environment.getProperty("master.jdbc.maxWaitMillis"));
            props.setProperty("timeBetweenEvictionRunsMillis", environment.getProperty("master.jdbc.timeBetweenEvictionRunsMillis"));
            return DruidDataSourceFactory.createDataSource(props);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 配置默认的数据源
     * @Primary 该注解表示在同一个接口有多个实现类可以注入的时候，默认选择哪一个，而不是让@autowire注解报错
     * @Qualifier 根据名称进行注入，通常是在具有相同的多个类型的实例的一个注入（例如有多个DataSource类型的实例）
     * @param masterDataSource
     * @param slaveDataSource
     * @return
     */
    @Bean("dataSource")
    @Primary
    public DynamicDataSource dataSource(@Qualifier("masterDataSource") DataSource masterDataSource,
                                        @Qualifier("slaveDataSource") DataSource slaveDataSource ){
        Map<Object, Object> targetDataSources = new HashMap<>();
        targetDataSources.put(DataSourceEnum.MASTER.getName(), masterDataSource);
        targetDataSources.put(DataSourceEnum.SLAVE.getName(), slaveDataSource);
        DynamicDataSource dataSource = new DynamicDataSource();
        dataSource.setTargetDataSources(targetDataSources);
        dataSource.setDefaultTargetDataSource(masterDataSource);
        return dataSource;
    }

    /**
     * 根据数据源创建SqlSessionFactory
     * @param dataSource
     * @return
     * @throws Exception
     */
    @Bean("sqlSessionFactory")
    public SqlSessionFactory sqlSessionFactory(DynamicDataSource dataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        sqlSessionFactoryBean.setTypeAliasesPackage(this.environment.getProperty("mybatis.typeAliasesPackage"));
        sqlSessionFactoryBean.setConfigLocation(new PathMatchingResourcePatternResolver()
                .getResource(this.environment.getProperty("mybatis.configLocation")));
        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver()
                .getResources(this.environment.getProperty("mybatis.mapperLocations")));
        return sqlSessionFactoryBean.getObject();
    }

    /**
     * 事务配置管理
     * <p>
     *     在springBoot入口开启事物管理后，用@Transactional注解在方法或类上开启注解
     * @param dataSource
     * @return
     * @throws Exception
     */
    @Bean("transactionManager")
    public DataSourceTransactionManager transactionManager(DynamicDataSource dataSource) throws Exception{
        return new DataSourceTransactionManager(dataSource);
    }
}
