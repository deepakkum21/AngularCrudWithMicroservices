package com.stpl.deepak.employee.add.restapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.add.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.add.restapi.repository.EmployeeAddRepository;

@Service
public class FindSortedEmployeeService {

	@Autowired
	private EmployeeAddRepository employeeAddRepository;
	
	public List<EmployeeModel> getAllEmployee(){
		Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "id");
		return employeeAddRepository.findAll(sortByCreatedAtDesc); 
	}
}
