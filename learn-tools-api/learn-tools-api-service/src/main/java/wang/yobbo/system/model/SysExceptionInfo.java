package wang.yobbo.system.model;

import java.io.Serializable;
import java.util.Date;

public class SysExceptionInfo implements Serializable {
    /**
     * 主键id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     * Controller名
     *
     * @mbg.generated
     */
    private String controllerName;

    /**
     * 方法名
     *
     * @mbg.generated
     */
    private String methodName;

    /**
     * 请求端ip
     *
     * @mbg.generated
     */
    private String remoteHost;

    /**
     * 请求参数map
     *
     * @mbg.generated
     */
    private String parameterMap;

    /**
     * 请求参数字符串
     *
     * @mbg.generated
     */
    private String queryString;

    /**
     * 请求端端口
     *
     * @mbg.generated
     */
    private Integer remotePort;

    /**
     * 请求端设备信息
     *
     * @mbg.generated
     */
    private String userAgent;

    /**
     * token
     *
     * @mbg.generated
     */
    private String authorization;

    /**
     * 创建时间
     *
     * @mbg.generated
     */
    private Date createTime;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getControllerName() {
        return controllerName;
    }

    public void setControllerName(String controllerName) {
        this.controllerName = controllerName;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public String getRemoteHost() {
        return remoteHost;
    }

    public void setRemoteHost(String remoteHost) {
        this.remoteHost = remoteHost;
    }

    public String getParameterMap() {
        return parameterMap;
    }

    public void setParameterMap(String parameterMap) {
        this.parameterMap = parameterMap;
    }

    public String getQueryString() {
        return queryString;
    }

    public void setQueryString(String queryString) {
        this.queryString = queryString;
    }

    public Integer getRemotePort() {
        return remotePort;
    }

    public void setRemotePort(Integer remotePort) {
        this.remotePort = remotePort;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }

    public String getAuthorization() {
        return authorization;
    }

    public void setAuthorization(String authorization) {
        this.authorization = authorization;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", controllerName=").append(controllerName);
        sb.append(", methodName=").append(methodName);
        sb.append(", remoteHost=").append(remoteHost);
        sb.append(", parameterMap=").append(parameterMap);
        sb.append(", queryString=").append(queryString);
        sb.append(", remotePort=").append(remotePort);
        sb.append(", userAgent=").append(userAgent);
        sb.append(", authorization=").append(authorization);
        sb.append(", createTime=").append(createTime);
        sb.append("]");
        return sb.toString();
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        SysExceptionInfo other = (SysExceptionInfo) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getControllerName() == null ? other.getControllerName() == null : this.getControllerName().equals(other.getControllerName()))
            && (this.getMethodName() == null ? other.getMethodName() == null : this.getMethodName().equals(other.getMethodName()))
            && (this.getRemoteHost() == null ? other.getRemoteHost() == null : this.getRemoteHost().equals(other.getRemoteHost()))
            && (this.getParameterMap() == null ? other.getParameterMap() == null : this.getParameterMap().equals(other.getParameterMap()))
            && (this.getQueryString() == null ? other.getQueryString() == null : this.getQueryString().equals(other.getQueryString()))
            && (this.getRemotePort() == null ? other.getRemotePort() == null : this.getRemotePort().equals(other.getRemotePort()))
            && (this.getUserAgent() == null ? other.getUserAgent() == null : this.getUserAgent().equals(other.getUserAgent()))
            && (this.getAuthorization() == null ? other.getAuthorization() == null : this.getAuthorization().equals(other.getAuthorization()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getControllerName() == null) ? 0 : getControllerName().hashCode());
        result = prime * result + ((getMethodName() == null) ? 0 : getMethodName().hashCode());
        result = prime * result + ((getRemoteHost() == null) ? 0 : getRemoteHost().hashCode());
        result = prime * result + ((getParameterMap() == null) ? 0 : getParameterMap().hashCode());
        result = prime * result + ((getQueryString() == null) ? 0 : getQueryString().hashCode());
        result = prime * result + ((getRemotePort() == null) ? 0 : getRemotePort().hashCode());
        result = prime * result + ((getUserAgent() == null) ? 0 : getUserAgent().hashCode());
        result = prime * result + ((getAuthorization() == null) ? 0 : getAuthorization().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        return result;
    }
}