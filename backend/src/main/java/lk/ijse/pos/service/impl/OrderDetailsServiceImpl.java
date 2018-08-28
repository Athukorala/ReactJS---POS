package lk.ijse.pos.service.impl;

import lk.ijse.pos.entity.OrderDetails;
import lk.ijse.pos.repository.OrderDetailsRepository;
import lk.ijse.pos.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class OrderDetailsServiceImpl implements OrderDetailsService {

    @Autowired
    private OrderDetailsRepository repository;

    @Override
    public List<Object> findAll1() {
        return  repository.getAll();

    }

    @Override
    public List<OrderDetails> findAll() {
        List<OrderDetails> list =  repository.findAll();
        return list;

    }
}
