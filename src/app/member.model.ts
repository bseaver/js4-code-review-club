export class Member {
  constructor(
    public memberName = '',
    public memberSince = '',
    public memberProfile = '',
    public clubOfficer = '',
    public $key = null
  ) { }

  sanitizeFields() {
    this.memberName = this.memberName.trim();
    this.memberSince = this.memberSince.trim();
    this.memberProfile = this.memberProfile.trim();
    this.clubOfficer = this.clubOfficer.trim();
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.memberName) {
      message += (message ? '  ' : '') + 'Name is required.';
    }
    if (!this.memberSince) {
      message += (message ? '  ' : '') + 'Member Since is required.';
    }
    return message;
  }
}
