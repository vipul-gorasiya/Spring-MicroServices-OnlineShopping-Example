package com.vipul.dto;

import java.util.Date;
import java.util.List;

public class SalesOrderDTO {

	private long id;
	private Date orderDate;
	private long custId;
	private String orderDesc;
	private double totalPrice;
	private List<OrderLineItemDTO> orderLineItems;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public long getCustId() {
		return custId;
	}

	public void setCustId(long custId) {
		this.custId = custId;
	}

	public String getOrderDesc() {
		return orderDesc;
	}

	public void setOrderDesc(String orderDesc) {
		this.orderDesc = orderDesc;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public List<OrderLineItemDTO> getOrderLineItems() {
		return orderLineItems;
	}

	public void setOrderLineItems(List<OrderLineItemDTO> orderLineItems) {
		this.orderLineItems = orderLineItems;
	}

}
