package wang.yobbo.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.model.SysUserCriteria;
import wang.yobbo.system.service.SysUserService;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

public class SystemUtils {

    /**
     * 获取当前用户id
     * @param authorization
     * @return
     */
    public static String getCurrentUserID(String authorization){
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return new String();
        }
        String token = authorization.replace("Bearer ", "");
        Claims body = Jwts.parser()
                .setSigningKey(ConstantKey.SIGNING_KEY)
                .parseClaimsJws(token)
                .getBody();
        return body.get("userId", String.class);
    }

    /**
     * 获取当前角色集合
     * @param authorization
     * @return
     */
    public static List getCurrentRoles(String authorization){
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return new ArrayList();
        }
        String token = authorization.replace("Bearer ", "");
        Claims body = Jwts.parser()
                .setSigningKey(ConstantKey.SIGNING_KEY)
                .parseClaimsJws(token)
                .getBody();
        return body.get("roles", List.class);
    }

    public static String getSysUserName(SysUserService sysUserService, String id) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        if(id == null || sysUserService == null) return new String();
        SysUserCriteria sysUserCriteria = new SysUserCriteria();
        SysUserCriteria.Criteria criteria = sysUserCriteria.createCriteria();
        criteria.andIdEqualTo(id);
        SysUser sysUser = sysUserService.selectFirstByExample(sysUserCriteria);
        if(sysUser != null ){
            return sysUser.getName();
        }
        return new String();
    }
}
