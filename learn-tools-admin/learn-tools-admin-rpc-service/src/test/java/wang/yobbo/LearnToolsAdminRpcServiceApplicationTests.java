package wang.yobbo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import wang.yobbo.admin.entity.UpmsUser;
import wang.yobbo.admin.service.UpmsUserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LearnToolsAdminRpcServiceApplicationTests {
    @Autowired
    UpmsUserService upmsUserService;

    @Test
    public void contextLoads() {
        try{
            UpmsUser list = upmsUserService.getList();
            list.getAvatar();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
