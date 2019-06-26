package com.stpl.deepak.employee.update.restapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.update.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.update.restapi.repository.EmployeeUpdateRepository;

@Service
public class EmployeeUpdateService {
	
	@Autowired
	private EmployeeUpdateRepository employeeUpdateRepository;
	
	public EmployeeModel updateEmployee(EmployeeModel employee) {
		return employeeUpdateRepository.save(employee);
	}

}
