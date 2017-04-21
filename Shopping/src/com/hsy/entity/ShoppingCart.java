package com.hsy.entity;
/**
 * 对应表shopping_cart的实体类
 * @author haitang
 *
 */
public class ShoppingCart {

	private int ShoppingCartId;
	private int userId;
	private String commodityId;
	public ShoppingCart(int shoppingCartId, int userId, String commodityId) {
		super();
		ShoppingCartId = shoppingCartId;
		this.userId = userId;
		this.commodityId = commodityId;
	}
	
	public ShoppingCart(){
		
	}

	public int getShoppingCartId() {
		return ShoppingCartId;
	}

	public void setShoppingCartId(int shoppingCartId) {
		ShoppingCartId = shoppingCartId;
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
