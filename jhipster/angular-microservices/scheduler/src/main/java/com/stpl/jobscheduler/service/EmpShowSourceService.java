package com.stpl.jobscheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.repository.EmpSourceRepository;

@Service
public class EmpShowSourceService {

	@Autowired
	private EmpSourceRepository empSourceRepository;
	
	public List<SourceSchedularTable> getSourceData() {
		return empSourceRepository.findAll();
	}
}
