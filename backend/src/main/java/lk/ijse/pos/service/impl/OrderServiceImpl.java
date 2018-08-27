package lk.ijse.pos.service.impl;

import lk.ijse.pos.dto.CustomerDTO;
import lk.ijse.pos.dto.ItemDTO;
import lk.ijse.pos.dto.OrderDetailsDTO;
import lk.ijse.pos.dto.OrdersDTO;
import lk.ijse.pos.entity.*;
import lk.ijse.pos.repository.CustomerRepository;
import lk.ijse.pos.repository.ItemRepository;
import lk.ijse.pos.repository.OrdersRepository;
import lk.ijse.pos.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrdersRepository repository;
    @Autowired
    private CustomerRepository cusRepository;
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public void saveOrder(OrdersDTO dto) {
        Customer customer1 = cusRepository.findById(dto.getCustomerDTO().getId()).get();
        System.out.println(customer1);

        List<OrderDetails> odList = new ArrayList<>();

        List<ItemDTO> itemDTOList = dto.getItemList();

        for (ItemDTO itemDTO : itemDTOList) {
            OrderDetailsPK pk = new OrderDetailsPK(dto.getOid(), itemDTO.getCode());

            Item item = itemRepository.findById(itemDTO.getCode()).get();
            OrderDetails od = new OrderDetails();
            Orders orders = new Orders(dto.getOid(), dto.getDate(), dto.getFullprice(), customer1);

            // item qty update
            int enterQty = itemDTO.getQty();
            int qty = item.getQty();
            int newQty = qty - enterQty;

            Item itemEntity = new Item(itemDTO.getCode(), itemDTO.getDescription(), item.getUnitprice(), newQty);

            od.setOrderdetailsId(pk);
            od.setAmount(itemDTO.getUnitprice());
            od.setItem(itemEntity);
//            od.setOrders(orders);
            od.setItemQty(itemDTO.getQty());

            odList.add(od);

        }


        repository.save(new Orders(dto.getOid(), dto.getDate(), dto.getFullprice(), odList, customer1));
    }

    @Override
    public Long getOrderCount() {
        Long l = repository.count();
        return l;
    }

    @Override
    public List<Object> getAll() {

        List<Object> all = repository.getAll();
        return all;

    }
}
