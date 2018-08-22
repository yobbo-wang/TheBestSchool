package wang.yobbo.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.base.BaseController;

@RestController
@RequestMapping("/manage")
@Api(value = "api接口管理控制器", description = "api接口管理")
public class ManagerController extends BaseController {

    @ApiOperation(value = "api接口管理首页")
    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(){
        return "{\"success\": \"true\"}";
    }
}
