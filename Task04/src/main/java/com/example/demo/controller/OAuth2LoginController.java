package com.example.demo.controller;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OAuth2LoginController {

    @GetMapping("/oauth2Home")
    public String oauth2Home(OAuth2User principal, Model model) {
        model.addAttribute("name", principal.getAttribute("name"));
        return "home";
    }
}
