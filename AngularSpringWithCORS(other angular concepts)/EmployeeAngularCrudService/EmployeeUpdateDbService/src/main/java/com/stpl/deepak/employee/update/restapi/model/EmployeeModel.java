package com.stpl.deepak.employee.update.restapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@Document(collection = "DeepakEmployee")
public class EmployeeModel {
	
	
	@Id
	@Field("EmpId")
	private String id;
	
	@Field("EmpName")
	private String name;
	
	@Field("EmpGender")
	private String gender;
	
	@Field("EmpContactPreference")
	private String contactPreference;
	
	@Field("EmpPhoneNumber")
	private String phoneNumber;
	
	@Field("EmpEmail")
	private String email;

	@Field("EmpDateOfBirth")
	private String dateOfBirth;
	
	@Field("EmpDepartment")
	private String department;
	
	@JsonProperty
	@Field("EmpIsActive")
	private boolean isActive;
	
	@Field("EmpPhotoPath")
	private String photoPath;

	public EmployeeModel() {
		super();
	}

	public EmployeeModel(String id, String name, String gender, String contactPreference, String phoneNumber, String email,
			String dateOfBirth, String department, boolean isActive, String photoPath) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.contactPreference = contactPreference;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.dateOfBirth = dateOfBirth;
		this.department = department;
		this.isActive = isActive;
		this.photoPath = photoPath;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getContactPreference() {
		return contactPreference;
	}

	public void setContactPreference(String contactPreference) {
		this.contactPreference = contactPreference;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}
	
}
