package com.stpl.deepak.employee.restapi.register.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stpl.deepak.employee.restapi.register.service.UserInfoDeleteOneService;

@EnableMongoRepositories(basePackages = "com.stpl.deepak.employee.restapi.register.repository")
@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/userInfo")
public class UserInfoDeleteOneController {

	@Autowired
	private UserInfoDeleteOneService userInfoDeleteOneService;

	@DeleteMapping(value = "/{userNameList}")
	public void deleteOneUserInfo(@PathVariable("userNameList") List<String> userNameList) {
		for (String userName : userNameList) {
			userInfoDeleteOneService.deleteOneUserInfo(userName);
		}
	}

}
