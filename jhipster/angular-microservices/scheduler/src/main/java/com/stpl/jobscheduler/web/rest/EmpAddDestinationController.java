package com.stpl.jobscheduler.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.jobscheduler.domain.SchedulerEntity;
import com.stpl.jobscheduler.service.EmpAddDestinationService;
import com.stpl.jobscheduler.service.EmpScheduleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class EmpAddDestinationController {
	private final Logger log = LoggerFactory.getLogger(EmpAddDestinationController.class);
	@Autowired
	private EmpScheduleService empScheduleService;

	@PostMapping("/postDestination")
	public void addSource(@RequestBody SchedulerEntity scheduler) {
		log.info("service has started");
		empScheduleService.addDestinationData(scheduler);
	}
}
