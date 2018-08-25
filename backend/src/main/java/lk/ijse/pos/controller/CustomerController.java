package lk.ijse.pos.controller;

import lk.ijse.pos.dto.CustomerDTO;
import lk.ijse.pos.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/customers")

public class CustomerController {

    private static String PATH="WEB-INF/CustomerImages";

    @Autowired
    private CustomerService service;

    @PutMapping
    public void saveCustomer(@RequestBody CustomerDTO customerDTO) {
        System.out.println("Cus controller: "+customerDTO);
        service.saveCustomer(customerDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable("id") int customerId) {
        service.deleteCustomer(customerId);
    }

    @PostMapping("/{id}")
    public void updateCustomer(@PathVariable("id") int customerId,
                               @RequestBody CustomerDTO customerDTO) {
        System.out.println("id: "+customerId);
        System.out.println(customerDTO);

        service.updateCustomer(customerId, customerDTO);
    }

    @GetMapping("/{id}")
    public CustomerDTO findCustomer(@PathVariable("id") int customerId) {
        System.out.println(customerId);
        return service.findCustomer(customerId);
    }

    @GetMapping
    public Object findAllCustomers(@RequestParam(value = "action", required = false) String action
            , @RequestParam(value = "name", required = false) String name) {
        if (action != null) {
            switch (action) {
                case "count":
                    return service.getCustomersCount();
                case "like":
                    return service.findCustomersLike(name);
                default:
                    return service.findAllCustomers();
            }
        } else {
            return service.findAllCustomers();
        }
    }
}
