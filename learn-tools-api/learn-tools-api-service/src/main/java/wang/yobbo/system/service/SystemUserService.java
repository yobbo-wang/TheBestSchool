package wang.yobbo.system.service;

import wang.yobbo.system.model.UpmsUser;

public interface SystemUserService {
    UpmsUser findUserByUsername(String username);
}
