package lk.ijse.pos.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class OrderDetailsPK implements Serializable {

    private int oid;
    private int iid;

    public OrderDetailsPK() {

    }

    public OrderDetailsPK(int oid, int iid) {
        this.oid = oid;
        this.iid = iid;
    }



}