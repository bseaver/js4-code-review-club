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
    // Remove unassigned key (Firebase will then create one)
    if (!newMember.$key) {
      delete newMember.$key;
    }
    return this.members.push(newMember);
  }

  deleteMember(member: Member) {
    const memberInFirebase = this.getMemberById(member.$key);
    return memberInFirebase.remove();
  }

  updateMember(memberId: string, localMember: Member) {
    const memberInFirebase = this.getMemberById(memberId);
    return memberInFirebase.update({
      memberName: localMember.memberName,
      memberSince: localMember.memberSince,
      memberProfile: localMember.memberProfile,
      clubOfficer: localMember.clubOfficer
    });
  }
}
