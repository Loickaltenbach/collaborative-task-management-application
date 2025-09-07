package com.example.taskmanagement.repository;

import com.example.taskmanagement.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
