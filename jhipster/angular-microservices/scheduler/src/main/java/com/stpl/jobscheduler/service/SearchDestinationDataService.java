package com.stpl.jobscheduler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.jobscheduler.domain.EmpDestinationEntity;
import com.stpl.jobscheduler.repository.EmpDestinationRepository;

@Service
public class SearchDestinationDataService {
	
	@Autowired
	private EmpDestinationRepository destinationRepository;
	
	public EmpDestinationEntity searchDestinationData(int empId) {
		return destinationRepository.findByEmpId(empId);
	}

}
