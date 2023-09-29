package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;
import com.demo.repository.UserRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController 
{

	@Autowired
	private UserRepository urepo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/")
	public String login()
	{
		return "authenticated successfully" ;
	}

	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getusers")
	public List<User> getusers()
	{
		return this.urepo.findAll();
	}
}
