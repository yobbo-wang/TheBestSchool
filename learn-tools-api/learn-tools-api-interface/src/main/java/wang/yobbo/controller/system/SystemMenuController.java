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
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.controller.main.MainController;
import wang.yobbo.system.model.SysMenu;
import wang.yobbo.system.model.SysMenuCriteria;
import wang.yobbo.system.service.SysMenuService;
import wang.yobbo.util.SystemUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * url: /v1/menu
 *
 */
@RestController
@RequestMapping("/v1/menu")
@Api(value = "菜单管理", description = "菜单管理功能所有接口")
public class SystemMenuController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MainController.class);
    @Autowired
    private SysMenuService sysMenuService;


    @ApiVersion(1)
    @ApiOperation(value = "保存菜单版本1", response = BaseResult.class)
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public BaseResult saveMenuV1(SysMenu sysMenu, HttpServletRequest request){
        BaseResult baseResult = new BaseResult();
        try{
            if(StringUtils.isBlank(sysMenu.getText())){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("text.must.not.null");
                return baseResult;
            }
            if(StringUtils.isBlank(sysMenu.getUrl())){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("url.must.not.null");
                return baseResult;
            }
            if(sysMenu.getSort() == 0){
                baseResult.setSuccess(false);
                baseResult.setErrorCode("sort.must.not.zero");
                return baseResult;
            }
            if(StringUtils.isBlank(sysMenu.getId())){
                String currentUserID = SystemUtils.getCurrentUserID(request.getHeader("Authorization"));
                sysMenu.setCreateUserId(currentUserID);
                sysMenu.setCreateTime(new Date());
                this.sysMenuService.insertSelective(sysMenu);
            }
            this.sysMenuService.updateByPrimaryKeySelective(sysMenu);
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @ApiVersion(1)
    @ApiOperation(value = "查看菜单列表版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        SysMenuCriteria sysMenuCriteria = new SysMenuCriteria();
        SysMenuCriteria.Criteria criteria = sysMenuCriteria.createCriteria();
        criteria.andPidIsNull();
        sysMenuCriteria.setOrderByClause("sort asc");
        try{
            return new BaseResult(this.sysMenuService.selectByExample(sysMenuCriteria));
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e); //如果异常会统一交给异常处理返回结果
        }
    }
}
