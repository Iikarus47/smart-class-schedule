package com.example.smartclass.repository;

import com.example.smartclass.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Find user by username
    User findByUsername(String username);
}
