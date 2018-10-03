package com.stpl.deepak.employee.find.restapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.find.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.find.restapi.repository.EmployeeFindRepository;

@Service
public class EmployeeFindByIdService {
	
	@Autowired
	private EmployeeFindRepository employeeFindrepository;

	public Optional<EmployeeModel> findById(String empId) {
		
		return employeeFindrepository.findById(empId);
	}

}
