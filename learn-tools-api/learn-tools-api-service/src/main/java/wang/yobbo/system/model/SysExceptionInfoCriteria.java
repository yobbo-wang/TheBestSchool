package wang.yobbo.system.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import wang.yobbo.common.util.Page;

public class SysExceptionInfoCriteria implements Serializable {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private static final long serialVersionUID = 1L;

    protected Page page;

    public SysExceptionInfoCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPage(Page page) {
        this.page=page;
    }

    public Page getPage() {
        return page;
    }

    protected abstract static class GeneratedCriteria implements Serializable {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andControllerNameIsNull() {
            addCriterion("controller_name is null");
            return (Criteria) this;
        }

        public Criteria andControllerNameIsNotNull() {
            addCriterion("controller_name is not null");
            return (Criteria) this;
        }

        public Criteria andControllerNameEqualTo(String value) {
            addCriterion("controller_name =", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameNotEqualTo(String value) {
            addCriterion("controller_name <>", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameGreaterThan(String value) {
            addCriterion("controller_name >", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameGreaterThanOrEqualTo(String value) {
            addCriterion("controller_name >=", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameLessThan(String value) {
            addCriterion("controller_name <", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameLessThanOrEqualTo(String value) {
            addCriterion("controller_name <=", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameLike(String value) {
            addCriterion("controller_name like", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameNotLike(String value) {
            addCriterion("controller_name not like", value, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameIn(List<String> values) {
            addCriterion("controller_name in", values, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameNotIn(List<String> values) {
            addCriterion("controller_name not in", values, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameBetween(String value1, String value2) {
            addCriterion("controller_name between", value1, value2, "controllerName");
            return (Criteria) this;
        }

        public Criteria andControllerNameNotBetween(String value1, String value2) {
            addCriterion("controller_name not between", value1, value2, "controllerName");
            return (Criteria) this;
        }

        public Criteria andMethodNameIsNull() {
            addCriterion("method_name is null");
            return (Criteria) this;
        }

        public Criteria andMethodNameIsNotNull() {
            addCriterion("method_name is not null");
            return (Criteria) this;
        }

        public Criteria andMethodNameEqualTo(String value) {
            addCriterion("method_name =", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameNotEqualTo(String value) {
            addCriterion("method_name <>", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameGreaterThan(String value) {
            addCriterion("method_name >", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameGreaterThanOrEqualTo(String value) {
            addCriterion("method_name >=", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameLessThan(String value) {
            addCriterion("method_name <", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameLessThanOrEqualTo(String value) {
            addCriterion("method_name <=", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameLike(String value) {
            addCriterion("method_name like", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameNotLike(String value) {
            addCriterion("method_name not like", value, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameIn(List<String> values) {
            addCriterion("method_name in", values, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameNotIn(List<String> values) {
            addCriterion("method_name not in", values, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameBetween(String value1, String value2) {
            addCriterion("method_name between", value1, value2, "methodName");
            return (Criteria) this;
        }

        public Criteria andMethodNameNotBetween(String value1, String value2) {
            addCriterion("method_name not between", value1, value2, "methodName");
            return (Criteria) this;
        }

        public Criteria andRemoteHostIsNull() {
            addCriterion("remote_host is null");
            return (Criteria) this;
        }

        public Criteria andRemoteHostIsNotNull() {
            addCriterion("remote_host is not null");
            return (Criteria) this;
        }

        public Criteria andRemoteHostEqualTo(String value) {
            addCriterion("remote_host =", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostNotEqualTo(String value) {
            addCriterion("remote_host <>", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostGreaterThan(String value) {
            addCriterion("remote_host >", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostGreaterThanOrEqualTo(String value) {
            addCriterion("remote_host >=", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostLessThan(String value) {
            addCriterion("remote_host <", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostLessThanOrEqualTo(String value) {
            addCriterion("remote_host <=", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostLike(String value) {
            addCriterion("remote_host like", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostNotLike(String value) {
            addCriterion("remote_host not like", value, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostIn(List<String> values) {
            addCriterion("remote_host in", values, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostNotIn(List<String> values) {
            addCriterion("remote_host not in", values, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostBetween(String value1, String value2) {
            addCriterion("remote_host between", value1, value2, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andRemoteHostNotBetween(String value1, String value2) {
            addCriterion("remote_host not between", value1, value2, "remoteHost");
            return (Criteria) this;
        }

        public Criteria andParameterMapIsNull() {
            addCriterion("parameter_map is null");
            return (Criteria) this;
        }

        public Criteria andParameterMapIsNotNull() {
            addCriterion("parameter_map is not null");
            return (Criteria) this;
        }

        public Criteria andParameterMapEqualTo(String value) {
            addCriterion("parameter_map =", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapNotEqualTo(String value) {
            addCriterion("parameter_map <>", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapGreaterThan(String value) {
            addCriterion("parameter_map >", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapGreaterThanOrEqualTo(String value) {
            addCriterion("parameter_map >=", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapLessThan(String value) {
            addCriterion("parameter_map <", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapLessThanOrEqualTo(String value) {
            addCriterion("parameter_map <=", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapLike(String value) {
            addCriterion("parameter_map like", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapNotLike(String value) {
            addCriterion("parameter_map not like", value, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapIn(List<String> values) {
            addCriterion("parameter_map in", values, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapNotIn(List<String> values) {
            addCriterion("parameter_map not in", values, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapBetween(String value1, String value2) {
            addCriterion("parameter_map between", value1, value2, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andParameterMapNotBetween(String value1, String value2) {
            addCriterion("parameter_map not between", value1, value2, "parameterMap");
            return (Criteria) this;
        }

        public Criteria andQueryStringIsNull() {
            addCriterion("query_string is null");
            return (Criteria) this;
        }

        public Criteria andQueryStringIsNotNull() {
            addCriterion("query_string is not null");
            return (Criteria) this;
        }

        public Criteria andQueryStringEqualTo(String value) {
            addCriterion("query_string =", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringNotEqualTo(String value) {
            addCriterion("query_string <>", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringGreaterThan(String value) {
            addCriterion("query_string >", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringGreaterThanOrEqualTo(String value) {
            addCriterion("query_string >=", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringLessThan(String value) {
            addCriterion("query_string <", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringLessThanOrEqualTo(String value) {
            addCriterion("query_string <=", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringLike(String value) {
            addCriterion("query_string like", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringNotLike(String value) {
            addCriterion("query_string not like", value, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringIn(List<String> values) {
            addCriterion("query_string in", values, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringNotIn(List<String> values) {
            addCriterion("query_string not in", values, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringBetween(String value1, String value2) {
            addCriterion("query_string between", value1, value2, "queryString");
            return (Criteria) this;
        }

        public Criteria andQueryStringNotBetween(String value1, String value2) {
            addCriterion("query_string not between", value1, value2, "queryString");
            return (Criteria) this;
        }

        public Criteria andRemotePortIsNull() {
            addCriterion("remote_port is null");
            return (Criteria) this;
        }

        public Criteria andRemotePortIsNotNull() {
            addCriterion("remote_port is not null");
            return (Criteria) this;
        }

        public Criteria andRemotePortEqualTo(Integer value) {
            addCriterion("remote_port =", value, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortNotEqualTo(Integer value) {
            addCriterion("remote_port <>", value, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortGreaterThan(Integer value) {
            addCriterion("remote_port >", value, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortGreaterThanOrEqualTo(Integer value) {
            addCriterion("remote_port >=", value, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortLessThan(Integer value) {
            addCriterion("remote_port <", value, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortLessThanOrEqualTo(Integer value) {
            addCriterion("remote_port <=", value, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortIn(List<Integer> values) {
            addCriterion("remote_port in", values, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortNotIn(List<Integer> values) {
            addCriterion("remote_port not in", values, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortBetween(Integer value1, Integer value2) {
            addCriterion("remote_port between", value1, value2, "remotePort");
            return (Criteria) this;
        }

        public Criteria andRemotePortNotBetween(Integer value1, Integer value2) {
            addCriterion("remote_port not between", value1, value2, "remotePort");
            return (Criteria) this;
        }

        public Criteria andUserAgentIsNull() {
            addCriterion("user_agent is null");
            return (Criteria) this;
        }

        public Criteria andUserAgentIsNotNull() {
            addCriterion("user_agent is not null");
            return (Criteria) this;
        }

        public Criteria andUserAgentEqualTo(String value) {
            addCriterion("user_agent =", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentNotEqualTo(String value) {
            addCriterion("user_agent <>", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentGreaterThan(String value) {
            addCriterion("user_agent >", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentGreaterThanOrEqualTo(String value) {
            addCriterion("user_agent >=", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentLessThan(String value) {
            addCriterion("user_agent <", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentLessThanOrEqualTo(String value) {
            addCriterion("user_agent <=", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentLike(String value) {
            addCriterion("user_agent like", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentNotLike(String value) {
            addCriterion("user_agent not like", value, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentIn(List<String> values) {
            addCriterion("user_agent in", values, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentNotIn(List<String> values) {
            addCriterion("user_agent not in", values, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentBetween(String value1, String value2) {
            addCriterion("user_agent between", value1, value2, "userAgent");
            return (Criteria) this;
        }

        public Criteria andUserAgentNotBetween(String value1, String value2) {
            addCriterion("user_agent not between", value1, value2, "userAgent");
            return (Criteria) this;
        }

        public Criteria andAuthorizationIsNull() {
            addCriterion("authorization is null");
            return (Criteria) this;
        }

        public Criteria andAuthorizationIsNotNull() {
            addCriterion("authorization is not null");
            return (Criteria) this;
        }

        public Criteria andAuthorizationEqualTo(String value) {
            addCriterion("authorization =", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationNotEqualTo(String value) {
            addCriterion("authorization <>", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationGreaterThan(String value) {
            addCriterion("authorization >", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationGreaterThanOrEqualTo(String value) {
            addCriterion("authorization >=", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationLessThan(String value) {
            addCriterion("authorization <", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationLessThanOrEqualTo(String value) {
            addCriterion("authorization <=", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationLike(String value) {
            addCriterion("authorization like", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationNotLike(String value) {
            addCriterion("authorization not like", value, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationIn(List<String> values) {
            addCriterion("authorization in", values, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationNotIn(List<String> values) {
            addCriterion("authorization not in", values, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationBetween(String value1, String value2) {
            addCriterion("authorization between", value1, value2, "authorization");
            return (Criteria) this;
        }

        public Criteria andAuthorizationNotBetween(String value1, String value2) {
            addCriterion("authorization not between", value1, value2, "authorization");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNull() {
            addCriterion("create_time is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("create_time is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterion("create_time =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterion("create_time <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterion("create_time >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("create_time >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterion("create_time <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("create_time <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterion("create_time in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterion("create_time not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterion("create_time between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("create_time not between", value1, value2, "createTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria implements Serializable {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion implements Serializable {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}