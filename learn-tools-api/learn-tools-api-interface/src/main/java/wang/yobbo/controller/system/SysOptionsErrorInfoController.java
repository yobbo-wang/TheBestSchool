package wang.yobbo.controller.system;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.common.util.Page;
import wang.yobbo.controller.main.MainController;
import wang.yobbo.system.model.SysErrorInfo;
import wang.yobbo.system.model.SysErrorInfoCriteria;
import wang.yobbo.system.service.SysErrorInfoService;

import java.util.Hashtable;
import java.util.List;
import java.util.Map;

/**
 * url: /v1/options/errorInfo
 *
 */
@RestController
@RequestMapping("/v1/options/errorInfo")
@Api(value = "系统配置错误码接口", description = "系统配置错误码接口所有相关")
public class SysOptionsErrorInfoController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MainController.class);
    @Autowired
    private SysErrorInfoService sysErrorInfoService;

    /********************************** 查询数据 **********************************************/
    @ApiVersion(1)
    @ApiOperation(value = "查看错误码列表版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(@RequestParam("currentPage") int currentPage, @RequestParam("pageSize") int pageSize){
        SysErrorInfoCriteria sysErrorInfoCriteria = new SysErrorInfoCriteria();
        sysErrorInfoCriteria.setOrderByClause(" create_time desc ");
        try{
            Page page = new Page(currentPage, pageSize); // 计算分页相关数值
            List<SysErrorInfo> sysErrorInfos = this.sysErrorInfoService.selectByExampleForOffsetPage(sysErrorInfoCriteria, page.getBegin(), page.getLength());
            int count = this.sysErrorInfoService.countByExample(sysErrorInfoCriteria);
            page.setTotalRecords(count);
            return new BaseResult(sysErrorInfos, page);
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e); //如果异常会统一交给异常处理返回结果
        }
    }

    @ApiVersion(1)
    @ApiOperation(value = "查看错误码集合版本1", response = BaseResult.class)
    @RequestMapping(value = "/code", method = RequestMethod.GET)
    public BaseResult geErrorCodeV1(){
        SysErrorInfoCriteria sysErrorInfoCriteria = new SysErrorInfoCriteria();
        sysErrorInfoCriteria.setOrderByClause(" create_time desc ");
        SysErrorInfoCriteria.Criteria criteria = sysErrorInfoCriteria.createCriteria();
        criteria.andExceptionTypeEqualTo("Input.Exception");
        try{
            List<SysErrorInfo> sysErrorInfos = this.sysErrorInfoService.selectByExample(sysErrorInfoCriteria);
            Map map = new Hashtable();
            for(SysErrorInfo sysErrorInfo : sysErrorInfos){
                map.put(sysErrorInfo.getErrorCode(), sysErrorInfo.getErrorMsg());
            }
            return new BaseResult(map);
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e); //如果异常会统一交给异常处理返回结果
        }
    }
    /*********************************************************************************************/


    /********************************** 增、更数据 **********************************************/

    /*********************************************************************************************/



}
