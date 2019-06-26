package com.stpl.deepak.employee.add.restapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.stpl.deepak.employee.add.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.add.restapi.repository.EmployeeAddRepository;

@Service
public class EmployeeAddService {
	@Autowired
	private EmployeeAddRepository employeeAddRepository;
	
	public EmployeeModel insertEmployee(@RequestBody EmployeeModel employeeModel) {
		System.out.println("add empoloyee Executed");
		return employeeAddRepository.insert(employeeModel);
	}

}
