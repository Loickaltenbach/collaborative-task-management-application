import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: Date;
}

@Component({
  selector: 'app-task-form',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'TODO',
    priority: 'MEDIUM',
    createdAt: new Date()
  };

  isEditing = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Récupérer la tâche si on édite (passée via router state)
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['task']) {
      this.task = { ...navigation.extras.state['task'] };
      this.isEditing = true;
    }
  }

  ngOnInit() {
    // Vérifier les query params pour l'ID de la tâche
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.loadTask(+params['id']);
      }
    });

    // Si ce n'est pas une édition et qu'il y a une tâche dans l'historique
    if (!this.isEditing && history.state.task) {
      this.task = { ...history.state.task };
      this.isEditing = true;
    }
  }

  loadTask(id: number) {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const tasks: Task[] = JSON.parse(savedTasks);
      const task = tasks.find(t => t.id === id);
      if (task) {
        this.task = {
          ...task,
          createdAt: new Date(task.createdAt) // S'assurer que c'est une Date
        };
        this.isEditing = true;
      }
    }
  }

  saveTask() {
    if (!this.task.title.trim()) {
      return;
    }

    const savedTasks = localStorage.getItem('tasks');
    let tasks: Task[] = savedTasks ? JSON.parse(savedTasks) : [];

    if (this.isEditing) {
      // Mise à jour de la tâche existante
      const index = tasks.findIndex(t => t.id === this.task.id);
      if (index !== -1) {
        tasks[index] = {
          ...this.task,
          createdAt: new Date(tasks[index].createdAt) // Garder la date de création originale
        };
      }
    } else {
      // Création d'une nouvelle tâche
      const newTask: Task = {
        ...this.task,
        id: this.generateId(tasks),
        createdAt: new Date()
      };
      tasks.push(newTask);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.goBackToDashboard();
  }

  goBackToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  private generateId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  }
}
