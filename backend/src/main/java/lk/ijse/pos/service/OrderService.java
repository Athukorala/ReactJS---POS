package lk.ijse.pos.service;

import lk.ijse.pos.dto.OrdersDTO;

import java.util.List;

public interface OrderService {
    void saveOrder(OrdersDTO dto);
    Long getOrderCount();
    List<OrdersDTO> getAll();
    List<OrdersDTO> getAB();

}
