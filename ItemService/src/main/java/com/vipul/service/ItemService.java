package com.vipul.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vipul.datamodel.Item;
import com.vipul.dto.ItemDTO;
import com.vipul.repository.ItemRepository;

@Transactional
@Service
public class ItemService {
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private ItemRepository itemRepository;

	public List<ItemDTO> all() {
		return itemRepository.findAll().stream().map(item -> modelMapper.map(item, ItemDTO.class))
				.collect(Collectors.toList());
	}

	public ItemDTO save(ItemDTO itemDTO) {
		Item customer = itemRepository.save(modelMapper.map(itemDTO, Item.class));
		return modelMapper.map(customer, ItemDTO.class);
	}

	public ItemDTO get(long itemId) {
		return modelMapper.map(itemRepository.findById(itemId), ItemDTO.class);
	}

	public void delete(long itemId) {
		itemRepository.deleteById(itemId);
	}
}
