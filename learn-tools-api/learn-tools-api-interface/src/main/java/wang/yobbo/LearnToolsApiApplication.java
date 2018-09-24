package wang.yobbo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import wang.yobbo.common.listener.ApplicationContextListener;

@SpringBootApplication
@EnableTransactionManagement(proxyTargetClass = true)   //开启事物管理功能
public class LearnToolsApiApplication {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public static void main(String[] args) {
        try{
            ConfigurableApplicationContext applicationContext = SpringApplication.run(LearnToolsApiApplication.class, args);
            applicationContext.addApplicationListener(new ApplicationContextListener());
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
