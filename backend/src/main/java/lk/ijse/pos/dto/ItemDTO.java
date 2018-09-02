package lk.ijse.pos.dto;

import java.io.Serializable;

public class ItemDTO implements Serializable {
    private int code;
    private String description;
    private double unitprice;
    private int qty;
    private String image;

    public ItemDTO() {
    }

    public ItemDTO(int code, String description, double unitprice, int qty) {
        this.code = code;
        this.description = description;
        this.unitprice = unitprice;
        this.qty = qty;
    }

    public ItemDTO(int code, String description, double unitprice, int qty, String image) {
        this.code = code;
        this.description = description;
        this.unitprice = unitprice;
        this.qty = qty;
        this.image = image;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "ItemDTO{" +
                "code=" + code +
                ", description='" + description + '\'' +
                ", unitprice=" + unitprice +
                ", qty=" + qty +
                ", image='" + image + '\'' +
                '}';
    }
}
