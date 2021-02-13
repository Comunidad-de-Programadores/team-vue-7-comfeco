
class AuthRequest{
  email:string;
  password:string;
  constructor(){
    this.email = ''
    this.password = ''
  }
}

class RegisterRequest extends AuthRequest{
  confirmPassword:string;
  nickName: string;
  constructor(){
    super();
    this.nickName = "",
    this.confirmPassword =""
  }
}


