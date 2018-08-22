package wang.yobbo.common.base;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import wang.yobbo.common.util.PropertiesFileUtil;

import javax.servlet.http.HttpServletRequest;

/**
 * 控制器基类
 *   restful api安全验证等
 */
@Controller
public abstract class BaseController {

    /**
     * 验证接口token
     * @param name
     * @param request
     */
    @RequestMapping( value = "/{name}/token", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public void token(@PathVariable String name, HttpServletRequest request){

    }

    /**
     * 返回jsp视图
     * @param path
     * @return
     */
    public static String jsp(String path) {
        return path.concat(".jsp");
    }

    /**
     * 返回thymeleaf视图
     * @param path
     * @return
     */
    public static String thymeleaf(String path) {
        String folder = PropertiesFileUtil.getInstance().get("app.name");
        return "/".concat(folder).concat(path).concat(".html");
    }

}
