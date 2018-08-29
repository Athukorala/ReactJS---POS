package lk.ijse.pos.repository;

import lk.ijse.pos.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails,Integer> {

    @Query("SELECT c FROM OrderDetails c ")
    List<Object> getAll1();

    @Query(value="SELECT * FROM OrderDetails where oid=?1",nativeQuery = true)
    List<Object> getAll(int id);

}
