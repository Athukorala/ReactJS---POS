package lk.ijse.pos.service.impl;

import lk.ijse.pos.dto.ItemDTO;
import lk.ijse.pos.entity.Item;
import lk.ijse.pos.repository.ItemRepository;
import lk.ijse.pos.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository repository;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void saveItem(ItemDTO dto) {
        repository.save(new Item(dto.getCode(), dto.getDescription(), dto.getUnitprice(),dto.getQty(), dto.getImage()));
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void updateItem(int itemId, ItemDTO dto) {
        if (!String.valueOf(dto.getCode()).equalsIgnoreCase(String.valueOf(itemId))) {
            throw new RuntimeException("Item ID mismatched");
        }
        if (repository.existsById(itemId)) {
            repository.save(new Item(dto.getCode(), dto.getDescription(), dto.getUnitprice(),dto.getQty()));
        }else{
            throw new RuntimeException("Item doesn't exist");
        }
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void deleteItem(int itemId) {

        repository.deleteById(itemId);
    }

    @Override
    public ItemDTO findItem(int itemId) {
        Item item = repository.findById(itemId).get();

        return new ItemDTO(item.getCode(), item.getDescription(), item.getUnitprice(),item.getQty());
    }

    @Override
    public List<ItemDTO> findAllItems() {
        List<Item> allItems = repository.findAll();
        List<ItemDTO> dtos = new ArrayList<>();
        allItems.forEach(c -> dtos.add(new ItemDTO(c.getCode(), c.getDescription(), c.getUnitprice(),c.getQty())));
        return dtos;
    }
}
