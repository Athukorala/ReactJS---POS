package lk.ijse.pos.controller;

import lk.ijse.pos.dto.OrdersDTO;
import lk.ijse.pos.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/orders")

public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping
    public void saveOrder(@RequestBody OrdersDTO ordersDTO) {
        System.out.println("id: "+ordersDTO);
        System.out.println(ordersDTO);

        service.saveOrder(ordersDTO);
    }

    @GetMapping
    public Long getOrderCount(){

        return service.getOrderCount()+1;
    }

    @GetMapping("/getFullCount")
    public Long getOrderFullyCount(){
        return service.getOrderCount();
    }

    @GetMapping("/getAll")
    public Object getAll(){

        return service.getAll();
    }


    @GetMapping("/ab")
    public Object ab(){
        return service.getAB();
    }

}
