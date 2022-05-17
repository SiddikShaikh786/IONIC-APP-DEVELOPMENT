import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AngularFireAuth} from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  user ={
    email: '',
    password:''
  }
  constructor(private router:Router,public ngFireAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  async loginme()
  {
   
    const user= await this.ngFireAuth.signInWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);
    if(user.user.email)
    { 
      this.router.navigate(['/home']);

    }
    else
    { 
      alert('login failed');
    }

}
async register()
{ 
  const user= await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);
  console.log(user);
  if(user.user.email)
{
  alert('register successful');

}
else
{
  alert('register failed');
}
}

}
