package com.mtc.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.mtc.app.dao.DepartmentDao;
import com.mtc.app.entity.Department;

@Service
public class DepartmentService {

	@Autowired
	private DepartmentDao departmentDao;
	
	public List<Department> getAllDepartments() {
		List<Department> departments = departmentDao.getAllDepartments();
		return departments;
	}

	public Department getDepartmentForName(String dept_name) {
		Department department = departmentDao.getDepartmentForName(dept_name);
		return department;
				}

	public Department createDepartment(Department department){
		Department deptRespone = departmentDao.createDepartment(department);
		return deptRespone;
	}

	public Department updateDepartment(Department department){
		Department deptRespone = departmentDao.updateDepartment(department);
		return deptRespone;
	}

	public void deleteDepartment(String dept_name) {
		departmentDao.deleteDepartment(dept_name);
		//return deptRespone;
	}
}
