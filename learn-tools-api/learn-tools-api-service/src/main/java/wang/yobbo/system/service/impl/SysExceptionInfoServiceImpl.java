package wang.yobbo.system.service.impl;

import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.system.dao.SysExceptionInfoMapper;
import wang.yobbo.system.model.SysExceptionInfo;
import wang.yobbo.system.model.SysExceptionInfoCriteria;
import wang.yobbo.system.service.SysExceptionInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
* SysExceptionInfoService实现
* Created by yobbo on 2018/9/24.
*/
@Service
@BaseService
public class SysExceptionInfoServiceImpl extends BaseServiceImpl<SysExceptionInfoMapper, SysExceptionInfo, SysExceptionInfoCriteria, Integer> implements SysExceptionInfoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysExceptionInfoServiceImpl.class);

}