import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {

  }

  voteUp(): void {
    this.article.votes += 1;
  }

  voteDown(): void {
    this.article.votes -= 1;
  }
  domain(): string {
    return this.article.domain();
  }

  ngOnInit() {
  }

}
