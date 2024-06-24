import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(private Authservice: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.Authservice.getToken()) {
      this.router.navigateByUrl("/login");
      }
      return this. Authservice.getToken();
  }  
}