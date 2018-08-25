package lk.ijse.pos.dto;

public class ItemDTO {
    private int code;
    private String description;
    private double unitprice;
    private int qty;

    public ItemDTO() {
    }

    public ItemDTO(int code, String description, double unitprice, int qty) {
        this.code = code;
        this.description = description;
        this.unitprice = unitprice;
        this.qty = qty;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getUnitprice() {
        return unitprice;
    }

    public void setUnitprice(double unitprice) {
        this.unitprice = unitprice;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "ItemDTO{" +
                "code=" + code +
                ", description='" + description + '\'' +
                ", unitprice=" + unitprice +
                ", qty=" + qty +
                '}';
    }
}
