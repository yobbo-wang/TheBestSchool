package wang.yobbo.controller.system;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.common.util.StringUtil;
import wang.yobbo.system.model.*;
import wang.yobbo.system.service.SysRoleService;
import wang.yobbo.system.service.SysUserRoleService;
import wang.yobbo.system.service.SysUserService;
import wang.yobbo.util.SystemUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

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
    @Autowired
    private SysRoleService sysRoleService;
    @Autowired
    private SysUserRoleService sysUserRoleService;

    /*************************************** query start *****************************************************/
    @ApiVersion(1)
    @ApiOperation(value = "用户管理版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        BaseResult baseResult = new BaseResult();
        try{
            SysUserCriteria sysUserCriteria = new SysUserCriteria();
            sysUserCriteria.setOrderByClause("create_time desc");
            List<SysUser> sysUsers = this.sysUserService.selectByExample(sysUserCriteria);
            for(SysUser sysUser : sysUsers){
                if(StringUtils.isBlank(sysUser.getRoles())) continue;
                String[] roles = sysUser.getRoles().split(",");
                ArrayList<String> roleNames = new ArrayList<>();
                for(String roleId : roles){
                    SysRole sysRole = this.sysRoleService.selectByPrimaryKey(roleId);
                    if(sysRole != null) roleNames.add(sysRole.getName());
                }
                sysUser.setRolesName(StringUtils.join(roleNames, ","));
            }
            baseResult.setData(sysUsers);
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }
    /*************************************** query end *****************************************************/

    /*************************************** save or update start *****************************************************/
    // url: /v1/user/save
    @ApiVersion(1)
    @ApiOperation(value = "保存用户版本1", response = BaseResult.class)
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public BaseResult saveUserV1(HttpServletRequest request) {
        String username = request.getParameter("username");
        String name = request.getParameter("name");
        String mobilePhone = request.getParameter("mobilePhone");
        String email = request.getParameter("email");
        String roleIds = request.getParameter("roleIds");
        String uuid = UUID.randomUUID().toString().replace("-", "");
        BaseResult baseResult = new BaseResult();
        try{
            if(StringUtils.isBlank(username)){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("username.must.not.NUll");
                return baseResult;
            }
            if(StringUtils.isBlank(name)){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("name.must.not.NUll");
                return baseResult;
            }
            if(StringUtils.isBlank(mobilePhone)){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("mobilePhone.must.not.NUll");
                return baseResult;
            }
            if(StringUtils.isBlank(roleIds)){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("roleIds.must.not.NUll");
                return baseResult;
            }

            SysUser sysUser = new SysUser();
            sysUser.setId(uuid);
            sysUser.setUsername(username);
            sysUser.setName(name);
            sysUser.setMobilePhone(mobilePhone);
            sysUser.setEmail(email);
            sysUser.setPassword(SystemUtils.PWD);
            sysUser.setCreateUserId(SystemUtils.getCurrentUserID(request));
            sysUser.setCreateTime(new Date());
            this.sysUserService.insertSelective(sysUser);

            String[] roles = roleIds.split(",");
            for(String id : roles){
                SysUserRoleCriteria sysUserRoleCriteria = new SysUserRoleCriteria();
                SysUserRoleCriteria.Criteria criteria = sysUserRoleCriteria.createCriteria();
                criteria.andRoleIdEqualTo(id);
                this.sysUserRoleService.deleteByExample(sysUserRoleCriteria);//先全部删除在添加

                SysUserRole sysUserRole = new SysUserRole();
                sysUserRole.setRoleId(id);
                sysUserRole.setUserId(uuid);
                this.sysUserRoleService.insertSelective(sysUserRole);
            }
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }
    /*************************************** save or update end *****************************************************/

}
