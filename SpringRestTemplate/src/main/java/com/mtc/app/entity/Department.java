package com.mtc.app.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public class Department {
	
private String dept_name;
	
private String building;
	
private double budget;
	public Department()
	{}
public Department(String dept_name, String building, float budget) {
	super();
	this.dept_name = dept_name;
	this.building = building;
	this.budget = budget;
}
public String getDept_name() {
	return dept_name;
}

public void setDept_name(String dept_name) {
	this.dept_name = dept_name;
}
public String getBuilding() {
	return building;
}
public void setBuilding(String building) {
	this.building = building;
}
public double getBudget() {
	return budget;
}
public void setBudget(float budget) {
	this.budget = budget;
}



}
