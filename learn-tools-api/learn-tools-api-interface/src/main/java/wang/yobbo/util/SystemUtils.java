package wang.yobbo.util;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.apache.commons.lang.StringUtils;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.model.SysUserCriteria;
import wang.yobbo.system.service.SysUserService;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

public class SystemUtils {
    public final static String PWD = "e10adc3949ba59abbe56e057f20f883e";

    /**
     * 获取当前用户id
     * @param request
     * @return
     */
    public static String getCurrentUserID(HttpServletRequest request){
        String authorization = request.getHeader("Authorization");
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
     * @param request
     * @return
     */
    public static List getCurrentRoles(HttpServletRequest request){
        String authorization = request.getHeader("Authorization");
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return new ArrayList();
        }
        String token = authorization.replace("Bearer ", "");
        Claims body = Jwts.parser()
                .setSigningKey(ConstantKey.SIGNING_KEY)
                .parseClaimsJws(token)
                .getBody();
        String roles = body.get("roles", String.class);
        if(StringUtils.isNotBlank(roles)){
            return JSONArray.parseArray(roles);
        }else{
            return new ArrayList();
        }
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
