package com.mtc.app.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown = true)
public class DepartmentDetails {
private List<Department> departments;

public List<Department> getDepartments() {
	return departments;
}

public void setDepartments(List<Department> departments) {
	this.departments = departments;
}

}
