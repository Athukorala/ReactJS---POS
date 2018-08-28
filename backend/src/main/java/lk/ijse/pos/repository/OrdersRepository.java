package lk.ijse.pos.repository;

import lk.ijse.pos.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders,Integer> {

        @Query("SELECT oid,date,fullprice,customer from Orders")
        List<Object> getAll();

//        @NamedNativeQuery(query="select * from orders", resultClass=Orders.class){}
//        List<Orders> getAB2();
}
