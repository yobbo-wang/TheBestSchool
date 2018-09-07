package wang.yobbo.controller.system;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.system.model.SysMenuRoleCriteria;
import wang.yobbo.system.service.SysMenuRoleService;

/**
 * url: /v1/menu/role
 *
 */
@RestController
@RequestMapping("/v1/menu/role")
@Api(value = "角色功能对应关系", description = "角色功能对应关系所有接口")
public class SysMenuRoleController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SysMenuRoleController.class);

    @Autowired private SysMenuRoleService sysMenuRoleService;

    /*************************************** query start **********************************************/
    // url: /menu/role/query/menuId
    @ApiVersion(1)
    @ApiOperation(value = "根据角色id查询菜单id集合版本1", response = BaseResult.class)
    @RequestMapping(value = "/query/menuId")
    public BaseResult queryMenuIfByRoleIdV1(@RequestParam("roleId") String roleId) throws Exception {  //如果异常，抛出异常给异常统一处理
        SysMenuRoleCriteria sysMenuRoleCriteria = new SysMenuRoleCriteria();
        SysMenuRoleCriteria.Criteria criteria = sysMenuRoleCriteria.createCriteria();
        criteria.andRoleIdEqualTo(roleId);
        return new BaseResult(this.sysMenuRoleService.selectByExample(sysMenuRoleCriteria));
    }
    /******************************************* query end *********************************************/

}
