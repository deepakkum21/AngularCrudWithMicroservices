package com.stpl.deepak.employee.delete.restapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.deepak.employee.delete.restapi.model.EmployeeModel;

@Repository
public interface EmployeeDeleteRepository extends MongoRepository<EmployeeModel, String>{

}
