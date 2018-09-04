package wang.yobbo.system.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import wang.yobbo.system.model.SysMenuRole;
import wang.yobbo.system.model.SysMenuRoleCriteria;

public interface SysMenuRoleMapper {
    long countByExample(SysMenuRoleCriteria example);

    int deleteByExample(SysMenuRoleCriteria example);

    int deleteByPrimaryKey(Integer id);

    int insert(SysMenuRole record);

    int insertSelective(SysMenuRole record);

    List<SysMenuRole> selectByExample(SysMenuRoleCriteria example);

    SysMenuRole selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") SysMenuRole record, @Param("example") SysMenuRoleCriteria example);

    int updateByExample(@Param("record") SysMenuRole record, @Param("example") SysMenuRoleCriteria example);

    int updateByPrimaryKeySelective(SysMenuRole record);

    int updateByPrimaryKey(SysMenuRole record);
}