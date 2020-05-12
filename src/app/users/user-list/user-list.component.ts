import { Component, OnInit } from '@angular/core';
import { Muser } from 'src/app/shared/models/muser.model';
import { MusersService } from 'src/app/shared/services/musers.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Muser[];

  constructor(private musersService: MusersService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let users = this.musersService.getAll();
      this.users = isNullOrUndefined(await users) ? [] : await users;
    } catch (err) {
      console.error(err);
    }
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url + '/profile', id]);
  }

  onAddProfile() {
    this.router.navigate([this.router.url + '/profile']);
  }
}
