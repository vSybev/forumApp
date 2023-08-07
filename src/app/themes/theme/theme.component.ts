import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesService } from '../themes.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  providers: [ConfirmationService, MessageService, ToastModule],
})
export class ThemeComponent {

  @Input() theme: any;

  isAdmin: boolean = true;

  public constructor( 
    private router: Router,
    private themesService: ThemesService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
  ) {}

  openDetails(key: string){
    this.router.navigate(['coments/' + key]);
  }

  onDelete(key: string){
    if(this.isAdmin === true){
      this.themesService.deleteTheme(key);
    }
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: (type: ConfirmEventType) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
        }
    });
  }


}
