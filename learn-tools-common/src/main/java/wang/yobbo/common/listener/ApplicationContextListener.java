package wang.yobbo.common.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import wang.yobbo.common.annotation.BaseService;

import java.lang.reflect.Method;
import java.util.Map;

/**
 * spring容器初始化完成事件
 */
@Component
public class ApplicationContextListener  implements ApplicationListener<ContextRefreshedEvent> {

    private static final Logger LOGGER = LoggerFactory.getLogger(ApplicationContextListener.class);

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        // root application context
        if (null == contextRefreshedEvent.getApplicationContext().getParent()) {
            LOGGER.debug(">>>>> spring初始化完毕 <<<<<");
            // spring初始化完毕后，通过反射调用所有使用BaseService注解的initMapper方法
            ApplicationContext applicationContext = contextRefreshedEvent.getApplicationContext();
            Map<String, Object> baseServices = applicationContext.getBeansWithAnnotation(BaseService.class);
            for (Object service : baseServices.values()) {
                LOGGER.debug(">>>>> {}.initMapper()", service.getClass().getName());
                try {
                    Method initMapper = service.getClass().getMethod("initMapper", ApplicationContext.class);
                    initMapper.invoke(service, applicationContext);
                } catch (Exception e) {
                    LOGGER.error("初始化BaseService的initMapper方法异常", e);
                    e.printStackTrace();
                }
            }
        }
    }
}
