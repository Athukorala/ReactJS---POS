package lk.ijse.pos.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Orders")
public class Orders  implements Serializable {
    @Id
    private int oid;

    private String date;
    private double fullprice;
    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderDetails> orderDetails;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumns(@JoinColumn(name = "id",referencedColumnName = "id",insertable = false,updatable = false))
    private Customer customer; // customer

    public Orders() {
    }

    public Orders(int oid, String date, double fullprice, List<OrderDetails> orderDetails, Customer customer) {
        this.oid = oid;
        this.date = date;
        this.fullprice = fullprice;
        this.orderDetails = orderDetails;
        this.customer = customer;
    }

    public Orders(int id,String date, double fullprice, Customer customer) {
        this.oid=id;
        this.date = date;
        this.fullprice = fullprice;
        this.customer = customer;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getFullprice() {
        return fullprice;
    }

    public void setFullprice(double fullprice) {
        this.fullprice = fullprice;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<OrderDetails> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetails> orderDetails) {
        this.orderDetails = orderDetails;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "oid=" + oid +
                ", date='" + date + '\'' +
                ", fullprice=" + fullprice +
                ", orderDetails=" + orderDetails +
                ", customer=" + customer +
                '}';
    }
}
