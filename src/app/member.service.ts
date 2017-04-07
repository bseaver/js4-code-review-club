import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
     this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  deleteMember(memberId: string) {
    const memberInFirebase = this.getMemberById(memberId);
    memberInFirebase.remove();
  }

  updateMember(memberId: string, localMember: Member) {
    const memberInFirebase = this.getMemberById(memberId);
    memberInFirebase.update({
      memberName: localMember.memberName,
      memberSince: localMember.memberSince,
      memberProfile: localMember.memberProfile,
      clubOfficer: localMember.clubOfficer
    });
  }
}
