package com.stpl.deepak.employee.restapi.register.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection = "UserInfo")
public class UserInfoModel {

	@Id
	@Field("UserName")
	private String userName;
	
	@Field("FirstName")
	private String firstName;

	@Field("MiddleName")
	private String middleName;
	
	@Field("LastName")
	private String lastName;

	@Field("Email")
	private String email;

	@Field("City")
	private String city;

	@Field("Street")
	private String street;

	@Field("State")
	private String state;

	@Field("ZipCode")
	private String zipCode;

	@Field("Password")
	private String password;

	public UserInfoModel(String userName, String firstName, String middleName, String lastName, String email, String city,
			String street, String state, String zipCode, String password) {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.city = city;
		this.street = street;
		this.state = state;
		this.zipCode = zipCode;
		this.password = password;
	}
}
