package wang.yobbo.admin.service.Impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wang.yobbo.admin.dao.UpmsUserMapper;
import wang.yobbo.admin.entity.UpmsUser;
import wang.yobbo.admin.entity.UpmsUserCriteria;
import wang.yobbo.admin.service.UpmsUserService;
import wang.yobbo.common.annotation.BaseService;
import wang.yobbo.common.base.BaseServiceImpl;

@Service
@Transactional
@BaseService
public class UpmsUserServiceImpl extends BaseServiceImpl<UpmsUserMapper, UpmsUser, UpmsUserCriteria> implements UpmsUserService {

    public UpmsUser getList(){
        return this.selectByPrimaryKey(1);
    }
}
