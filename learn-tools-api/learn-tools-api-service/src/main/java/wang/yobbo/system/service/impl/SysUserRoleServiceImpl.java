package wang.yobbo.system.service.impl;

import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.system.dao.SysUserRoleMapper;
import wang.yobbo.system.model.SysUserRole;
import wang.yobbo.system.model.SysUserRoleCriteria;
import wang.yobbo.system.service.SysUserRoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
* SysUserRoleService实现
* Created by yobbo on 2018/8/29.
*/
@Service
@BaseService
public class SysUserRoleServiceImpl extends BaseServiceImpl<SysUserRoleMapper, SysUserRole, SysUserRoleCriteria, Integer> implements SysUserRoleService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysUserRoleServiceImpl.class);

}