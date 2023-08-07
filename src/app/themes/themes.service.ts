import { Injectable } from '@angular/core';
import { Theme } from '../shared/theme.model';
import { Observable, Subject, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  public arrayOfThemes: {}[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getAllThemes(){
    this.arrayOfThemes.length = 0;
    this.http
      .get(
        'https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/themes.json'
      )   
      .subscribe(res => {
        for(const [key, value] of Object.entries(res)){
          const themeKey = key;
          const themeValues = value;

          this.arrayOfThemes.push({themeKey, themeValues});
        }
        this.arrayOfThemes = this.arrayOfThemes.sort( (a: any,b: any) =>  <any> new Date(b.themeValues.date) - <any> new Date(a.themeValues.date));

      });
  }
  
  getOneTheme(key: string){
    const url = `https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/themes/${key}/.json`;
    this.http
      .get(
        url
      ).subscribe();
  }

  addTheme(theme: Theme){
    this.http
    .post(
        'https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/themes.json',
        theme
      ).subscribe();
  }
// this.themes = res

  deleteTheme(key: string){
    const url = `https://forum-28a28-default-rtdb.europe-west1.firebasedatabase.app/themes/${key}/.json`;
    this.http
      .delete(
        url
      ).subscribe()
  }
}

// getThemes(page=1, itemsPerPage=10): Observable<string[]>{
//   const startIndex= (page-1) * itemsPerPage;
//   const endIndex  = startIndex + itemsPerPage;
//   const items=[];
//   for(let i = startIndex; i < endIndex; i++){
//    if(i < this.arrayOfThemes.length){
//      items.push(this.arrayOfThemes[i]);
//    }
//   }
//   return of(items).pipe(delay(500));
//  }