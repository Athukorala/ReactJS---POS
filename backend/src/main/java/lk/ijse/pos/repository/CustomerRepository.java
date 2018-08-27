package lk.ijse.pos.repository;

import lk.ijse.pos.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {

//    List<Customer> findCustomersByNameLike(String name);

    @Query("SELECT c FROM Customer c WHERE c.name LIKE ?#{[0]}")
//    List<Customer> letsFindSomeCustomers(@Param("customerId") String name);
    List<Customer> letsFindSomeCustomers(String name);

//    @Query("SELECT oid from orders")
//    Lisr<Integer>
}
