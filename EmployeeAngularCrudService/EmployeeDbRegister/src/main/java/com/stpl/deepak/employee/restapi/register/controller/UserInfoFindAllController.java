package com.stpl.deepak.employee.restapi.register.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.restapi.register.modal.UserInfoModel;
import com.stpl.deepak.employee.restapi.register.service.UserInfoGetAllService;

@EnableMongoRepositories(basePackages="com.stpl.deepak.employee.restapi.register.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/userInfo")
public class UserInfoFindAllController {
	
	@Autowired
	private UserInfoGetAllService userInfoGetAllService;
	
	@GetMapping(value = "")
	public List<UserInfoModel> findAllUserInfo() {
		return userInfoGetAllService.findAllUserInfo();
	}

}
