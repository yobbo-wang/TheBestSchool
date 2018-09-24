package wang.yobbo.system.service.impl;

import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.system.dao.SysMenuMapper;
import wang.yobbo.system.model.SysMenu;
import wang.yobbo.system.model.SysMenuCriteria;
import wang.yobbo.system.service.SysMenuService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
* SysMenuService实现
* Created by yobbo on 2018/9/3.
*/
@Service
@BaseService
public class SysMenuServiceImpl extends BaseServiceImpl<SysMenuMapper, SysMenu, SysMenuCriteria, String> implements SysMenuService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysMenuServiceImpl.class);

}