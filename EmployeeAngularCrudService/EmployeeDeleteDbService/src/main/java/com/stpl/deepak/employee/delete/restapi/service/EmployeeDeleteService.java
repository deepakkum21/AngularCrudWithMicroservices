package com.stpl.deepak.employee.delete.restapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.delete.restapi.repository.EmployeeDeleteRepository;

@Service
public class EmployeeDeleteService {
	
	@Autowired 
	private EmployeeDeleteRepository employeeDeleteRepository;
	
	public void deleteEmployee(String empId) {
		employeeDeleteRepository.deleteById(empId);
	}

}
