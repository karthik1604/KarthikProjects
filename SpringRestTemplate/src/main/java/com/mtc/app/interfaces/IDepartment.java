package com.mtc.app.interfaces;

import java.util.List;

import com.mtc.app.entity.Department;


public interface IDepartment {
 public void addDepartment(Department department);
 public void deleteDepartment(Department department);
 public Department searchDepartment(String departmentName);
 public List<Department> fetchDepartment();
 public Department getDepartmentForName(String dept_name);
 public List<Department> getAllDepartments();
 public Department createDepartment(Department department);
 public Department updateDepartment(Department department);
 public void deleteDepartment(String dept_name); 
}
