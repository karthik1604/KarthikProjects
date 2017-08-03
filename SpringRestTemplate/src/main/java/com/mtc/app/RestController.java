package com.mtc.app;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mtc.app.entity.Department;
import com.mtc.app.entity.DepartmentDetails;
import com.mtc.app.service.DepartmentService;

@Controller
@RequestMapping("/department")
public class RestController {
	@Autowired
	private DepartmentService departmentService;
	@RequestMapping( value="/create", method = RequestMethod.POST)
	public @ResponseBody Department createDepartment(@RequestBody Department department){
		Department departmentRespone = departmentService.createDepartment(department);
		return departmentRespone;
	}
	
	@RequestMapping(value="/getAllDepartments", method= RequestMethod.GET )
	public @ResponseBody DepartmentDetails getAllDepartments(){
		List<Department> departments=departmentService.getAllDepartments();
		DepartmentDetails departmentDetails = new DepartmentDetails();
		departmentDetails.setDepartments(departments);
		return departmentDetails;
		
	}
	@RequestMapping(value="/getSpecificDepartment/{dept_name}",method=RequestMethod.GET)
	public @ResponseBody Department getDepartmentforName(@PathVariable("dept_name") String dept_name){
		Department deptRespone = departmentService.getDepartmentForName(dept_name);
		return deptRespone;
	}
	
	@RequestMapping(value="/updateDepartment",method=RequestMethod.PUT)
	public @ResponseBody Department updateDepartment(@RequestBody Department department)
	{
		Department deptRespone =departmentService.updateDepartment(department);
		return deptRespone;
	}
	
	@RequestMapping(value="/deleteDepartment/{dept_name}",method= RequestMethod.DELETE)
	public @ResponseBody void deleteDepartment(@PathVariable("dept_name") String dept_name){
		
		departmentService.deleteDepartment(dept_name);
		//return department;	
	}
	
	
}
