package com.stpl.jobscheduler.domain;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.io.Serializable;
import java.util.Objects;

/**
 * A SourceSchedularTable.
 */
@Document(collection = "source_schedular_table")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "sourceschedulartable")
public class SourceSchedularTable implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    private String id;

    @Field("emp_id")
    private Integer empId;

    @Field("full_name")
    private String fullName;

    @Field("indicator")
    private String indicator;

    @Field("email")
    private String email;

    @Field("phone")
    private Long phone;

    @Field("contact_preference")
    private String contactPreference;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getEmpId() {
        return empId;
    }

    public SourceSchedularTable empId(Integer empId) {
        this.empId = empId;
        return this;
    }

    public void setEmpId(Integer empId) {
        this.empId = empId;
    }

    public String getFullName() {
        return fullName;
    }

    public SourceSchedularTable fullName(String fullName) {
        this.fullName = fullName;
        return this;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getIndicator() {
        return indicator;
    }

    public SourceSchedularTable indicator(String indicator) {
        this.indicator = indicator;
        return this;
    }

    public void setIndicator(String indicator) {
        this.indicator = indicator;
    }

    public String getEmail() {
        return email;
    }

    public SourceSchedularTable email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public SourceSchedularTable phone(Long phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getContactPreference() {
        return contactPreference;
    }

    public SourceSchedularTable contactPreference(String contactPreference) {
        this.contactPreference = contactPreference;
        return this;
    }

    public void setContactPreference(String contactPreference) {
        this.contactPreference = contactPreference;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SourceSchedularTable sourceSchedularTable = (SourceSchedularTable) o;
        if (sourceSchedularTable.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), sourceSchedularTable.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SourceSchedularTable{" +
            "id=" + getId() +
            ", empId=" + getEmpId() +
            ", fullName='" + getFullName() + "'" +
            ", indicator='" + getIndicator() + "'" +
            ", email='" + getEmail() + "'" +
            ", phone=" + getPhone() +
            ", contactPreference='" + getContactPreference() + "'" +
            "}";
    }
}
