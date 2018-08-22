package wang.yobbo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import wang.yobbo.common.listener.ApplicationContextListener;
import wang.yobbo.common.util.SpringContextUtil;

/**
 * spring-boot 程序入口启动
 */
//@ImportResource(locations = "classpath:META-INF.spring/*.xml")
@SpringBootApplication
public class LearnToolsAdminRpcServiceApplication {

    public static void main(String[] args) {
        try{
            ConfigurableApplicationContext applicationContext = SpringApplication.run(LearnToolsAdminRpcServiceApplication.class, args);
            new SpringContextUtil().setApplicationContext(applicationContext);
            applicationContext.addApplicationListener(new ApplicationContextListener());
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
