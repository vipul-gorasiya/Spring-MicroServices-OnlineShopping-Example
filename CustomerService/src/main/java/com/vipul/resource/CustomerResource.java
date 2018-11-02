package com.vipul.resource;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vipul.dto.CustomerDTO;
import com.vipul.service.CustomerService;

@RequestMapping("/customers")
@RestControllerAdvice
@RestController
public class CustomerResource {

	private static final Logger LOG = LoggerFactory.getLogger(CustomerResource.class);

	@Autowired
	private CustomerService customerService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/")
	public List<CustomerDTO> all() {
		return customerService.all();
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/{id}")
	public CustomerDTO get(long id) {
		return customerService.get(id);
	}

	@ResponseStatus(HttpStatus.OK)
	@PutMapping("/{id}")
	public CustomerDTO put(long id, CustomerDTO customerDTO) {
		customerDTO.setId(id);
		return customerService.save(customerDTO);
	}

	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void delete(long id) {
		customerService.delete(id);
	}

	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public CustomerDTO add(CustomerDTO customerDTO) {
		return customerService.save(customerDTO);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleException(Throwable ex) {
		LOG.error("There was an error: ", ex);
		// Add conditional logic to show differnt status on different exceptions
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
