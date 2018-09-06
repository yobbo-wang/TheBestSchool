package wang.yobbo.common.base;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

/**
 * 控制器基类
 *   restful api安全验证等
 */
@RestController
public abstract class BaseController {
    private final static Logger LOGGER = LoggerFactory.getLogger(BaseController.class);
    /**
     * 统一异常处理
     * @param exception
     */
    @ExceptionHandler
    public BaseResult exceptionHandler(Exception exception) {
        LOGGER.error("统一异常处理：", exception);
        BaseResult baseResult = new BaseResult();
        baseResult.setSuccess(false);
        baseResult.setErrorCode("400");
        baseResult.setErrorMsg("系统异常，请联系管理员");
        return baseResult;
    }
}
