import {Component,ChangeDetectionStrategy, signal} from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sredio_project';
  panelOpenState = signal(false);
  token: any = null
  userData: any

  constructor(private authService: AuthServiceService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.authService.getUserData(this.token).subscribe(data => {
          console.log("DATA >> ", data)
          this.userData = data;
        },(err) => this.panelOpenState.set(true));
      }else{
        this.panelOpenState.set(true)
      }
    });


  }
  connectToGithub(){
    window.location.href = 'http://localhost:3000/auth/github';
  }

  removeToGithub(){
    if (this.token) {
      this.authService.removeUser(this.token).subscribe(data => {
        this.userData = null
      });
    }
  }

  getDate(date:any) {
    try{
      const datestr = moment(parseInt(date)).format('YYYY-MM-DD HH:mm:ss');
      return datestr
    }catch(_err){
      return new Date()
    }
  }

}
