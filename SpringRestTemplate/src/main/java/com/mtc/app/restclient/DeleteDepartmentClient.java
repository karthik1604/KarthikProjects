package com.mtc.app.restclient;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

public class DeleteDepartmentClient {

	public static void main(String[] args) {
		RestTemplate restTemplate = new RestTemplate();
		final String url = "http://localhost:8080/app/department/deleteDepartment/CyberSecurity";
		List<HttpMessageConverter<?>> converters = restTemplate.getMessageConverters();
		MappingJacksonHttpMessageConverter map = new MappingJacksonHttpMessageConverter();
		converters.add(map);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		restTemplate.delete(url);

	}

}
