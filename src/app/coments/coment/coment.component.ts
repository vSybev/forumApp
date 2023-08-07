import { Component, Input } from '@angular/core';
import { ComentsService } from '../coments.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent {
  @Input() coment : any;
  @Input() index!: number;

  constructor(private comentsService: ComentsService,
              private sanitizer: DomSanitizer){}

  deleteComent(key: string){    
      this.comentsService.deleteComent(key);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
