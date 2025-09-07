import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  loading = true;
  error: string | null = null;
  users: any[] = [];
  categories: any[] = [];
  selectedUserId: string = '';
  selectedCategoryId: string = '';

  constructor(private taskService: TaskService, private userService: UserService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: () => this.users = []
    });
    this.categoryService.getAll().subscribe({
      next: (cats) => this.categories = cats,
      error: () => this.categories = []
    });
    this.loadTasks();
  }

  loadTasks() {
    this.loading = true;
    let obs;
    if (this.selectedUserId && this.selectedCategoryId) {
      obs = this.taskService.getAll();
    } else if (this.selectedUserId) {
      obs = this.taskService.getByUser(Number(this.selectedUserId));
    } else if (this.selectedCategoryId) {
      obs = this.taskService.getByProject(Number(this.selectedCategoryId)); // Remplacer par getByCategory si disponible
    } else {
      obs = this.taskService.getAll();
    }
    obs.subscribe({
      next: (tasks) => {
        // Filtrage local si getByCategory non dispo côté backend
        if (this.selectedCategoryId) {
          this.tasks = tasks.filter((t: any) => t.category && t.category.id == this.selectedCategoryId);
        } else {
          this.tasks = tasks;
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur de chargement des tâches';
        this.loading = false;
      }
    });
  }

  onUserChange() {
    this.loadTasks();
  }

  onCategoryChange() {
    this.loadTasks();
  }

  deleteTask(id: number) {
    this.taskService.delete(id).subscribe({
      next: () => this.loadTasks(),
      error: () => this.error = 'Erreur lors de la suppression'
    });
  }

  markAsCompleted(id: number) {
    this.taskService.markAsCompleted(id).subscribe({
      next: () => this.loadTasks(),
      error: () => this.error = 'Erreur lors de la mise à jour'
    });
  }
}
