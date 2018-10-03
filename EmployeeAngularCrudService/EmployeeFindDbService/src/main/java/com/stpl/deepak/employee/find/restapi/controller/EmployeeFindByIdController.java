package com.stpl.deepak.employee.find.restapi.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.find.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.find.restapi.service.EmployeeFindByIdService;

@EnableMongoRepositories(basePackages="com.stpl.deepak.employee.find.restapi.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/employee")
public class EmployeeFindByIdController {
	
	@Autowired
	private EmployeeFindByIdService employeeFindByIdService;
	
	@GetMapping( value ="/{empId}")
	public Optional<EmployeeModel> addHotel(@PathVariable("empId") String empId ) {
		System.out.println("get empoloyee Executed");
		return employeeFindByIdService.findById(empId);
	}

}
