package wang.yobbo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseController;
import wang.yobbo.common.base.BaseResult;

/**
 * url: /v1/main/list
 *
 */
@RestController
@RequestMapping("/v1/main")
@Api(value = "首页接口", description = "后台管理平台接口")
public class MainController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MainController.class);

    @ApiVersion(1)
    @ApiOperation(value = "首页数据列表版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        BaseResult baseResult = new BaseResult();
        try{
            /********* 业务处理开始 ***********/

            /*********** 业务处理结束 *********/
            baseResult.setData("版本1");
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @ApiVersion(3)
    @ApiOperation(value = "首页数据列表版本3", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV2(){
        BaseResult baseResult = new BaseResult();
        try{
            /********* 业务处理开始 ***********/

            /*********** 业务处理结束 *********/
            baseResult.setData("版本2");
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }

}
