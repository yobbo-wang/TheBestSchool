package wang.yobbo.service;

import wang.yobbo.entity.system.UpmsUser;

public interface SystemUserService {
    UpmsUser findUserByUsername(String username);
}
