import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  mydate = new Date();

  arr = ["pune", "Mumbai", "Jalgaon"];
  mydata="abcd";
  myname="";
  hello(){
    this.mydata = this.myname;
  }
  formHello(data){
    console.log(data.txtusername +" "+ data.txtpassword)
  }
}
