package com.vipul.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vipul.datamodel.Customer;
import com.vipul.dto.CustomerDTO;
import com.vipul.messagelistener.CustomerMessageListener;
import com.vipul.repository.CustomerSORepository;

@Service
public class CustomerService {
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private CustomerSORepository customerSORepository;

	public CustomerDTO save(CustomerMessageListener.Customer customer) {
		Customer customer2 = customerSORepository.save(modelMapper.map(customer, Customer.class));
		return modelMapper.map(customer2, CustomerDTO.class);
	}

}
