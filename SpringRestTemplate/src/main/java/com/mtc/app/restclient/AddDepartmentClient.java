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

public class AddDepartmentClient {

	public static void main(String[] args) {
		RestTemplate restTemplate = new RestTemplate();
		final String url = "http://localhost:8080/app/department/create";
		List<HttpMessageConverter<?>> converter = restTemplate.getMessageConverters();
		MappingJacksonHttpMessageConverter map = new MappingJacksonHttpMessageConverter();
		converter.add(map);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		Department department = new Department();
		department.setDept_name("CyberSecurity");
		department.setBudget(67500);
		department.setBuilding("Morris");
		Department department2=restTemplate.postForObject(url,department,Department.class);
		
		System.out.println("Department inserted is : " + department2.getDept_name());

	}

}
