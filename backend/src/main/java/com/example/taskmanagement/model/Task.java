package com.example.taskmanagement.model;

import jakarta.persistence.*;
import com.example.taskmanagement.model.Category;
import jakarta.validation.constraints.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String title;

    @Size(max = 255)
    private String description;
    private boolean completed;


    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "assigned_user_id")
    private User assignedUser;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
    public Project getProject() { return project; }
    public void setProject(Project project) { this.project = project; }
    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }
    public User getAssignedUser() { return assignedUser; }
    public void setAssignedUser(User assignedUser) { this.assignedUser = assignedUser; }
}
