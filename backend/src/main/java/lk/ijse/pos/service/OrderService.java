package lk.ijse.pos.service;

import lk.ijse.pos.dto.OrdersDTO;
import lk.ijse.pos.entity.Orders;

import java.util.List;

public interface OrderService {
    void saveOrder(OrdersDTO dto);
    Long getOrderCount();
    List<Object> getAll();
    List<Orders> findAll();


}
