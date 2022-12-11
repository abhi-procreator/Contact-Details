import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import { Users } from './Modals/users';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {

    //value: any;
  // FormBuilder: any;



  constructor(private formBuilder: FormBuilder) { }
  searchText: any;
  form = FormGroup;
  //pattern:any;
  
  //userDetails: Users[] = [];  // form getting value

  ngOnInit(): void {
  }

  onSubmit(val: any) {
   
    // this.userDetails.push(
    //   {
    //     name: val.names,
    //     email: val.emails,
    //     mobile: val.mobiles,
    //     users: val.users,
    //   })

        //console.log(val);
    // if(val.charCode===32){
    //   val.preventDefault();
    // }

  }

  // keyUp(key:any){
  //    console.log(key)
  // }

  // keyUp(e: any) {
  //   console.log(e)
  //   if (e.charCode === 0 && e.key === " " && e.keyCode === 32) {
  //     e.preventDefault();
  //   }
  // }



  //pattern = /\s/g

  //  getUser(event:any) {
  //    console.log(event);
  //   if (event.charCode === '32') {
  //       event.preventDefault();
  //   }
  //}



  // keyPress(event:any){

  //   $('input[name="users"]').on('keypress',function(event:any){
  //     console.log(event)
  //     var x = event.which || event.keyCode;
  //     if(x===32) {
  //         return false;
  //     }else{   
  //         return true;
  //     }
  // });
  //}
  // myFun(){}

 // myFunction(v:any) {
    // var x = document.getElementById("myEmail").pattern;
    // document.getElementById("demo").innerHTML = x;
//     console.log(v)
// }



}
