package com.vipul.dto;

import java.sql.Timestamp;
import java.util.Set;

public class SalesOrderDTO {

	private long id;
	private Timestamp orderDate;
	private long custId;
	private String orderDesc;
	private double totalPrice;
	private Set<OrderLineItemDTO> orderLineItems;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Timestamp getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Timestamp orderDate) {
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

	public Set<OrderLineItemDTO> getOrderLineItems() {
		return orderLineItems;
	}

	public void setOrderLineItems(Set<OrderLineItemDTO> orderLineItems) {
		this.orderLineItems = orderLineItems;
	}

}
