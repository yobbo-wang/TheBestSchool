package wang.yobbo.system.service.impl;

import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.system.dao.SysErrorInfoMapper;
import wang.yobbo.system.model.SysErrorInfo;
import wang.yobbo.system.model.SysErrorInfoCriteria;
import wang.yobbo.system.service.SysErrorInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
* SysErrorInfoService实现
* Created by yobbo on 2018/9/25.
*/
@Service
@BaseService
public class SysErrorInfoServiceImpl extends BaseServiceImpl<SysErrorInfoMapper, SysErrorInfo, SysErrorInfoCriteria, Integer> implements SysErrorInfoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysErrorInfoServiceImpl.class);

}