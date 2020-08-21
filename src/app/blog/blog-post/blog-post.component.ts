import { Component, AfterViewChecked } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';

import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-blog-post',
  styleUrls: ['./blog-post.component.scss'],
  templateUrl: 'blog-post.component.html'
})

export class BlogPostComponent implements AfterViewChecked {
  constructor(
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService,
    private highlightService: HighlightService,
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

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
