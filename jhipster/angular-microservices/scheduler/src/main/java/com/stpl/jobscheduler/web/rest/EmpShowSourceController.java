package com.stpl.jobscheduler.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.service.EmpShowSourceService;

@RestController
@RequestMapping("/api")
public class EmpShowSourceController {
	
	@Autowired
	private EmpShowSourceService empShowSourceService;
	
	@GetMapping("/getSourceData")
	public List<SourceSchedularTable> getSourceData() {
		return empShowSourceService.getSourceData();
	}

}
