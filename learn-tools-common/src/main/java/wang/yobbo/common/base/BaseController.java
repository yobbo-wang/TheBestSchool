package wang.yobbo.common.base;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import wang.yobbo.common.util.PropertiesFileUtil;
import wang.yobbo.common.util.StringUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * 控制器基类
 *   restful api安全验证等
 */
@Controller
public abstract class BaseController {
    private final static Logger LOGGER = LoggerFactory.getLogger(BaseController.class);
    /**
     * 统一异常处理
     * @param request
     * @param response
     * @param exception
     */
    @ExceptionHandler
    @ResponseBody
    public String exceptionHandler(HttpServletRequest request, HttpServletResponse response, Exception exception) {
        LOGGER.error("统一异常处理：", exception);
        request.setAttribute("ex", exception);
        if (null != request.getHeader("X-Requested-With") && "XMLHttpRequest".equalsIgnoreCase(request.getHeader("X-Requested-With"))) {
            request.setAttribute("requestHeader", "ajax");
        }
        BaseResult baseResult = new BaseResult();
        baseResult.setSuccess(false);
        baseResult.setErrorCode("400");
        baseResult.setErrorMsg("系统异常，请联系管理员");
        return JSONObject.toJSONString(baseResult);
    }
}
