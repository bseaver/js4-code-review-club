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
  newForm = true;
  edit = new Member();
  editValidationMessage = '';

  constructor(
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  saveNewMember() {
    this.editValidationMessage = this.edit.validationMessage();
    console.log(this.editValidationMessage);

    if (!this.editValidationMessage) {
      const promise = this.memberService.addMember(this.edit);
      promise.then((whatever) => {this.edit.resetFields()});
    }
  }

  // viewProfile(thisMember) {
  //   this.router.navigate(['profiles', thisMember.$key]);
  // }

  filterChange(selection: string) {
    this.filterByOfficer = selection;
  }
}
