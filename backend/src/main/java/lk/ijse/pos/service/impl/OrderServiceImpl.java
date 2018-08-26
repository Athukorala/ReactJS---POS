package lk.ijse.pos.service.impl;

import lk.ijse.pos.dto.CustomerDTO;
import lk.ijse.pos.dto.OrdersDTO;
import lk.ijse.pos.entity.Customer;
import lk.ijse.pos.entity.Orders;
import lk.ijse.pos.repository.OrdersRepository;
import lk.ijse.pos.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrdersRepository repository;

    @Override
    public void saveOrder(OrdersDTO dto) {
        System.out.println("`````````````````id: "+dto.getCustomerDTO().getId());
        Customer customer=new Customer(dto.getCustomerDTO().getId());
        repository.save(new Orders(dto.getOid(),dto.getDate(), dto.getFullprice(), customer));
    }
}
