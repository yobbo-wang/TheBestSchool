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
import wang.yobbo.system.model.SysMenuCriteria;
import wang.yobbo.system.model.SysMenuRole;
import wang.yobbo.system.model.SysMenuRoleCriteria;
import wang.yobbo.system.service.SysMenuRoleService;
import wang.yobbo.system.service.SysMenuService;
import wang.yobbo.util.SystemUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    @Autowired private SysMenuService sysMenuService;

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

    // url: /menu/role/queryMenuByUID
    @ApiVersion(1)
    @ApiOperation(value = "根据角色id查询菜单id集合版本1", response = BaseResult.class)
    @RequestMapping(value = "/queryMenuByUID")
    public BaseResult queryCurrentUserMenu(HttpServletRequest request) throws Exception {  //如果异常，抛出异常给异常统一处理
        List<String> roles = SystemUtils.getCurrentRoles(request);
        List<String> menuIds = new ArrayList<>();
        SysMenuRoleCriteria sysMenuRoleCriteria = new SysMenuRoleCriteria();
        SysMenuRoleCriteria.Criteria criteria = sysMenuRoleCriteria.createCriteria();
        criteria.andRoleIdIn(roles);
        List<SysMenuRole> sysMenuRoles = this.sysMenuRoleService.selectByExample(sysMenuRoleCriteria);
        for(SysMenuRole sysMenuRole : sysMenuRoles){
            menuIds.add(sysMenuRole.getMenuId());
        }
        SysMenuCriteria sysMenuCriteria = new SysMenuCriteria();
        SysMenuCriteria.Criteria criteria1 = sysMenuCriteria.createCriteria();
        criteria1.andIdIn(menuIds);
        criteria1.andPidIsNull();
        return new BaseResult(this.sysMenuService.selectByExample(sysMenuCriteria));
    }

    /******************************************* query end *********************************************/

}
