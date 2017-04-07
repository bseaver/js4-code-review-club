import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from './../member.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  filterByOfficer = 'all';

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  // viewProfile(thisMember) {
  //   this.router.navigate(['profiles', thisMember.$key]);
  // }

  filterChange(selection: string) {
    this.filterByOfficer = selection;
  }
}
