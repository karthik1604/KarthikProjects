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

public class GetSpecificDepartment {

	public static void main(String[] args) {
		RestTemplate restTemplate = new RestTemplate();
		final String url = "http://localhost:8080/app/department/getSpecificDepartment/Biology";
		List<HttpMessageConverter<?>> converters = restTemplate.getMessageConverters();
		MappingJacksonHttpMessageConverter map = new MappingJacksonHttpMessageConverter();
		converters.add(map);
		restTemplate.setMessageConverters(converters);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		Department department = restTemplate.getForObject(url, Department.class);
		System.out.println("Department retrieved details : ");
		System.out.println(department.getDept_name()+ " " + department.getBudget() + " " + department.getBuilding());
		

	}

}
