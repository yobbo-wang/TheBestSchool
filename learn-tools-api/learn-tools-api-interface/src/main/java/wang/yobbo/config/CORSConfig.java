package wang.yobbo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.List;

/**
 * 跨域配置
 */
@Configuration
public class CORSConfig {
    @Autowired
    private Environment environment;

    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        List<String> origins = new ArrayList<>();
        origins.add(environment.getProperty("admin.host"));
        origins.add(environment.getProperty("app.host"));
        corsConfiguration.setAllowedOrigins(origins); // 1.允许任何域名使用
        corsConfiguration.addAllowedHeader("*"); // 2. 请求头
        corsConfiguration.addAllowedMethod("*"); // 3. 方法
        corsConfiguration.setMaxAge((3600L));
        corsConfiguration.setAllowCredentials(true);
        return corsConfiguration;
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig()); // 4
        return new CorsFilter(source);
    }
}
