package com.stpl.jobscheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.repository.EmpSourceRepository;

@Service
public class EmpAddSourceService {
	
	@Autowired
	private EmpSourceRepository empSourceRepository;
	
	public SourceSchedularTable addSource(SourceSchedularTable sourceEntity) {
		return empSourceRepository.save(sourceEntity);
	}

	public List<SourceSchedularTable> addSourceList(List<SourceSchedularTable> sourceEntityList) {
		
		return empSourceRepository.saveAll(sourceEntityList);
	}

}
