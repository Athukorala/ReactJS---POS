package lk.ijse.pos.service.impl;

import lk.ijse.pos.dto.CustomerDTO;
import lk.ijse.pos.entity.Customer;
import lk.ijse.pos.repository.CustomerRepository;
import lk.ijse.pos.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repository;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void saveCustomer(CustomerDTO dto) {

        repository.save(new Customer(dto.getId(), dto.getName(), dto.getAddress(), dto.getImage()));
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void updateCustomer(int customerId, CustomerDTO dto) {
        if (!String.valueOf(dto.getId()).equalsIgnoreCase(String.valueOf(customerId))) {
            throw new RuntimeException("Customer ID mismatched");
        }
        if (repository.existsById(customerId)) {
            repository.save(new Customer(dto.getId(), dto.getName(), dto.getAddress() ,dto.getImage()));
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void deleteCustomer(int customerId) {
        repository.deleteById(customerId);

    }

    @Override
    public CustomerDTO findCustomer(int customerId) {
        System.out.println(customerId);
        Customer customer = repository.findById(customerId).get();

        return new CustomerDTO(customer.getId(), customer.getName(), customer.getAddress(),customer.getImage());
    }

    @Override
    public List<CustomerDTO> findAllCustomers() {
        List<Customer> allCustomers = repository.findAll();
        System.out.println(allCustomers);
        List<CustomerDTO> dtos = new ArrayList<>();
        allCustomers.forEach(c -> dtos.add(new CustomerDTO(c.getId(), c.getName(), c.getAddress(),c.getImage())));
        return dtos;
    }

    @Override
    public List<CustomerDTO> findCustomersLike(String name) {
        List<Customer> allCustomers =  repository.letsFindSomeCustomers(name + "%");
        List<CustomerDTO> dtos = new ArrayList<>();
        allCustomers.forEach(c -> dtos.add(new CustomerDTO(c.getId(), c.getName(), c.getAddress())));
        return dtos;
    }

    @Override
    public long getCustomersCount() {

        return  repository.count();
    }
}
