package wang.yobbo.service.Impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;
import wang.yobbo.dao.system.UpmsUserMapper;
import wang.yobbo.entity.system.UpmsUser;
import wang.yobbo.entity.system.UpmsUserCriteria;
import wang.yobbo.service.SystemUserService;

@Service
@Transactional
@BaseService
public class SystemUserServiceImpl extends BaseServiceImpl<UpmsUserMapper, UpmsUser, UpmsUserCriteria> implements SystemUserService {

    @Override
    public UpmsUser findUserByUsername(String username) {
        UpmsUserCriteria upmsUserCriteria = new UpmsUserCriteria();
        UpmsUserCriteria.Criteria criteria = upmsUserCriteria.createCriteria();
        criteria.andUsernameEqualTo(username);
        return super.selectFirstByExample(upmsUserCriteria);
    }
}
