import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  providers: [MemberService]
})

export class ProfilesComponent implements OnInit {
  memberId: string = null;
  thisMember;

  constructor(
    private router: Router,
    private route:  ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) { }


  ngOnInit() {
    this.route.params.forEach((urlParameter) => {
      this.memberId = urlParameter['id'];
    });

    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {
      this.thisMember = new Member(
        dataLastEmittedFromObserver.memberName,
        dataLastEmittedFromObserver.memberSince,
        dataLastEmittedFromObserver.memberProfile,
        dataLastEmittedFromObserver.clubOfficer
      );
    });
  }

}
