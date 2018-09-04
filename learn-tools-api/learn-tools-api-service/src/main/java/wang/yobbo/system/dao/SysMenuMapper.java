package wang.yobbo.system.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import wang.yobbo.system.model.SysMenu;
import wang.yobbo.system.model.SysMenuCriteria;

public interface SysMenuMapper {
    long countByExample(SysMenuCriteria example);

    int deleteByExample(SysMenuCriteria example);

    int deleteByPrimaryKey(String id);

    int insert(SysMenu record);

    int insertSelective(SysMenu record);

    List<SysMenu> selectByExample(SysMenuCriteria example);

    SysMenu selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") SysMenu record, @Param("example") SysMenuCriteria example);

    int updateByExample(@Param("record") SysMenu record, @Param("example") SysMenuCriteria example);

    int updateByPrimaryKeySelective(SysMenu record);

    int updateByPrimaryKey(SysMenu record);
}