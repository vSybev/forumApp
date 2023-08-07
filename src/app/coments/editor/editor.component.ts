import { Component, Input } from '@angular/core';
import { Coment } from 'src/app/shared/coment.model';
import { ComentsService } from '../coments.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  @Input() themeKey: string = '';
  
  constructor(
        private comentsService: ComentsService,
        private activatedRouter: ActivatedRoute,
    ){
      this.activatedRouter.params.subscribe(params => {
        this.themeKey = params['themeKey'];
      });
    }
  
  editorForm = new FormGroup({
    creator: new FormControl(''),
    text: new FormControl(''),
  });


  onSubmitComent(data: {creator: string, text: string}){
    
    let id: number = Math.random()*100;
    const date: string = new Date().toLocaleString('en-GB', {
      hour12: false,
    });

    console.log('this is the data: ', data);
    let newComent: Coment = new Coment(data.creator, date, data.text, id, this.themeKey);
    this.comentsService.addComent(newComent);

    // this.creator = '';
    // this.text = '';
  }   
}
