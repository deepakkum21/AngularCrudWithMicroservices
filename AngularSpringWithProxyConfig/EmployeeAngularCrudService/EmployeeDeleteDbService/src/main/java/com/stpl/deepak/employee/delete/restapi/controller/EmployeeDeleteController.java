package com.stpl.deepak.employee.delete.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.delete.restapi.service.EmployeeDeleteService;

@EnableMongoRepositories(basePackages="com.stpl.deepak.employee.delete.restapi.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/employee")
public class EmployeeDeleteController {
	
	@Autowired
	private EmployeeDeleteService employeeDeleteService;
	
	@DeleteMapping(value="/{id}")
	public void deleteEmployeeById(@PathVariable("id") String id) {
		employeeDeleteService.deleteEmployee(id);
	}

}
