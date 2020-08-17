import { Component } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post',
  templateUrl: 'blog-post.component.html'
})

export class BlogPostComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}

  blogPostMetadata = combineLatest([
    this.activatedRoute.params.pipe(pluck('slug')),
    this.scully.available$
  ]).pipe(
    tap(console.log),
    map(([slug, routes]) =>
      routes.find((route: ScullyRoute) => route.route === `/blog/${slug}`)
    )
  );
}
