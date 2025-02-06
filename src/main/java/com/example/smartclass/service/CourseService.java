package com.example.smartclass.service;

import com.example.smartclass.model.Course;
import com.example.smartclass.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    // Save a new course
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    // Other course-related methods...
}
