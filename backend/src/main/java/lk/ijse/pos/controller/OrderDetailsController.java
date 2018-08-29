package lk.ijse.pos.controller;

import lk.ijse.pos.entity.OrderDetails;
import lk.ijse.pos.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/orderdetails")
public class OrderDetailsController {

    @Autowired
    private OrderDetailsService service;

    @GetMapping
    public List<OrderDetails> getAll(){

        List<OrderDetails> all = service.findAll();
        System.out.println(all);
        return all;
    }

    @GetMapping("/{id}")
    public List<Object> getAll1(@PathVariable("id") int oid){

        List<Object> all = service.findAll1(oid);
        System.out.println(all);
        return all;
    }

}
