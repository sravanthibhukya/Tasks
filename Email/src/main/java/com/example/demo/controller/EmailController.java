package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.demo.service.EmailService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Controller
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/")
    public String dashboard() {
        return "dashboard";
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestParam("subject") String subject, 
                            @RequestParam("message") String message, 
                            @RequestParam("date") String date,
                            @RequestParam("time") String time, 
                            Model model) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime dateTime = LocalDateTime.parse(date + " " + time, formatter);
        emailService.scheduleEmail(subject, message, dateTime);
        model.addAttribute("success", "Emails scheduled successfully!");
        return "dashboard";
    }
}
