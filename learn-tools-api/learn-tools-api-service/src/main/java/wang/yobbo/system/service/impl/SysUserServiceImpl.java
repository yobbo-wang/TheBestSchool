package wang.yobbo.system.service.impl;

import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.system.dao.SysUserMapper;
import wang.yobbo.system.model.SysUser;
import wang.yobbo.system.model.SysUserCriteria;
import wang.yobbo.system.service.SysUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.InvocationTargetException;

/**
* SysUserService实现
* Created by yobbo on 2018/8/29.
*/
@Service
@Transactional
@BaseService
public class SysUserServiceImpl extends BaseServiceImpl<SysUserMapper, SysUser, SysUserCriteria> implements SysUserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysUserServiceImpl.class);

    @Override
    public SysUser findUserByUsername(String username) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        SysUserCriteria sysUserCriteria = new SysUserCriteria();
        SysUserCriteria.Criteria criteria = sysUserCriteria.createCriteria();
        criteria.andUsernameEqualTo(username);
        SysUser sysUser = super.selectFirstByExample(sysUserCriteria);
        LOGGER.debug("查询记录用户名为：{}, 密码为：{}", sysUser.getUsername(), sysUser.getPassword());
        if(sysUser == null) {
            sysUser = new SysUser();
            sysUser.setPassword("");
        }
        return sysUser;
    }
}