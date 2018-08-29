package wang.yobbo.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.service.SysUserService;

import static java.util.Collections.emptyList;
/**
 * 验证用户
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired private SysUserService sysUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUser sysUser = this.sysUserService.findUserByUsername(username);
        return new org.springframework.security.core.userdetails.User(username, sysUser.getPassword(), emptyList());
    }

}
