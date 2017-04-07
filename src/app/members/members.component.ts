import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from './../member.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})


export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  filterByOfficer = 'all';

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  viewProfile(thisMember) {
    this.router.navigate(['profiles', thisMember.$key]);
  }

  filterChange(selection: string) {
    this.filterByOfficer = selection;
  }
}
