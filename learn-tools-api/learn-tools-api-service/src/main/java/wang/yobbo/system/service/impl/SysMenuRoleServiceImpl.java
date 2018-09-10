package wang.yobbo.system.service.impl;

import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.system.dao.SysMenuRoleMapper;
import wang.yobbo.system.model.SysMenuRole;
import wang.yobbo.system.model.SysMenuRoleCriteria;
import wang.yobbo.system.service.SysMenuRoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
* SysMenuRoleService实现
* Created by yobbo on 2018/9/3.
*/
@Service
@Transactional
@BaseService
public class SysMenuRoleServiceImpl extends BaseServiceImpl<SysMenuRoleMapper, SysMenuRole, SysMenuRoleCriteria, Integer> implements SysMenuRoleService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysMenuRoleServiceImpl.class);

}