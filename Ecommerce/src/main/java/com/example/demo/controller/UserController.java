package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
	 @Autowired
	    private UserService userService;

	    @PostMapping("/register")
	    public ResponseEntity<User> registerUser(@RequestBody User user) {
	        User registeredUser = userService.registerUser(user);
	        return ResponseEntity.ok(registeredUser);
	    }

	    @PostMapping("/login")
	    public ResponseEntity<User> loginUser(@RequestBody User user) {
	        User loggedInUser = userService.loginUser(user.getUsername(), user.getPassword());
	        if (loggedInUser != null) {
	            return ResponseEntity.ok(loggedInUser);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	        }
	    }
	}