package wang.yobbo.filter;

import com.alibaba.fastjson.JSONObject;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.util.ConstantKey;

import javax.servlet.FilterChain;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

/**
 * 登录过滤器
 *      1.使用方法 用post请求 host:port/login (param username=xx&password=xx)
 */
public class JWTLoginFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JWTLoginFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    /**
     * 接收并解析用户凭证
     * @param request
     * @param response
     * @return
     * @throws AuthenticationException
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        return authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password, new ArrayList<>())
        );
    }

    /**
     *  用户成功登录后，这个方法会被调用，我们在这个方法里生成token
      */
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication auth) {
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        // 定义存放角色集合的对象
        List roleList = new ArrayList<>();
        for (GrantedAuthority grantedAuthority : authorities) {
            roleList.add(grantedAuthority.getAuthority());
        }
        String token = Jwts.builder()
                .setSubject(auth.getName() + "-" + roleList)
                .setExpiration(new Date(System.currentTimeMillis() + ConstantKey.SINGING_KEY_VALIDITY)) //token有效期 TODO 可以动态设置
                .signWith(SignatureAlgorithm.HS512, ConstantKey.SIGNING_KEY)
                .compact();
        System.out.println("token:" + token);
        response.setHeader("content-type", "application/json; charset=utf-8");
        ServletOutputStream outputStream;
        try {
            outputStream = response.getOutputStream();
            Map map = new HashMap<>();
            map.put("Authorization", token);
            BaseResult baseResult = new BaseResult(map);
            outputStream.write(JSONObject.toJSONString(baseResult).getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
