package com.mtc.app.rowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.mtc.app.entity.Department;
@Component("productRowMapper")
public class DepartmentRowMapper implements RowMapper<Department> {

	public Department mapRow(ResultSet rs, int rowNum) throws SQLException {
		Department department = new Department();
		department.setDept_name(rs.getString("dept_name"));
		department.setBuilding(rs.getString("building"));
		department.setBudget(rs.getFloat("budget"));
		
		return department;
	}

}
