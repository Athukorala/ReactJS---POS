package lk.ijse.pos.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Orderdetails")
public class OrderDetails implements Serializable {

    @EmbeddedId
    private OrderDetailsPK orderdetailsId;

    private int itemQty;
    private double amount;

    public OrderDetails() {
    }

    public OrderDetails(OrderDetailsPK orderdetailsId, int itemQty, double amount) {
        this.orderdetailsId = orderdetailsId;
        this.itemQty = itemQty;
        this.amount = amount;
    }

    public OrderDetailsPK getOrderdetailsId() {
        return orderdetailsId;
    }

    public void setOrderdetailsId(OrderDetailsPK orderdetailsId) {
        this.orderdetailsId = orderdetailsId;
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
                ", itemQty=" + itemQty +
                ", amount=" + amount +
                '}';
    }
}
