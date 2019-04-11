package com.stpl.jobscheduler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.jobscheduler.repository.EmpSourceRepository;

@Service
public class EmpDeleteSourceService {
	
	@Autowired
	private EmpSourceRepository empSourceRepository;
	
	public void deleteSourceData() {
		empSourceRepository.deleteAll();
	}

}
