package com.stpl.deepak.employee.update.restapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.deepak.employee.update.restapi.model.EmployeeModel;

@Repository
public interface EmployeeUpdateRepository extends MongoRepository<EmployeeModel, String>{

}
