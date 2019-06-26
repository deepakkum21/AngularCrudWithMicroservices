package com.stpl.deepak.employee.add.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.add.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.add.restapi.service.EmployeeAddService;
import com.stpl.deepak.employee.add.restapi.service.FindSortedEmployeeService;

@EnableMongoRepositories(basePackages="com.stpl.deepak.employee.add.restapi.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/employee")
public class EmployeeAddController {
	@Autowired
	private EmployeeAddService employeeAddService;
	
	@Autowired
	private FindSortedEmployeeService findSortedEmployeeService;
	
	@PostMapping( value ="/addemployee")
	public EmployeeModel addEmployee(@RequestBody EmployeeModel employeeModel) {
		List<EmployeeModel> sortedEmployeelist = findSortedEmployeeService.getAllEmployee();
		EmployeeModel employee;
		int empId ;
		if (!sortedEmployeelist.isEmpty()){
			employee = sortedEmployeelist.get(0);
			 empId = Integer.parseInt(employee.getId()) + 1;
			
		}else{
			 empId =1;
		}
		employeeModel.setId(String.valueOf(empId));
			System.out.println("add empoloyee Executed");
			return employeeAddService.insertEmployee(employeeModel);
	}


}
