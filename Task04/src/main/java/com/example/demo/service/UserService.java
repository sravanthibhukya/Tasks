package com.example.demo.service;

import com.example.demo.model.User;

public interface UserService {
    User findByUsername(String username);
    void save(User user);
}
