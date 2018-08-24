package wang.yobbo.common.annotation;

import org.springframework.web.bind.annotation.Mapping;

import java.lang.annotation.*;

/**
 * ApiVersion 添加版本号。作用：使api根据版本号自下而上兼容
 *  例如客户端统一调用的接口是V3，那某些接口没有定义V3，可以使用低版本V1或V2，这时可以让自下而上兼容，调用v2版本的
 * @return
 */
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Mapping
public @interface ApiVersion {
    /**
     * restFul Api版本号
     * @return
     */
    int value();
}
