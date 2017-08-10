export class User {

  constructor (
    public user_id: number,
    public email: string,
    public name: string,
    public phone: number,
    public password: string,
    public creation_date: number,
    public updated_date: number,
    public verified_phone: boolean
  ) {}

  reset() {
    this.user_id = undefined;
    this.email = "";
    this.name = "";
    this.phone = undefined;
    this.password = "";
    this.creation_date = undefined;
    this.updated_date = undefined;
    this.verified_phone = undefined;
  }
  
  initializeUser(userObj: any) {
    this.user_id = userObj.user_id;
    this.email = userObj.email;
    this.name = userObj.name;
    this.phone = userObj.phone;
    this.password = userObj.password;
    this.creation_date = userObj.creation_date;
    this.updated_date = userObj.updated_date;
    this.verified_phone = userObj.verified_phone;
  }
}