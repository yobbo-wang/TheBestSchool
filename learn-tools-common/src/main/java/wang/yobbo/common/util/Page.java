/***********************************************************************
 * Module:  Page.java
 * Author:  Saul.li
 * Create Time: 11.14.2014
 * Update logs:
 * Purpose: Defines the Class Page
 ***********************************************************************/

package wang.yobbo.common.util;

import java.io.Serializable;

/**
 * 分页组件
 */
public class Page implements Serializable {
	/**
	 * 默认的序列化版本 id.
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 分页查询开始记录位置.
	 */
	private int begin;
	/**
	 * 分页查看下结束位置.
	 */
	private int end;
	/**
	 * 每页显示记录数.
	 */
	private int length = 10;
	/**
	 * 查询结果总记录数.
	 */
	private int totalRecords;
	/**
	 * 当前页码.
	 */
	private int pageNo;
	/**
	 * 总共页数.
	 */
	private int pageCount;
	/** 
	 * 
	 */
	private String sortname;
	/** 
	 * 
	 */
	private String sortorder;

	/** 
	 * 
	 */
	public Page() {
	}
	/**
	 * 构造函数.
	 * @param begin
	 * @param length
	 */
	public Page(int begin, int length) {
		this.begin = begin;
		this.length = length;
		this.end = this.begin + this.length;
		this.pageNo = (int) Math.floor((this.begin * 1.0d) / this.length) + 1;
	}

	/**
	 * @param begin
	 * @param length
	 * @param totalRecords
	 */
	public Page(int begin, int length, int totalRecords) {
		this(begin, length);
		this.totalRecords = totalRecords;
	}

	/**
	 * 设置页数，自动计算数据范围.
	 * @param pageNo
	 */
	public Page(int pageNo) {
		this.pageNo = pageNo;
		pageNo = pageNo > 0 ? pageNo : 1;
		this.begin = this.length * (pageNo - 1);
		this.end = this.length * pageNo;
	}

	/**
	 * @return the begin
	 */
	public int getBegin() {
		return begin;
	}

	/**
	 * @return the end
	 */
	public int getEnd() {
		return end;
	}

	/**
	 * @param end
	 *            the end to set
	 */
	public void setEnd(int end) {
		this.end = end;
	}

	/**
	 * @param begin
	 *            the begin to set
	 */
	public void setBegin(int begin) {
		this.begin = begin;
		if (this.length != 0) {
			this.pageNo = (int) Math.floor((this.begin * 1.0d) / this.length) + 1;
		}
	}

	/**
	 * @return the length
	 */
	public int getLength() {
		return length;
	}

	/**
	 * @param length
	 *            the length to set
	 */
	public void setLength(int length) {
		this.length = length;
		if (this.begin != 0) {
			this.pageNo = (int) Math.floor((this.begin * 1.0d) / this.length) + 1;
		}
	}

	/**
	 * @return the totalRecords
	 */
	public int getTotalRecords() {
		return totalRecords;
	}

	/**
	 * @param totalRecords
	 *            the totalRecords to set
	 */
	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
		this.pageCount = (int) Math.floor((this.totalRecords * 1.0d)
				/ this.length);
		if (this.totalRecords % this.length != 0) {
			this.pageCount++;
		}
	}

	/**
	 * @return the pageNo
	 */
	public int getPageNo() {
		return pageNo;
	}

	/**
	 * @param pageNo
	 *            the pageNo to set
	 */
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
		pageNo = pageNo > 0 ? pageNo : 1;
		this.begin = this.length * (pageNo - 1);
		this.end = this.length * pageNo;
	}

	/**
	 * @return the pageCount
	 */
	public int getPageCount() {
		if (pageCount == 0) {
			return 1;
		}
		return pageCount;
	}

	/**
	 * @param pageCount
	 *            the pageCount to set
	 */
	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}

	/**
	 * @return the sortname
	 */
	public String getSortname() {
		return sortname;
	}

	/**
	 * @param sortname
	 *            the sortname to set
	 */
	public void setSortname(String sortname) {
		this.sortname = sortname;
	}

	/**
	 * @return the sortorder
	 */
	public String getSortorder() {
		return sortorder;
	}

	/**
	 * @param sortorder
	 *            the sortorder to set
	 */
	public void setSortorder(String sortorder) {
		this.sortorder = sortorder;
	}

	@Override
	public String toString() {
		return "Page [begin=" + begin + ", end=" + end + ", length=" + length
				+ ", totalRecords=" + totalRecords + ", pageNo=" + pageNo
				+ ", pageCount=" + pageCount + ", sortname=" + sortname
				+ ", sortorder=" + sortorder + "]";
	}
}