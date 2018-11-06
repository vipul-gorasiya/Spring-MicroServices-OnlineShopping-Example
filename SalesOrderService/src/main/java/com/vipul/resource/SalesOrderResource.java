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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vipul.dto.SalesOrderDTO;
import com.vipul.service.SalesOrderService;

@RequestMapping("/orders")
@RestControllerAdvice
@RestController
public class SalesOrderResource {

	private static final Logger LOG = LoggerFactory.getLogger(SalesOrderResource.class);

	@Autowired
	private SalesOrderService salesOrderService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/")
	public List<SalesOrderDTO> all() {
		return salesOrderService.all();
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/{id}")
	public SalesOrderDTO get(long id) {
		return salesOrderService.get(id);
	}

	@ResponseStatus(HttpStatus.OK)
	@PutMapping("/{id}")
	public SalesOrderDTO put(long id, SalesOrderDTO salesOrderDTO) {
		salesOrderDTO.setId(id);
		return salesOrderService.save(salesOrderDTO);
	}

	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void delete(long id) {
		salesOrderService.delete(id);
	}

	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public SalesOrderDTO add(@RequestBody SalesOrderDTO salesOrderDTO) {
		return salesOrderService.save(salesOrderDTO);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleException(Throwable ex) {
		LOG.error("There was an error: ", ex);
		// Add conditional logic to show differnt status on different exceptions
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
