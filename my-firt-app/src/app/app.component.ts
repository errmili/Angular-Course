import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fName: string = "jean";
  lName: string = "quentin";
  age: number = 20;
  result: boolean = false;
  valid: string = "exact";
  
  friends: string[] = ['jean',"valentin","hergel"]

  constructor(){
    // setTimeout(() =>{
    //   this.result = true
    // },5000)
  }
  getAge(): number{
    return this.age;
  }
  // getData(e: Event){
  //   //console.log(e)
  //   this.fName = (<HTMLInputElement>e.target).value;
  // }
}
