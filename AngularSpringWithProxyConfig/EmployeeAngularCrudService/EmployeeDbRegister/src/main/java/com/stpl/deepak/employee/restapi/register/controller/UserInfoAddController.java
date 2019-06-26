package com.stpl.deepak.employee.restapi.register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.restapi.register.modal.UserInfoModel;
import com.stpl.deepak.employee.restapi.register.service.UserInfoAddService;

@EnableMongoRepositories(basePackages="com.stpl.deepak.employee.restapi.register.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/addUserInfo")
public class UserInfoAddController {
	
	@Autowired
	private UserInfoAddService userInfoAddService;
	
	@PostMapping(value = "")
	public UserInfoModel addUserInfo(@RequestBody UserInfoModel userInfo) {
		return userInfoAddService.addUserInfo(userInfo);
	}

}
