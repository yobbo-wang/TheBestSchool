package wang.yobbo.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import wang.yobbo.system.entity.UpmsUser;
import wang.yobbo.system.service.SystemUserService;

import static java.util.Collections.emptyList;
/**
 * 验证用户
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired private SystemUserService systemUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UpmsUser upmsUser = this.systemUserService.findUserByUsername(username);
        return new org.springframework.security.core.userdetails.User(username, upmsUser.getPassword(), emptyList());
    }

}
