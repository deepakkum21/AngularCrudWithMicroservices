package com.stpl.deepak.employee.add.restapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.deepak.employee.add.restapi.model.EmployeeModel;

@Repository
public interface EmployeeAddRepository extends MongoRepository<EmployeeModel, String>{

}
