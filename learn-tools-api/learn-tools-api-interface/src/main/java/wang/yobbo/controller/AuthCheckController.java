package wang.yobbo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.base.BaseController;

/**
 * url: /v1/auth/
 *
 */
@RestController
@RequestMapping("/v1/auth/")
public class AuthCheckController extends BaseController {
    /**
     * 能请求到该方法说明auth可用
     * @return
     */
    @RequestMapping(value = "check", method = RequestMethod.HEAD)
    public int check(){
        return 200;
    }
}
