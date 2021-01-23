import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactRecordComponent } from '../contact-record/contact-record.component';
import { FormControl, Validators, SelectControlValueAccessor, NgForm, FormBuilder } from '@angular/forms';
import { ContactRecords } from '../contact-records';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  // @ViewChild(ContactRecordComponent)  addcontactRef: ContactRecordComponent;
  // obj:ContactRecordComponent["dataSource"]

  idForContact;
  lnameForContact: string;
  // name : string = '';
  obj: ContactRecords[] = [];

  //  obj: data[]=[]

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ContactRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [], public dialog: MatDialog,
    // public addcontact: ContactRecordComponent
  ) {

    this.obj = this.data;

  }

  onNoClick(): void {
    this.dialogRef.close();

  }
  name = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  wplace = new FormControl('', []);
  contact = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);


  getErrorMessage() {
    // if(this.name.hasError('required')?)
    return (this.name.hasError('required') ? 'First Name is required' : '') || (this.lname.hasError('required') ? 'Last Name' : '') || (this.contact.hasError('required') ? 'Mobile No. is required' : '') || (this.email.hasError('required') ? 'Email is required' : '')
    // return this.lname.hasError()
  }

  ngOnInit() {
    // this.obj=this.data;
    // var tableobject = this.obj
    // console.log(tableobject)
  }

  // ngAfterViewInit(){
  //   // this.obj===this.addcontact.dataSource;
  //   console.log(this.addcontactRef)
  // }

  Onsubmit() {

    console.log(this.name.value)
    console.log(this.lname.value)
    console.log(this.wplace.value)
    console.log(this.contact.value)
    console.log(this.email.value)

    var obj = {


      name: this.name,
      lname: this.lname,
      email: this.email,
      contact: this.contact,
      wplace: this.wplace,

    }

    console.log(obj)

  }

  addContact() {
    if (this.obj.length >= 4)
      this.idForContact++;
    this.obj.push(
      {
        id: this.idForContact,
        name: this.name.value,
        lname: this.lname.value,
        contact: this.contact.value,
        wplace: this.wplace.value,
        email: this.email.value

      })
    var tableobject = this.obj;
    localStorage.setItem("my_records", JSON.stringify(tableobject));
    var storedcontacts = JSON.parse(localStorage.getItem("my_records"));
    // this.idForContact = id;
    console.log(storedcontacts)

    // this.obj = localStorage.setItem
    // name: this.name.value == undefined,   
    //    // this.nameForContact=this.name.value;
    // this.lnameForContact=this.lname.value;
    // this.contactForContact='';
    // this.wplaceForContact='';
    // this.emailForContact='';

    console.log(this.obj)
  }
}
