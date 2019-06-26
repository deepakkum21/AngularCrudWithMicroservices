package com.stpl.deepak.employee.restapi.register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.restapi.register.modal.UserInfoModel;
import com.stpl.deepak.employee.restapi.register.repository.UserInfoRepository;

@Service
public class UserInfoAddService {

	@Autowired
	private UserInfoRepository userInfoRepository;
	
	public UserInfoModel addUserInfo(UserInfoModel userInfo) {
		return userInfoRepository.insert(userInfo);
	}
}
