package wang.yobbo.courseware.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import wang.yobbo.common.annotation.ApiVersion;
import wang.yobbo.common.base.BaseResult;
import wang.yobbo.controller.MainController;

import java.util.*;

/**
 * url: /v1/courseware/list
 *
 */
@RestController
@RequestMapping("/v1/courseware")
@Api(value = "精品课程列表", description = "精品课程列表管理接口")
public class CourseWareController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MainController.class);

    @ApiVersion(1)
    @ApiOperation(value = "精品课程列表版本1", response = BaseResult.class)
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public BaseResult getListV1(){
        BaseResult baseResult = new BaseResult();
        try{
            /********* 业务处理开始 ***********/
            List<Map> data = new ArrayList<>();
            for(int i=0;i<6;i++){
                Map row = new HashMap();
                row.put("date", new Date());
                row.put("name", "精品课程" + i);
                row.put("address", "精品课程地址" + i);
                data.add(row);
            }
            /*********** 业务处理结束 *********/
            baseResult.setData(data);
            baseResult.setSuccess(true);
            return baseResult;
        }catch (Exception e){
            LOGGER.error(e.getMessage());
            throw new RuntimeException(e);
        }
    }
}
