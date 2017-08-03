package com.mtc.app.restclient;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import com.mtc.app.entity.Department;
import com.mtc.app.entity.DepartmentDetails;

public class GetAllDepartmentClient {

	public static void main(String[] args) {
		RestTemplate restTemplate = new RestTemplate();
		final String url = "http://localhost:8080/app/department/getAllDepartments";
		List<HttpMessageConverter<?>> messageConverters = restTemplate.getMessageConverters();
		MappingJacksonHttpMessageConverter map = new MappingJacksonHttpMessageConverter();
		messageConverters.add(map);
		restTemplate.setMessageConverters(messageConverters);
		HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<String>(headers);
	 // Invoke the REST service
		//ResponseEntity<DepartmentDetails> result = restTemplate.exchange(url,HttpMethod.GET , entity, DepartmentDetails.class);
			//System.out.println("HII"+result.getBody().getDepartments());
		DepartmentDetails departmentDetails=restTemplate.getForObject(url,DepartmentDetails.class);
		System.out.println("Department Details for Client");
		for(Department departmen:departmentDetails.getDepartments())
		{
			System.out.println("Department Name     :"+departmen.getDept_name());
			System.out.println("Department Budget   :"+departmen.getBudget());
			System.out.println("Department Building :"+departmen.getBuilding());
			System.out.println("................................................");
		}
	}

}
