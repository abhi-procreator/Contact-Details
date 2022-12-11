
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RestService } from '../rest.service';
import { UserData } from './ModalData/UserData';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  name: any;
  formValue!: FormGroup;

  UsersDataObj: UserData = new UserData();
  AllUsersData: any;
  AllUsersDataCopy: any;
  responseArray: any[] = [];
  users: any;
  searchText: any;

  constructor(private formBuilder: FormBuilder, private rest: RestService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      users: ['', Validators.required],
    });

    this.getAllData();
  }

  // Getting value of table
  onSubmit(formValue: any) {
    this.UsersDataObj.name = this.formValue.value.name;
    this.UsersDataObj.email = this.formValue.value.email;
    this.UsersDataObj.mobile = this.formValue.value.mobile;
    this.UsersDataObj.users = this.formValue.value.users;

    let response: any = [];

    this.responseArray.push(formValue.value);

    // privent same data fill in array or table
    // response = this.responseArray.filter((el: any) => {
    //   return !this.AllUsersData.find((element: any) => {
    //     return element.email === el.email;

    response = this.responseArray.filter((el: any) => {
      return !this.AllUsersData.find((element: any) => {
        return element.users === el.users;
      });
    });
    if (response.length > 0) {
      this.rest.postData(this.UsersDataObj).subscribe((res) => {
        this.formValue.reset(); // reset data from form
        this.getAllData(); // refresh data in table

      });
    }
  }

  //  get value by variable AllUsersData and print in table
  getAllData() {
    this.rest.getData().subscribe((res) => {
      this.AllUsersData = res;
      this.AllUsersDataCopy = res;
    });
  }

  //  delete data from table   
  removeData(data: any) {
    this.rest.deleteData(data.id).subscribe((res) => {
      this.getAllData();
    });
  }

  //for search text  by name or users
  // search(val:any) {
  //   if (this.users == '') {
  //     this.ngOnInit();
  //   } else {
  //     this.AllUsersData = this.AllUsersData.filter((res: any) => {
  //        return res.users.toLocaleLowerCase().match(this.users.toLocaleLowerCase());
  //     // return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()); 
  //     });
  //     //console.log(this.AllUsersData);
  //   }
  // } 



  search(val: any) {
    let value = val.value;
    this.AllUsersData = [];
    for (let i = 0; i < this.AllUsersDataCopy.length; i++) {
      // if (this.AllUsersDataCopy[i].name.toLocaleLowerCase().includes(value) || this.AllUsersDataCopy[i].users.toLocaleLowerCase().includes(value) || this.AllUsersDataCopy[i].email.toLocaleLowerCase().includes(value)) {
        if (this.AllUsersDataCopy[i].name.toLocaleLowerCase().includes(value) || this.AllUsersDataCopy[i].users.toLocaleLowerCase().includes(value)){
        this.AllUsersData.push(this.AllUsersDataCopy[i]);
      }
    }
  }

}

