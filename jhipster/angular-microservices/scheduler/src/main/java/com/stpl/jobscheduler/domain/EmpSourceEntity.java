package com.stpl.jobscheduler.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;

public class EmpSourceEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    private String id;
    
    private int empId;
    private String fullName;
    private String email;
    private String indicator;
    private long phone;
    private String contactPreference;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getIndicator() {
		return indicator;
	}
	public void setIndicator(String indicator) {
		this.indicator = indicator;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getContactPreference() {
		return contactPreference;
	}
	public void setContactPreference(String contactPreference) {
		this.contactPreference = contactPreference;
	}

}
