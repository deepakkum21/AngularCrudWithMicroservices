package com.stpl.deepak.employee.find.restapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.deepak.employee.find.restapi.model.EmployeeModel;

@Repository
public interface EmployeeFindRepository extends MongoRepository<EmployeeModel, String>{

}
