package lk.ijse.pos.entity;

import javax.persistence.*;

@Entity
@Table(name = "Orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int oid;

    private String date;
    private double fullprice;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumns(@JoinColumn(name = "id",referencedColumnName = "id",insertable = false,updatable = false))
    private Customer customer; // customer

    public Orders() {
    }

    public Orders(String date, double fullprice) {
        this.date = date;
        this.fullprice = fullprice;
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

    @Override
    public String toString() {
        return "Orders{" +
                "oid=" + oid +
                ", date='" + date + '\'' +
                ", fullprice=" + fullprice +
                ", customer=" + customer +
                '}';
    }
}
