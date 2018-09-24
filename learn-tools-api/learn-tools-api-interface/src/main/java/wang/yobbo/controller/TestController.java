package wang.yobbo.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.base.BaseResult;

/**
 * url: /v1/menu
 *
 */
@RestController
@RequestMapping("/v1/test")
@Api(value = "菜单管理", description = "菜单管理功能所有接口")
public class TestController {

    @RequestMapping("/run")
    public BaseResult tets(){
        return new BaseResult("200");
    }

}
