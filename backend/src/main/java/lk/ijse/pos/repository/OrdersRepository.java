package lk.ijse.pos.repository;

import lk.ijse.pos.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders,Integer> {

        @Query("SELECT o.oid, o.date, o.fullprice from Orders o")
        List<Orders> getAB();
}
