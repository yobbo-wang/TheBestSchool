package wang.yobbo.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 注册模块
 */
@RestController
@RequestMapping(value = "/users")
@CrossOrigin("*")
public class SignupController {

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public String signUp(){
        return "success";
    }
}
