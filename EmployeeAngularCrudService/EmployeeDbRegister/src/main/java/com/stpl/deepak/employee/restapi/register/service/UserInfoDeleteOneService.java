package com.stpl.deepak.employee.restapi.register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.stpl.deepak.employee.restapi.register.repository.UserInfoRepository;

@Service
public class UserInfoDeleteOneService {

	@Autowired
	private UserInfoRepository userInfoRepository;
	
	public void deleteOneUserInfo(@PathVariable("userName") String userName) {
		userInfoRepository.deleteById(userName);
	}
}
