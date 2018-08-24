package wang.yobbo.common.db;

/**
 * 多数据源配置，实现读写分离
 *  主库写入数据
 *  从库查询数据
 */
public enum DataSourceEnum{
    // 主库
    MASTER("masterDataSource", true),
    // 从库
    SLAVE("slaveDataSource", false),;

    private String name;
    private boolean master;

    DataSourceEnum(String name, boolean master) {
        this.name = name;
        this.master = master;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isMaster() {
        return master;
    }

    public void setMaster(boolean master) {
        this.master = master;
    }

    public String getDufault(){
        String defaultDataSource = "";
        for (DataSourceEnum dataSourceEnum : DataSourceEnum.values()) {
            if (!"".equals(defaultDataSource)) {
                break;
            }
            if (dataSourceEnum.master) {
                defaultDataSource = dataSourceEnum.getName();
            }
        }
        return defaultDataSource;
    }
}
