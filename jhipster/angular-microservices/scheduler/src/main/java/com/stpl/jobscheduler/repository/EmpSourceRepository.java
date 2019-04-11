package com.stpl.jobscheduler.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.jobscheduler.domain.SourceSchedularTable;

@Repository
public interface EmpSourceRepository extends MongoRepository<SourceSchedularTable, String>{

}
