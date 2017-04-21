package com.hsy.entity;
/**
 * 对应表detail的实体类
 * @author haitang
 *
 */
public class Detail {

	private int detailId;
	private int userId;
	private String commodityId;
	public Detail(int detailId, int userId, String commodityId) {
		super();
		this.detailId = detailId;
		this.userId = userId;
		this.commodityId = commodityId;
	}
	
	public Detail(){
		
	}

	public int getDetailId() {
		return detailId;
	}

	public void setDetailId(int detailId) {
		this.detailId = detailId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getCommodityId() {
		return commodityId;
	}

	public void setCommodityId(String commodityId) {
		this.commodityId = commodityId;
	}
}
