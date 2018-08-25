package lk.ijse.pos.dto;

public class OrderDetailsDTO {

    private int oid; // order id
    private int code; // item code
    private int qty;
    private double amount;

    public OrderDetailsDTO() {
    }

    public OrderDetailsDTO(int oid, int code, int qty, double amount) {
        this.oid = oid;
        this.code = code;
        this.qty = qty;
        this.amount = amount;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getqty() {
        return qty;
    }

    public void setqty(int qty) {
        this.qty = qty;
    }

    public double getamount() {
        return amount;
    }

    public void setamount(double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "OrderDetailsDTO{" +
                "oid=" + oid +
                ", code=" + code +
                ", qty=" + qty +
                ", amount=" + amount +
                '}';
    }
}
