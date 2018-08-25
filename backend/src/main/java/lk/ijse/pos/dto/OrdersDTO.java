package lk.ijse.pos.dto;

import java.util.List;

public class OrdersDTO {

    private int oid;
    private String date;
    private double fullprice;

    private CustomerDTO customerDTO;
    private List<ItemDTO> itemList;


    public OrdersDTO() {
    }

    public OrdersDTO(int oid, String date, double fullprice) {
        this.oid = oid;
        this.date = date;
        this.fullprice = fullprice;

    }

    public OrdersDTO(int oid, String date, double fullprice, CustomerDTO customerDTO, List<ItemDTO> itemList) {
        this.oid = oid;
        this.date = date;
        this.fullprice = fullprice;
        this.customerDTO = customerDTO;
        this.itemList = itemList;
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

    @Override
    public String toString() {
        return "OrdersDTO{" +
                "oid=" + oid +
                ", date='" + date + '\'' +
                ", fullprice=" + fullprice +
                '}';
    }
}
