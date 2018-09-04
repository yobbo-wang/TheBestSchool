package wang.yobbo.controller.user;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.model.SysUserCriteria;
import wang.yobbo.system.service.SysUserService;

import java.util.List;

/**
 * url: /v1/user
 *
 */
@RestController
@RequestMapping("/v1/user")
@Api(value = "用户管理", description = "用户管理所有接口")
public class SysUserController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SysUserController.class);

    @Autowired
    private SysUserService sysUserService;

    @ApiVersion(1)
    @ApiOperation(value = "用户管理版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        BaseResult baseResult = new BaseResult();
        try{
            SysUserCriteria sysUserCriteria = new SysUserCriteria();
            sysUserCriteria.setOrderByClause("create_time desc");
            List<SysUser> sysUsers = this.sysUserService.selectByExample(sysUserCriteria);
            baseResult.setData(sysUsers);
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }

}
