package com.example.smartclass.repository;

import com.example.smartclass.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can add custom query methods here if needed.
}
