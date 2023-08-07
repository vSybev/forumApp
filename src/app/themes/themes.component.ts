import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ThemesService } from './themes.service';
import { Theme } from '../shared/theme.model';
// import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit{

  ngOnInit(){
    this.themesService.getAllThemes();
  }

  constructor(private themesService: ThemesService,){}
  
  public themesForVisualization = this.themesService.arrayOfThemes;
  public data: any;
  array: number[] = [1, 2, 3, 4, 5, 6];
  url: string = './assets/data.json';
  themeName: string = '';
  creatorOfTheme: string = '';

  filteredThemes: Theme[] = [];
  searchText: string = '';
  

  openModel(){
    const modelDiv = document.getElementById('model1');
    if(modelDiv!= null) {
        modelDiv.style.display = 'block';
    }
  }

  closeModel() {
    const modelDiv = document.getElementById('model1');
    if(modelDiv!= null) {
        modelDiv.style.display = 'none';
    }
  } 

  submit(data: {name: string, creator: string}){
    
    this.closeModel();

    //clearing the form
    this.themeName = '';
    this.creatorOfTheme = '';

    let id: number = Math.random()*100;
    const date: string = new Date().toLocaleString('en-GB', {
      hour12: false,
    });

    let newTheme: Theme = new Theme(data.name, data.creator, id, date, '', 0);

    this.themesService.addTheme(newTheme);

    this.themesService.getAllThemes()

    // setTimeout(() => {
    //   this.themesService.getAllThemes()
    // }, 2000);

  }

  startSearching(){
    // this.themesForVisualization = this.themesForVisualization.filter(this.searchText);
    console.log(this.searchText);
  }

}
