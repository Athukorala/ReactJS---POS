package lk.ijse.pos.service.impl;

import lk.ijse.pos.dto.OrdersDTO;
import lk.ijse.pos.service.OrderService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class OrderServiceImpl implements OrderService {
    @Override
    public void saveOrder(OrdersDTO dto) {
        System.out.println(dto);
    }
}
