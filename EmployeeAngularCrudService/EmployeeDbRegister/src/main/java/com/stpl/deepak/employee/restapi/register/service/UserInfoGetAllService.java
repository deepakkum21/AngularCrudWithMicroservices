package com.stpl.deepak.employee.restapi.register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stpl.deepak.employee.restapi.register.modal.UserInfoModel;
import com.stpl.deepak.employee.restapi.register.repository.UserInfoRepository;

@Service
public class UserInfoGetAllService {

	@Autowired
	private UserInfoRepository userInfoRepository;
	
	public List<UserInfoModel> findAllUserInfo() {
		return userInfoRepository.findAll();
	}
}
