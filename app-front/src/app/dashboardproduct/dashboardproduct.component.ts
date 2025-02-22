import {Component, OnInit} from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-dashboardproduct',
  standalone: false,

  templateUrl: './dashboardproduct.component.html',
  styleUrl: './dashboardproduct.component.css'
})
export class DashboardproductComponent implements OnInit {
  public profile! : KeycloakProfile;
  constructor(public keycloakService : KeycloakService) {
  }

  ngOnInit() {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
  }
  async handleLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  handleLogout(){
    this.keycloakService.logout(window.location.origin);
  }
}
