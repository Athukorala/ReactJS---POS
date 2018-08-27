package lk.ijse.pos.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "OrderDetails")
public class OrderDetails implements Serializable {

    @EmbeddedId
    private OrderDetailsPK orderdetailsId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumns(@JoinColumn(name = "oid",referencedColumnName = "oid",insertable = false,updatable = false))
    private Orders orders; // orders

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumns(@JoinColumn(name = "code",referencedColumnName = "code",insertable = false,updatable = false))
    private Item item; // item

    private int itemQty;
    private double amount;

    public OrderDetails() {
    }

    public OrderDetails(OrderDetailsPK orderdetailsId, Orders orders, Item item, int itemQty, double amount) {
        this.orderdetailsId = orderdetailsId;
        this.orders = orders;
        this.item = item;
        this.itemQty = itemQty;
        this.amount = amount;
    }

    public OrderDetailsPK getOrderdetailsId() {
        return orderdetailsId;
    }

    public void setOrderdetailsId(OrderDetailsPK orderdetailsId) {
        this.orderdetailsId = orderdetailsId;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getItemQty() {
        return itemQty;
    }

    public void setItemQty(int itemQty) {
        this.itemQty = itemQty;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "OrderDetails{" +
                "orderdetailsId=" + orderdetailsId +
                ", orders=" + orders +
                ", item=" + item +
                ", itemQty=" + itemQty +
                ", amount=" + amount +
                '}';
    }
}
