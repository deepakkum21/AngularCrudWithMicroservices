package com.stpl.jobscheduler.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.jobscheduler.domain.EmpDestinationEntity;

@Repository
public interface EmpDestinationRepository extends MongoRepository<EmpDestinationEntity, String>{

	public EmpDestinationEntity findByEmpId(int empId);
}
