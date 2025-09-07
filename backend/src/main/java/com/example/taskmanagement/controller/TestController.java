package com.example.taskmanagement.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Backend Spring Boot fonctionne !";
    }
    
    @GetMapping("/")
    public String home() {
        return "API Task Management - Backend opérationnel";
    }
}
