package wang.yobbo.system.dao;

import org.apache.ibatis.annotations.Param;
import wang.yobbo.system.model.UpmsUser;
import wang.yobbo.system.model.UpmsUserCriteria;

import java.util.List;

public interface UpmsUserMapper {
    int countByExample(UpmsUserCriteria example);

    int deleteByExample(UpmsUserCriteria example);

    int deleteByPrimaryKey(Integer userId);

    int insert(UpmsUser record);

    int insertSelective(UpmsUser record);

    List<UpmsUser> selectByExample(UpmsUserCriteria example);

    UpmsUser selectByPrimaryKey(Integer userId);

    int updateByExampleSelective(@Param("record") UpmsUser record, @Param("example") UpmsUserCriteria example);

    int updateByExample(@Param("record") UpmsUser record, @Param("example") UpmsUserCriteria example);

    int updateByPrimaryKeySelective(UpmsUser record);

    int updateByPrimaryKey(UpmsUser record);
}