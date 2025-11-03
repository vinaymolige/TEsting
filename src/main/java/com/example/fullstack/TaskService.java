package com.example.fullstack;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TaskService {
    private final List<Task> tasks = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public TaskService() {
        // Add some sample tasks
        tasks.add(new Task(counter.incrementAndGet(), "Learn Spring Boot", "Study Spring Boot framework", false));
        tasks.add(new Task(counter.incrementAndGet(), "Build REST API", "Create RESTful web services", false));
        tasks.add(new Task(counter.incrementAndGet(), "Create Frontend", "Build HTML/CSS/JS frontend", false));
    }

    public List<Task> getAllTasks() {
        return new ArrayList<>(tasks);
    }

    public Task getTaskById(Long id) {
        return tasks.stream()
                .filter(task -> task.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Task createTask(Task task) {
        task.setId(counter.incrementAndGet());
        tasks.add(task);
        return task;
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task task = getTaskById(id);
        if (task != null) {
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setCompleted(updatedTask.isCompleted());
            return task;
        }
        return null;
    }

    public boolean deleteTask(Long id) {
        return tasks.removeIf(task -> task.getId().equals(id));
    }
}
