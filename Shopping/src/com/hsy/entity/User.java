package com.hsy.entity;

import java.util.Date;
/**
 * 对应表user的实体类
 * @author haitang
 *
 */
public class User {

	private int userId;
	private String name;
	private String phone;
	private String password;
	private Date create_time;
	
	public User(){
		
	}
	public User(int userId, String name, String phone, String password, Date create_time) {
		super();
		this.userId = userId;
		this.name = name;
		this.phone = phone;
		this.password = password;
		this.create_time = create_time;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getCreate_time() {
		return create_time;
	}
	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}
	
}
