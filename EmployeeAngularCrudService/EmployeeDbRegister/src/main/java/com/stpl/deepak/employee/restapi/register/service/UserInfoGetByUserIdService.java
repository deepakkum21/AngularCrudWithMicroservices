package com.stpl.deepak.employee.restapi.register.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.restapi.register.modal.UserInfoModel;
import com.stpl.deepak.employee.restapi.register.repository.UserInfoRepository;

@Service
public class UserInfoGetByUserIdService {

	@Autowired
	private UserInfoRepository userInfoRepository;
	
	public Optional<UserInfoModel> findUserInfo(String userName) {
		return userInfoRepository.findById(userName);
	}
}
