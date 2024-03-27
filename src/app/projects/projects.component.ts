import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// Material imports
import { MatButtonModule } from "@angular/material/button";

import { ApiResponse } from '../../assets/apiResponse';
import { Project } from '../../assets/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  categories: string[] = [];

  constructor (private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ApiResponse<Project[]>>("https://oswd-cg.azurewebsites.net/api/portfolio/projects")
      .subscribe(response => {
        console.log(response);
        this.projects = response.payload;
        console.log(this.projects);
        this.categories = Array.from(new Set(this.projects.map(project => project.category)));
      });
  }

  shortenCategory(category: string): string {
    return category.replace(/\s/g, '');
  }

  filterProjects(category: string) : Project[] {
    return this.projects.filter(project => project.category == category)
  }
}
