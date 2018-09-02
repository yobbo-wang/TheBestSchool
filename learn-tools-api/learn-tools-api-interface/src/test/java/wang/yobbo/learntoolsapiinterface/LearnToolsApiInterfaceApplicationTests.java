package wang.yobbo.learntoolsapiinterface;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.service.SysUserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LearnToolsApiInterfaceApplicationTests {

    @Autowired private SysUserService sysUserService;

    @Test
    public void contextLoads() {
        SysUser admin = this.sysUserService.findUserByUsername("admin");
        System.out.println(admin);
    }

}
