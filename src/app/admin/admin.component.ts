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
  editForm = false;
  deleteForm = false;
  edit = new Member();
  editValidationMessage = '';

  constructor(
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  filterChange(selection: string) {
    this.filterByOfficer = selection;
  }

  resetForm(setNew = true) {
    this.edit = new Member();
    this.newForm = false;
    this.deleteForm = false;
    this.editForm = false;
    if (setNew) {
      this.newForm = true;
    }
  }

  saveNewMember() {
    this.editValidationMessage = this.edit.validationMessage();

    if (!this.editValidationMessage) {
      const promise = this.memberService.addMember(this.edit);
      promise.then((success) => {
        this.resetForm();
      }).catch((failure) => {
        console.log("Member Save New Failed!");
        console.log(failure);
      });
    }
  }

  deleteMember(member) {
    this.resetForm(false);
    this.edit = member;
    this.deleteForm = true;
  }

  deleteMemberConfirmed() {
    const promise = this.memberService.deleteMember(this.edit);
    promise.then((success) => {
      this.resetForm();
    }).catch((failure) => {
      console.log("Member Delete Failed!");
      console.log(failure);
    });
  }

  editMember(member) {
    this.resetForm(false);
    this.edit.copyFields(member);
    this.editForm = true;
  }

  updateMember() {
    this.editValidationMessage = this.edit.validationMessage();

    if (!this.editValidationMessage) {
      const promise = this.memberService.updateMember(this.edit);
      promise.then((success) => {
        this.resetForm();
      }).catch((failure) => {
        console.log("Member Update Failed!");
        console.log(failure);
      });
    }
  }
}
