package com.stpl.jobscheduler.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.service.EmpAddSourceService;

@RestController
@RequestMapping("/api")
public class EmpAddSourceController {
	
	@Autowired
	private EmpAddSourceService empAddSourceService;
	
	@PostMapping("/postSource")
	public SourceSchedularTable addSource(@RequestBody SourceSchedularTable sourceEntity) {
		return empAddSourceService.addSource(sourceEntity);
	}
	
	@PostMapping("/postSourceData")
	public List<SourceSchedularTable> addSourceDataList(@RequestBody List<SourceSchedularTable> sourceEntityList) {
		return empAddSourceService.addSourceList(sourceEntityList);
	}

}
