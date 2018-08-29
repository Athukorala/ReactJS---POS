package lk.ijse.pos.service;


import lk.ijse.pos.entity.OrderDetails;

import java.util.List;

public interface OrderDetailsService {
    List<OrderDetails> findAll();
    List<Object> findAll1(int id);
}
