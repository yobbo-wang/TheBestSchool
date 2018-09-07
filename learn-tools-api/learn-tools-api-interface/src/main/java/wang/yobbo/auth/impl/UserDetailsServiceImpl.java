package wang.yobbo.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.service.SysUserService;

import java.util.ArrayList;
/**
 * 验证用户
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private SysUserService sysUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try{
            SysUser sysUser = this.sysUserService.findUserByUsername(username);
            String[] roles = sysUser.getRoles().split(",");
            ArrayList<GrantedAuthority> authorities = new ArrayList<>();
            for(String id : roles){
                authorities.add( new GrantedAuthorityImpl(id));
            }
            return new UserDetailsCustomer(sysUser.getId(), sysUser.getUsername(), sysUser.getPassword(), authorities);
        }catch (Exception e){
            return null;
        }
    }

}
