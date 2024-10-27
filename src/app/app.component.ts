import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  firstTime: boolean = true;
  isLogged: boolean = false;
  userData: any;
  rol: string = '';

  constructor(private userService: UserService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkState();
      }
    });
  }
  
  async checkState() {
    if(this.firstTime) {
      const user: any = await this.userService.getState();

      if(user) {
        this.isLogged = true;
        this.firstTime = false;

        this.userService.getUserProfile(user.uid)
          .then((res: any) => {
            this.userData = res;
            this.rol = res.rol;
          });

        this.router.navigate(['/home']);
      }
    }
  }


  
  logout() {
    this.userService.logout()
      .then(() => {
        this.isLogged = false;
      })
      .catch(err => console.log(err));
  }
}
