package lk.ijse.pos.controller;

import lk.ijse.pos.dto.ItemDTO;
import lk.ijse.pos.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/items")

public class ItemController {

    @Autowired
    private ItemService service;

    @PutMapping
    public void saveItem(@RequestBody ItemDTO ItemDTO) {

        service.saveItem(ItemDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable("id") int itemId) {

        service.deleteItem(itemId);
    }

    @PostMapping("/{id}")
    public void updateItem(@PathVariable("id") int itemId,
                               @RequestBody ItemDTO ItemDTO) {
        System.out.println("id: "+itemId);
        System.out.println(ItemDTO);

        service.updateItem(itemId, ItemDTO);
    }

    @GetMapping("/{id}")
    public ItemDTO findItem(@PathVariable("id") int itemId) {
        System.out.println(itemId);
        return service.findItem(itemId);
    }

    @GetMapping
    public Object findAllCustomers() {

            return service.findAllItems();

    }
}
