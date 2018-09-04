package wang.yobbo.controller.system;

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
import wang.yobbo.system.model.SysRole;
import wang.yobbo.system.model.SysRoleCriteria;
import wang.yobbo.system.service.SysRoleService;

import java.util.List;

/**
 * url: /v1/role
 *
 */
@RestController
@RequestMapping("/v1/role")
@Api(value = "角色管理", description = "角色管理功能所有接口")
public class SysRoleController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SysRoleController.class);

    @Autowired  private SysRoleService sysRoleService;

    @ApiVersion(1)
    @ApiOperation(value = "查看角色列表版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        SysRoleCriteria sysRoleCriteria = new SysRoleCriteria();
        try{
            List<SysRole> sysMenus = this.sysRoleService.selectByExample(sysRoleCriteria);
            return new BaseResult(sysMenus);
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e); //如果异常会统一交给异常处理返回结果
        }
    }
}
