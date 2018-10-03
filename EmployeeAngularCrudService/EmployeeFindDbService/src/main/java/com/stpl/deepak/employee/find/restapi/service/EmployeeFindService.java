package com.stpl.deepak.employee.find.restapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.find.restapi.model.EmployeeModel;
import com.stpl.deepak.employee.find.restapi.repository.EmployeeFindRepository;

@Service
public class EmployeeFindService {
	
	@Autowired
	private EmployeeFindRepository employeeFindrepository;
	
	public List<EmployeeModel> getAllEmployee(){
		Sort sortByCreatedAtDesc = new Sort(Sort.Direction.ASC, "id");
		return employeeFindrepository.findAll(sortByCreatedAtDesc); 
	}

}