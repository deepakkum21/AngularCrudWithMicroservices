package com.stpl.deepak.employee.update.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.update.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.update.restapi.service.EmployeeUpdateService;

@EnableMongoRepositories(basePackages="com.stpl.deepak.employee.update.restapi.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/employee")
public class EmployeeUpdateController {
	
	@Autowired 
	private EmployeeUpdateService employeeUpdateService;
	
	@PutMapping(value = "/{id}")
	public void updateEmployee(@PathVariable("id") String empId, @RequestBody EmployeeModel employee) {
		employeeUpdateService.updateEmployee(employee);	
	}

}
