package com.example.smartclass;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {

    // Endpoint to get available sessions
    @GetMapping("/available")
    public List<String> getAvailableSessions() {
        // Logic to get available sessions (can fetch from a database or return mock data)
        return Arrays.asList("Math - 10:00 AM", "Science - 12:00 PM");
    }

    // Endpoint to schedule a session
    @PostMapping("/schedule")
    public String scheduleSession(@RequestBody Session session) {
        // Logic to schedule the session (e.g., store in database)
        return "Session scheduled for " + session.getCourse() + " at " + session.getTime();
    }
}
