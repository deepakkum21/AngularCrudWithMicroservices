package com.stpl.jobscheduler.repository;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the SourceSchedularTable entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SourceSchedularTableRepository extends MongoRepository<SourceSchedularTable, String> {

}
