package wang.yobbo.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.model.SysUserRole;
import wang.yobbo.system.model.SysUserRoleCriteria;
import wang.yobbo.system.service.SysUserRoleService;
import wang.yobbo.system.service.SysUserService;

import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.emptyList;
/**
 * 验证用户
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private SysUserRoleService sysUserRoleService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUser sysUser = this.sysUserService.findUserByUsername(username);
        // 查询角色并设置
        SysUserRoleCriteria sysUserRoleCriteria = new SysUserRoleCriteria();
        SysUserRoleCriteria.Criteria criteria = sysUserRoleCriteria.createCriteria();
        criteria.andUserIdEqualTo(sysUser.getId());
        List<SysUserRole> sysUserRoles = this.sysUserRoleService.selectByExample(sysUserRoleCriteria);
        ArrayList<GrantedAuthority> authorities = new ArrayList<>();
        for(SysUserRole sysUserRole : sysUserRoles){
            authorities.add( new GrantedAuthorityImpl(sysUserRole.getRoleId()));
        }
        return new UserDetailsCustomer(sysUser.getId(), sysUser.getUsername(), sysUser.getPassword(), authorities);
    }

}
