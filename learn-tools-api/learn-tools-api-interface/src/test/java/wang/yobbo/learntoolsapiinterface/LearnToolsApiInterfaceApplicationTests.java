package wang.yobbo.learntoolsapiinterface;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import wang.yobbo.system.model.SysMenu;
import wang.yobbo.system.model.SysMenuCriteria;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.service.SysMenuService;
import wang.yobbo.system.service.SysUserRoleService;
import wang.yobbo.system.service.SysUserService;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LearnToolsApiInterfaceApplicationTests {

    @Autowired private SysUserService sysUserService;
    @Autowired
    SysMenuService sysMenuService;
    @Autowired
    SysUserRoleService sysUserRoleService;


    @Test
    public void contextLoads() {
        SysUser admin = null;
        try {
            admin = this.sysUserService.findUserByUsername("admin");
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        System.out.println(admin);
    }

    @Test
    public void queryMenuList() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        SysMenuCriteria sysMenuCriteria = new SysMenuCriteria();
        SysMenuCriteria.Criteria criteria = sysMenuCriteria.createCriteria();
        criteria.andPidIsNull();
        sysMenuCriteria.setOrderByClause("sort asc");
        List<SysMenu> sysMenus = this.sysMenuService.selectByExample(sysMenuCriteria);
        System.out.println(sysMenus);
    }

    @Test
    public void delete(){
        try {
            this.sysUserService.deleteByPrimaryKey("11111");
            this.sysUserRoleService.deleteByPrimaryKey(2);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
    }
}
