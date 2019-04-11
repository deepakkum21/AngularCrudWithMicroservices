package com.stpl.jobscheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.jobscheduler.domain.EmpDestinationEntity;
import com.stpl.jobscheduler.repository.EmpDestinationRepository;

@Service
public class EmpShowDestinationService {
	
	@Autowired
	private EmpDestinationRepository destinationRepository;
	
	public List<EmpDestinationEntity> getDestinationData(){
		return destinationRepository.findAll();
	}

}
