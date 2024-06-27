package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Email;
import com.example.demo.repository.EmailRepository;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private EmailRepository emailRepository;

    public void scheduleEmail(String subject, String message, LocalDateTime dateTime) {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            @Override
            public void run() {
                sendEmailToAll(subject, message);
            }
        };
        timer.schedule(task, java.sql.Timestamp.valueOf(dateTime));
    }

    private void sendEmailToAll(String subject, String message) {
        List<Email> emails = emailRepository.findAll();
        for (Email email : emails) {
            sendEmail(email.getEmail(), subject, message);
        }
    }

    private void sendEmail(String to, String subject, String message) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(to);
        email.setSubject(subject);
        email.setText(message);
        mailSender.send(email);
    }
}
