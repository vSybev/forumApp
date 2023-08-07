import { Injectable } from '@angular/core';
import { Coment } from '../shared/coment.model';
import { Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComentsService {

  public arrayOfComents: {}[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getAllComents(){
    this.http
      .get(
        'https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/coments.json'
      ).pipe(
        
        )
      .subscribe(res => {
        
        for(const [key, value] of Object.entries(res)){
          const comentKey = key;
          const comentValues = value;

          this.arrayOfComents.push({comentKey, comentValues});
        }

        this.arrayOfComents = this.arrayOfComents.sort( (a: any,b: any) =>  <any> new Date(b.themeValues.date) - <any> new Date(a.themeValues.date));

        console.log(this.arrayOfComents);
        console.log(res);
      });
  }

  getOneComent(key: string){
    const url = `https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/themes/${key}/.json`;
    this.http
      .get(
        url
      ).subscribe(res => {
        console.log(res);
      })
  }

  deleteComent(key: string){
    const url = `https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/coments/${key}/.json`;
    this.http
      .delete(
        url
      ).subscribe(res => {
        console.log(res);
      })
  }

  addComent(coment: Coment){
    this.http
      .post(
        'https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/coments.json',
        coment
      ).subscribe(res => {
        console.log(res);
      });
  }
}
