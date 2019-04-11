package com.stpl.jobscheduler.service;

import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.stpl.jobscheduler.domain.EmpDestinationEntity;
import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.repository.EmpDestinationRepository;

@Component
@DisallowConcurrentExecution
public class EmpAddDestinationService implements Job {

	private final Logger log = LoggerFactory.getLogger(EmpAddDestinationService.class);
	@Autowired
	private EmpDestinationRepository destinationRepository;

	@Autowired
	private EmpShowSourceService empShowSourceService;

	@Autowired
	private SearchDestinationDataService searchDestinationDataService;

	@Autowired
	private EmpDeleteSourceService empDeleteSourceService;

	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		log.info("execute method starting" + empShowSourceService);
		List<SourceSchedularTable> sourceDataList = empShowSourceService.getSourceData();
		
		for (SourceSchedularTable sourceData : sourceDataList) {
			EmpDestinationEntity destinationEntity = new EmpDestinationEntity();
			log.info(" Starting the loop" + searchDestinationDataService.searchDestinationData(sourceData.getEmpId()));
			if (searchDestinationDataService.searchDestinationData(sourceData.getEmpId()) == null) {
				if ("Insert".equalsIgnoreCase(sourceData.getIndicator())) {
					destinationEntity.setContactPreference(sourceData.getContactPreference());
					destinationEntity.setEmail(sourceData.getEmail());
					destinationEntity.setEmpId(sourceData.getEmpId());
					destinationEntity.setFullName(sourceData.getFullName());
					destinationEntity.setIndicator(sourceData.getIndicator());
					destinationEntity.setPhone(sourceData.getPhone());
					destinationRepository.save(destinationEntity);
				}
			} else {
				destinationEntity = searchDestinationDataService.searchDestinationData(sourceData.getEmpId());
				if ("Update".equalsIgnoreCase(sourceData.getIndicator())) {
					destinationEntity.setContactPreference(sourceData.getContactPreference());
					destinationEntity.setEmail(sourceData.getEmail());
					destinationEntity.setModifiedDate(Instant.now());
					destinationEntity.setFullName(sourceData.getFullName());
					destinationEntity.setIndicator(sourceData.getIndicator());
					destinationEntity.setPhone(sourceData.getPhone());
					destinationRepository.save(destinationEntity);
				} else if ("Delete".equalsIgnoreCase(sourceData.getIndicator())) {
					destinationEntity.setIndicator(sourceData.getIndicator());
					destinationEntity.setModifiedDate(Instant.now());
					destinationRepository.save(destinationEntity);
				}
			}
		}
		empDeleteSourceService.deleteSourceData();
	}

}
