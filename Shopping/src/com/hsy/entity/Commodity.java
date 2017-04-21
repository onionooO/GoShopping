package com.hsy.entity;

import java.util.Date;
/**
 * 对应表commidity的实体类
 * @author haitang
 *
 */
public class Commodity {

	private String commodityId;
	private int price;
	private double number;
	private String detail;
	private Date createTime;
	
	public Commodity(){
		
	}
	public Commodity(String commodityId, int price, double number, String detail, Date createTime) {
		super();
		this.commodityId = commodityId;
		this.price = price;
		this.number = number;
		this.detail = detail;
		this.createTime = createTime;
	}
	public String getCommodityId() {
		return commodityId;
	}
	public void setCommodityId(String commodityId) {
		this.commodityId = commodityId;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public double getNumber() {
		return number;
	}
	public void setNumber(double number) {
		this.number = number;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
}
