package lk.ijse.pos.service;

import lk.ijse.pos.dto.ItemDTO;

import java.util.List;

public interface ItemService {
    void saveItem(ItemDTO dto);

    void updateItem(int itemId, ItemDTO dto);

    void deleteItem(int itemId);

    ItemDTO findItem(int itemId);

    List<ItemDTO> findAllItems();


}
