import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loading = true;
    this.projectService.getAll().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur de chargement des projets';
        this.loading = false;
      }
    });
  }

  deleteProject(id: number) {
    this.projectService.delete(id).subscribe({
      next: () => this.loadProjects(),
      error: () => this.error = 'Erreur lors de la suppression'
    });
  }

  updateProject(id: number, project: any) {
    this.projectService.update(id, project).subscribe({
      next: () => this.loadProjects(),
      error: () => this.error = 'Erreur lors de la modification'
    });
  }
}
