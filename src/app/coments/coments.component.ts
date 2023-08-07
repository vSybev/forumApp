import { Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentsService } from './coments.service';
import { Editor } from 'primeng/editor';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css'],
})
export class ComentsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
      private router: Router,
      private comentsService: ComentsService,
      private activatedRoute: ActivatedRoute,
    ){}

  public comentsForVisualization = this.comentsService.arrayOfComents
  themeId = this.activatedRoute.queryParams;
  

  ngOnInit(){
    this.comentsService.getAllComents();
  }

  getAllComments() {
    this.comentsService.getAllComents();
  }

  navigateMainPage(){
    this.router.navigate(['']);
  }

  scrollToTop(){
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  scrollToBottom(){
    return this.document.querySelector('#editor')?.scrollIntoView({
      behavior: 'smooth', 
      block: 'end',
      inline: 'end',
    });
  }
}
