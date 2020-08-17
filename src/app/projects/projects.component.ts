import { Component, OnInit } from '@angular/core';
import { PROJECTS } from './project.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;

  ngOnInit(): void {}
}
