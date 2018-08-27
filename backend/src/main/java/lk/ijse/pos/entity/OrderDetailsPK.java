package lk.ijse.pos.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class OrderDetailsPK implements Serializable {

    private int oid;
    private int code;

    public OrderDetailsPK() {

    }

    public OrderDetailsPK(int oid, int iid) {
        this.oid = oid;
        this.code = iid;
    }



}