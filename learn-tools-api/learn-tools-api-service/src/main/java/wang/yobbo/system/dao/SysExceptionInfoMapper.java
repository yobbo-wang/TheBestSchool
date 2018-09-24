package wang.yobbo.system.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import wang.yobbo.system.model.SysExceptionInfo;
import wang.yobbo.system.model.SysExceptionInfoCriteria;

public interface SysExceptionInfoMapper {
    long countByExample(SysExceptionInfoCriteria example);

    int deleteByExample(SysExceptionInfoCriteria example);

    int deleteByPrimaryKey(Integer id);

    int insert(SysExceptionInfo record);

    int insertSelective(SysExceptionInfo record);

    List<SysExceptionInfo> selectByExample(SysExceptionInfoCriteria example);

    SysExceptionInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") SysExceptionInfo record, @Param("example") SysExceptionInfoCriteria example);

    int updateByExample(@Param("record") SysExceptionInfo record, @Param("example") SysExceptionInfoCriteria example);

    int updateByPrimaryKeySelective(SysExceptionInfo record);

    int updateByPrimaryKey(SysExceptionInfo record);
}