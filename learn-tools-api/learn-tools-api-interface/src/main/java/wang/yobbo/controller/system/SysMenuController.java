package wang.yobbo.controller.system;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.controller.main.MainController;
import wang.yobbo.system.model.SysMenu;
import wang.yobbo.system.model.SysMenuCriteria;
import wang.yobbo.system.service.SysMenuService;
import wang.yobbo.system.service.SysUserService;
import wang.yobbo.util.SystemUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * url: /v1/menu
 *
 */
@RestController
@RequestMapping("/v1/menu")
@Api(value = "菜单管理", description = "菜单管理功能所有接口")
public class SysMenuController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MainController.class);
    @Autowired
    private SysMenuService sysMenuService;

    /********************************** 增、更数据 **********************************************/
    @ApiVersion(1)
    @ApiOperation(value = "保存菜单版本1", response = BaseResult.class)
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public BaseResult saveMenuV1(SysMenu sysMenu, HttpServletRequest request){
        try{
            if(StringUtils.isBlank(sysMenu.getText())){
                return new BaseResult(false, "text.must.not.null");
            }
            if(StringUtils.equals("auth", sysMenu.getType())){
                if(StringUtils.isBlank(sysMenu.getUrl())){
                    return new BaseResult(false, "url.must.not.null");
                }
            }
            if(sysMenu.getSort() == 0){
                return new BaseResult(false, "sort.must.not.zero");
            }
            if(StringUtils.isBlank(sysMenu.getId())){
                String currentUserID = SystemUtils.getCurrentUserID(request);
                sysMenu.setId(UUID.randomUUID().toString().replace("-", ""));
                sysMenu.setCreateUserId(currentUserID);
                sysMenu.setCreateTime(new Date());
                this.sysMenuService.insertSelective(sysMenu);
            }
            this.sysMenuService.updateByPrimaryKeySelective(sysMenu);
            return new BaseResult();
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }
    /********************************************************************************/

    /********************************** 查询数据 **********************************************/
    @ApiVersion(1)
    @ApiOperation(value = "查看菜单列表版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        SysMenuCriteria sysMenuCriteria = new SysMenuCriteria();
        SysMenuCriteria.Criteria criteria = sysMenuCriteria.createCriteria();
        criteria.andPidIsNull();
        sysMenuCriteria.setOrderByClause("sort asc");
        try{
            List<SysMenu> sysMenus = this.sysMenuService.selectByExample(sysMenuCriteria);
            return new BaseResult(sysMenus);
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e); //如果异常会统一交给异常处理返回结果
        }
    }
    /********************************************************************************/
}
