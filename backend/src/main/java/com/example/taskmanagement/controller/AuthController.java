package com.example.taskmanagement.controller;

import com.example.taskmanagement.model.User;
import com.example.taskmanagement.repository.UserRepository;
import com.example.taskmanagement.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        String token = jwtUtil.generateToken(user.getUsername());
        return Map.of("token", token);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        User dbUser = userRepository.findByUsername(user.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        String token = jwtUtil.generateToken(dbUser.getUsername());
        return Map.of("token", token);
    }
}
