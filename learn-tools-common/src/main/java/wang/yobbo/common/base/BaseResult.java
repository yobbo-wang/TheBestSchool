package wang.yobbo.common.base;

/**
 * 统一返回结果类
 * Created by on 2017/2/18.
 */
public class BaseResult {

    /**
     * 状态
     */
    private boolean success;

    /**
     * 错误状态
     */
    private String errorCode;

    /**
     * 错误信息
     */
    private String errorMsg;

    /**
     * 数据结果集
     */
    public Object data;

    public BaseResult(){}

    public BaseResult(Object data) {
        this.data = data;
        this.success = true;
    }

    public BaseResult(String errorCode, String errorMsg, Object data) {
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
        this.data = data;
        this.success = false;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        success = success;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
