package lk.ijse.pos.service;

import lk.ijse.pos.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {

    void saveCustomer(CustomerDTO dto);

    void updateCustomer(int customerId, CustomerDTO dto);

    void deleteCustomer(int customerId);

    CustomerDTO findCustomer(int customerId);

    List<CustomerDTO> findAllCustomers();

    List<CustomerDTO> findCustomersLike(String name);

    long getCustomersCount();

}
