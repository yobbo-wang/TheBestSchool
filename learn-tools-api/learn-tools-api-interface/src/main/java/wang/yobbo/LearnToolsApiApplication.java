package wang.yobbo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import wang.yobbo.common.listener.ApplicationContextListener;

@SpringBootApplication
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
