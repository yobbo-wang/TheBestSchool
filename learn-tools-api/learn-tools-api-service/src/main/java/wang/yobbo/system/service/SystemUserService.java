package wang.yobbo.system.service;

import wang.yobbo.system.entity.UpmsUser;

public interface SystemUserService {
    UpmsUser findUserByUsername(String username);
}
