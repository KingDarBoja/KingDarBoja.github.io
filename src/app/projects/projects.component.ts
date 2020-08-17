import { Component, OnInit } from '@angular/core';
import { ACTIVE_PROJECTS, OCCASIONAL_PROJECTS } from './project.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeProjects = ACTIVE_PROJECTS;
  occasionalProjects = OCCASIONAL_PROJECTS;

  ngOnInit(): void {}
}
