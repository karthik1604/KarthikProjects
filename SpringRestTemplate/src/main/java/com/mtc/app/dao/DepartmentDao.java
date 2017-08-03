package com.mtc.app.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mtc.app.entity.Department;
import com.mtc.app.interfaces.IDepartment;
@Repository("departmentDAO")
public class DepartmentDao implements IDepartment {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private RowMapper<Department> departmentRowMapper;
	public void addDepartment(Department department) {
		 final String query= "insert into university.department(dept_name,building,budget) values (?,?,?)";
		 int noOFRows=jdbcTemplate.update(query,department.getDept_name(),department.getBuilding(),department.getBudget());
		 if(noOFRows==1)
		 {
			 System.out.println("Data entered succesfully");
		 }
		
	}

	public void deleteDepartment(Department department) {
		// TODO Auto-generated method stub
		
	}

	public Department searchDepartment(String departmentName) {
		// TODO Auto-generated method stub
		String selectQuery = "select * from university.department where dept_name = ?";
		Department department=jdbcTemplate.queryForObject(selectQuery, departmentRowMapper,departmentName);
		return department;
		
	}

	public List<Department> fetchDepartment() {
		// TODO Auto-generated method stub
		String selectQuery = "select * from university.department";
										//tranforms the records fetched into objects
		List<Department> fetchList=jdbcTemplate.query(selectQuery,departmentRowMapper);
		return fetchList;
	}

	@Override
	public Department getDepartmentForName(String dept_name) {
		String selectQuery = "select * from university.department where dept_name = ?";
		Department department=jdbcTemplate.queryForObject(selectQuery, departmentRowMapper,dept_name);
		return department;
	}

	@Override
	public List<Department> getAllDepartments() {
		String selectQuery = "select * from university.department";
		//tranforms the records fetched into objects
		List<Department> fetchList=jdbcTemplate.query(selectQuery,departmentRowMapper);
		System.out.println("In DAO");
		for(Department departmen:fetchList)
		{	
			System.out.println("Department Name     :"+departmen.getDept_name());
			System.out.println("Department Budget   :"+departmen.getBudget());
			System.out.println("Department Building :"+departmen.getBuilding());
			System.out.println("................................................");
		}
		return fetchList;

	}

	@Override
	public Department createDepartment(Department department) {
		final String query= "insert into university.department(dept_name,building,budget) values (?,?,?)";
		 int noOFRows=jdbcTemplate.update(query,department.getDept_name(),department.getBuilding(),department.getBudget());
		 if(noOFRows==1)
		 {
			 System.out.println("Data entered succesfully");
			 String selectQuery = "select * from university.department where dept_name = ?";
				Department retdepartment=jdbcTemplate.queryForObject(selectQuery, departmentRowMapper,department.getDept_name());
				return retdepartment;
		 }else
		 {
			 return null;
		 }
	}

	@Override
	public Department updateDepartment(Department department) {
		final String query ="UPDATE university.department SET budget = ? WHERE dept_name = ?";
		int noOFRows=jdbcTemplate.update(query,department.getBudget(),department.getDept_name());
		 if(noOFRows==1)
		 {
			 System.out.println("Data updated succesfully");
			 String selectQuery = "select * from university.department where dept_name = ?";
				Department retdepartment=jdbcTemplate.queryForObject(selectQuery, departmentRowMapper,department.getDept_name());
				return retdepartment;
		 }else
		 {
			 return null;
		 }
	}

	@Override
	public void deleteDepartment(String dept_name) {
		String delQuery = "delete from university.department where dept_name = ?";
			int noOfRows = jdbcTemplate.update(delQuery, dept_name);
			if(noOfRows==1)
			{
				System.out.println("Deleted Succesfully");
			}
		//return null;
	}

}
