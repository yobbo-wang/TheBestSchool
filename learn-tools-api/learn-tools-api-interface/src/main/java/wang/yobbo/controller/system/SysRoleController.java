package wang.yobbo.controller.system;

import com.alibaba.fastjson.JSONArray;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.system.model.*;
import wang.yobbo.system.service.SysMenuRoleService;
import wang.yobbo.system.service.SysRoleService;
import wang.yobbo.util.SystemUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.UUID;

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
    @Autowired private SysMenuRoleService sysMenuRoleService;

    /******************************** query start ****************************************/
    // url: /v1/role/list
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
    /******************************** query end ****************************************/

    /******************************** save or update start ****************************************/
    // url: /v1/role/change/status
    @ApiVersion(1)
    @ApiOperation(value = "改变角色状态版本1", response = BaseResult.class)
    @RequestMapping(value = "/change/status", method = RequestMethod.POST)
    public BaseResult updateStatusV1(SysRole sysRole) {
        BaseResult baseResult = new BaseResult();
        try{
            if(StringUtils.isBlank(sysRole.getStatus())){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("status.must.not.null");
                return baseResult;
            }
            if(StringUtils.isBlank(sysRole.getId())){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("id.must.not.null");
                return baseResult;
            }
            this.sysRoleService.updateByPrimaryKeySelective(sysRole);
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }

    // url: /v1/role/edit
    @ApiVersion(1)
    @ApiOperation(value = "保存或者更新角色版本1", response = BaseResult.class)
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public BaseResult saveMenuV1(HttpServletRequest request) {
        String name = request.getParameter("name");
        String menuAuth = request.getParameter("menuAuth");
        String id = request.getParameter("id");

        BaseResult baseResult = new BaseResult();
        try{
            if(StringUtils.isBlank(name)){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("name.must.not.null");
                return baseResult;
            }
            JSONArray menuAuthS = null;
            if(StringUtils.isNotBlank(menuAuth)){
                menuAuthS = JSONArray.parseArray(menuAuth);
                if(menuAuthS.size() == 0){
                    baseResult.setSuccess(false);
                    baseResult.setErrorCode("menuAuth.must.not.NUll");
                    return baseResult;
                }
            }

            SysRole sysRole = new SysRole();
            sysRole.setName(name);
            String uuid = UUID.randomUUID().toString().replace("-", "");
            if(StringUtils.isBlank(id)){
                sysRole.setId(uuid);
                sysRole.setStatus("0");
                sysRole.setCreateTime(new Date());
                sysRole.setCreateUserId(SystemUtils.getCurrentUserID(request.getHeader("Authorization")));
                this.sysRoleService.insertSelective(sysRole);
            }else{
                sysRole.setId(id);
                this.sysRoleService.updateByPrimaryKeySelective(sysRole);
            }

            if(menuAuthS.size() > 0){
                if(StringUtils.isNotBlank(id)){  //如果是更新情况先清空原来的权限
                    SysMenuRoleCriteria sysMenuRoleCriteria = new SysMenuRoleCriteria();
                    SysMenuRoleCriteria.Criteria criteria = sysMenuRoleCriteria.createCriteria();
                    criteria.andRoleIdEqualTo(id);
                    this.sysMenuRoleService.deleteByExample(sysMenuRoleCriteria);
                }
                for(Object menuId : menuAuthS){
                    SysMenuRole sysMenuRole = new SysMenuRole();
                    sysMenuRole.setMenuId(menuId.toString());
                    sysMenuRole.setRoleId(id == null ? uuid : id);
                    this.sysMenuRoleService.insertSelective(sysMenuRole);
                }
            }
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }
    /******************************** save or update end ****************************************/

    /******************************** delete start ****************************************/
    public BaseResult deleteV1(){
        return new BaseResult();
    }
    /******************************** delete end ****************************************/

}
