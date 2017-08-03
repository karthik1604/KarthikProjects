package com.mtc.app.restclient;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import com.mtc.app.entity.Department;

public class UpdateDepartmentClient {

	public static void main(String[] args) {
		RestTemplate restTemplate = new RestTemplate();
		final String url = "http://localhost:8080/app/department/updateDepartment";
		List<HttpMessageConverter<?>> converter = restTemplate.getMessageConverters();
		MappingJacksonHttpMessageConverter map = new MappingJacksonHttpMessageConverter();
		converter.add(map);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		Department department = new Department();
		department.setDept_name("Data Science");
		department.setBudget(45388);
		department.setBuilding("Edwards");
		restTemplate.put(url, department);
		//...........................................................................................
		final String updUrl = "http://localhost:8080/app/department/getSpecificDepartment/Data Science";
		Department updateddepartment = restTemplate.getForObject(updUrl, Department.class);
		System.out.println("Department updated details : ");
		System.out.println(updateddepartment.getDept_name()+ " " +updateddepartment.getBudget() + " " + updateddepartment.getBuilding());
		//System.out.println("Department inserted is : " + department2.getDept_name());
	}

}
