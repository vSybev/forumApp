import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { EditorModule } from 'primeng/editor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeComponent } from './themes/theme/theme.component';
import { ComentsComponent } from './coments/coments.component';
import { ComentComponent } from './coments/coment/coment.component';
import { EditorComponent } from './coments/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemesComponent,
    ThemeComponent,
    ComentsComponent,
    ComentComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    FormsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule,
    InfiniteScrollModule
  ],
  providers: [ThemeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
