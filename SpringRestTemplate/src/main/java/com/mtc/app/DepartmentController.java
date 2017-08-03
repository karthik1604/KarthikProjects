package com.mtc.app;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.mtc.app.dao.DepartmentDao;
import com.mtc.app.entity.Department;

@Controller
public class DepartmentController {
	
	@Autowired
	private DepartmentDao departmentDAO;
	
	@RequestMapping(value="/departmentSearch",method=RequestMethod.GET)
	public ModelAndView processSearchRequest(HttpServletRequest request)
	{
		String name = request.getParameter("departmentName");
		Department department=departmentDAO.searchDepartment(name);
		
		ModelAndView modelAndView = new ModelAndView("departmentView");
		modelAndView.addObject("department",department);
		return modelAndView;
	}
}
