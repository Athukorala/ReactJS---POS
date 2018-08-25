package lk.ijse.pos.dto;

public class OrdersDTO {

    private int oid;
    private String date;
    private double fullprice;


    public OrdersDTO() {
    }

    public OrdersDTO(int oid, String date, double fullprice) {
        this.oid = oid;
        this.date = date;
        this.fullprice = fullprice;

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
