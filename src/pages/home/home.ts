import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var force: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController) {

    this.loadUsers()
      .then((results => {

        this.users = results;
      }));

  }


  loadUsers() {
    return new Promise(
      (resolve, reject) => {

        force.login(() => {
          force.query('select id, Name from user LIMIT 50', (response) => {

            resolve(response.records);
          });
        });

      })
  }

}
