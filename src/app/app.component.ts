import {Component,inject, signal} from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.authService.getUserData(this.token).subscribe(data => {
          this.userData = data;
          this.openSnackBar(`Welcome, ${this.userData.displayName}`)
        },(err) => {
          this.openSnackBar(err?.error?.message || "Please connect again")
        });
      }else{
        this.openSnackBar(`Something Went wrong!`)
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
        this.openSnackBar(`You are disconnecting`)
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

  openSnackBar(message: string) {
    this._snackBar.open(message, '',{
      duration: 3000
    });
  }

}
