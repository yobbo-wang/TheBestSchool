package wang.yobbo.system.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import wang.yobbo.system.model.SysErrorInfo;
import wang.yobbo.system.model.SysErrorInfoCriteria;

public interface SysErrorInfoMapper {
    long countByExample(SysErrorInfoCriteria example);

    int deleteByExample(SysErrorInfoCriteria example);

    int deleteByPrimaryKey(Integer id);

    int insert(SysErrorInfo record);

    int insertSelective(SysErrorInfo record);

    List<SysErrorInfo> selectByExample(SysErrorInfoCriteria example);

    SysErrorInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") SysErrorInfo record, @Param("example") SysErrorInfoCriteria example);

    int updateByExample(@Param("record") SysErrorInfo record, @Param("example") SysErrorInfoCriteria example);

    int updateByPrimaryKeySelective(SysErrorInfo record);

    int updateByPrimaryKey(SysErrorInfo record);
}