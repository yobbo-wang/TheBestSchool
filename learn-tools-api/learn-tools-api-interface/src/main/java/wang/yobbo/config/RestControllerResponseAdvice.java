package wang.yobbo.config;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.system.model.SysErrorInfo;
import wang.yobbo.system.model.SysErrorInfoCriteria;
import wang.yobbo.system.model.SysExceptionInfo;
import wang.yobbo.system.service.SysErrorInfoService;
import wang.yobbo.system.service.SysExceptionInfoService;

import java.lang.reflect.InvocationTargetException;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 *
 * restful 返回值统一处理错误码
 * <p>
 *     返回：BaseResult
 */
@ControllerAdvice
public class RestControllerResponseAdvice implements ResponseBodyAdvice<Object> {

    @Autowired
    private SysExceptionInfoService sysExceptionInfoService;
    @Autowired
    private SysErrorInfoService sysErrorInfoService;

    @Override
    public boolean supports(MethodParameter methodParameter, Class<? extends HttpMessageConverter<?>> aClass) {
        return true;
    }

    /**
     * 错误码转换，并记录具体业务错误信息到数据库，便于后期定位
     * @param object 返回信息
     * @param methodParameter
     * @param mediaType
     * @param aClass
     * @param serverHttpRequest
     * @param serverHttpResponse
     * @return
     */
    @Override
    public Object beforeBodyWrite(Object object, MethodParameter methodParameter,
                                  MediaType mediaType,
                                  Class<? extends HttpMessageConverter<?>> aClass,
                                  ServerHttpRequest serverHttpRequest,
                                  ServerHttpResponse serverHttpResponse) {
        if(object instanceof BaseResult){
            BaseResult baseResult = (BaseResult) object;
            if(baseResult != null
                    && !baseResult.isSuccess()
                    && StringUtils.isNotBlank(baseResult.getErrorCode())){
                ServletServerHttpRequest request = ((ServletServerHttpRequest) serverHttpRequest);
                Map<String, String[]> parameterMap = request.getServletRequest().getParameterMap(); // 请求参数
                String queryString = request.getServletRequest().getQueryString(); // 请求参数字符串
                String remoteHost = request.getServletRequest().getRemoteHost(); // 请求者ip
                int remotePort = request.getServletRequest().getRemotePort(); // 请求者端口
                List<String> strings = request.getHeaders().get("user-agent"); // 请求端设备信息
                List<String> authorizationArray = request.getHeaders().get("Authorization"); // token
                String userAgent = strings != null && !strings.isEmpty() ? strings.get(0) : "";
                String authorization =  authorizationArray != null && !authorizationArray.isEmpty() ? authorizationArray.get(0) : "";
                String controller = methodParameter.getContainingClass().getName(); // 请求Controller
                String controllerMethod = methodParameter.getMethod().getName(); // 请求Controller方法名
                // 记录异常信息
                SysExceptionInfo sysExceptionInfo = new SysExceptionInfo();
                sysExceptionInfo.setAuthorization(authorization);
                sysExceptionInfo.setControllerName(controller);
                sysExceptionInfo.setMethodName(controllerMethod);
                sysExceptionInfo.setCreateTime(new Date());
                sysExceptionInfo.setQueryString(queryString);
                sysExceptionInfo.setUserAgent(userAgent);
                sysExceptionInfo.setRemoteHost(remoteHost);
                sysExceptionInfo.setRemotePort(remotePort);
                sysExceptionInfo.setParameterMap(parameterMap != null ? JSONObject.toJSONString(parameterMap) : null);
                try {
                    this.sysExceptionInfoService.insertSelective(sysExceptionInfo);
                } catch (Exception e) {
                    e.printStackTrace();
                }
                SysErrorInfoCriteria sysErrorInfoCriteria = new SysErrorInfoCriteria();
                SysErrorInfoCriteria.Criteria criteria = sysErrorInfoCriteria.createCriteria();
                criteria.andErrorCodeEqualTo(baseResult.getErrorCode());
                try {
                    SysErrorInfo sysErrorInfo = this.sysErrorInfoService.selectFirstByExample(sysErrorInfoCriteria);
                    baseResult.setErrorMsg(sysErrorInfo != null ? sysErrorInfo.getErrorMsg() : "系统异常，请联系管理员");
                    return baseResult;
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        return object;
    }
}
