import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
})
export class BlogComponent implements OnInit {
  links: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.links = this.scully.available$.pipe(
      map((routes) =>
        routes.filter(
          (route) =>
            route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md')
        )
      )
    );
  }
}
