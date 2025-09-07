import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: Date;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  userEmail = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail') || 'Utilisateur';
    this.loadTasks();
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }));
    }
  }

  getTotalTasks(): number {
    return this.tasks.length;
  }

  getTasksByStatus(status: string): number {
    return this.tasks.filter(task => task.status === status).length;
  }

  getRecentTasks(): Task[] {
    return this.tasks
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);
  }

  goToNewTask() {
    this.router.navigate(['/task-form']);
  }

  editTask(task: Task) {
    this.router.navigate(['/task-form'], {
      queryParams: { id: task.id },
      state: { task: task }
    });
  }

  deleteTask(task: Task) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'TODO': return 'À faire';
      case 'IN_PROGRESS': return 'En cours';
      case 'DONE': return 'Terminé';
      default: return status;
    }
  }

  getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'LOW': return 'Faible';
      case 'MEDIUM': return 'Moyenne';
      case 'HIGH': return 'Élevée';
      default: return priority;
    }
  }
}
