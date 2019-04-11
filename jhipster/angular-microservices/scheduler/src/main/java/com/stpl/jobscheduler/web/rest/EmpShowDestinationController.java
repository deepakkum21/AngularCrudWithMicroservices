package com.stpl.jobscheduler.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.jobscheduler.domain.EmpDestinationEntity;
import com.stpl.jobscheduler.service.EmpShowDestinationService;

@RestController
@RequestMapping("/api")
public class EmpShowDestinationController {

	@Autowired
	private EmpShowDestinationService empShowDestinationService;
	
	@GetMapping("/getDestinationData")
	public List<EmpDestinationEntity> getDestinationData() {
		return empShowDestinationService.getDestinationData();
	}
}
