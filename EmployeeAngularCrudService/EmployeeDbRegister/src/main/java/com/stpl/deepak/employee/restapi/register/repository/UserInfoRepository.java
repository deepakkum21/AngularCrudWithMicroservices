package com.stpl.deepak.employee.restapi.register.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stpl.deepak.employee.restapi.register.modal.UserInfoModel;

@Repository
public interface UserInfoRepository extends MongoRepository<UserInfoModel, String>{

	
}
