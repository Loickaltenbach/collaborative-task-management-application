import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-form',
  imports: [],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {
  @Output() projectCreated = new EventEmitter<void>();
  projectForm: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.create(this.projectForm.value).subscribe({
        next: () => {
          this.projectForm.reset();
          this.projectCreated.emit();
        },
        error: () => {
          this.error = 'Erreur lors de la création';
        }
      });
    }
  }
}
