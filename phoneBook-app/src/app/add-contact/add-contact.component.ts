import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactRecordComponent } from '../contact-record/contact-record.component';
import { FormControl, Validators, SelectControlValueAccessor, NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ContactRecords } from '../contact-records';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  // @ViewChild(ContactRecordComponent) contactRef: ContactRecordComponent;
  
  obj: ContactRecords[] = [];

  constructor(public contactrecord:ContactRecordComponent,private fb: FormBuilder, public dialogRef: MatDialogRef<ContactRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [], public dialog: MatDialog, )

     { this.obj = this.data;}

  onNoClick(): void {
    this.dialogRef.close();

  }
  name = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  wplace = new FormControl('', []);
  contact = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  // ContactForm=new FormGroup( {
  //   name: new FormControl( '' ),
  //   lname: new FormControl( '' ),
  //   wplace: new FormControl( '' ),
  //   contact: new FormControl( '' ),
  //   email: new FormControl( '' ),
  // });

  getErrorMessage() {
    // if(this.name.hasError('required')?)
    return (this.name.hasError('required') ? 'First Name is required' : '') || (this.lname.hasError('required') ? 'Last Name' : '') || (this.contact.hasError('required') ? 'Mobile No. is required' : '') || (this.email.hasError('required') ? 'Email is required' : '')
    // return this.lname.hasError()
  }

  ngOnInit() {
    // this.contactRef = new  this.contactRef();
    // this.obj=this.data;
    // var tableobject = this.obj
    // console.log(tableobject)
    //this.idForContact = this.obj[this.obj.length-1].id;
    //var tableobject = this.obj;
  }


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
    for(var i=0; i <this.obj.length; i++){
      // if(typeof(this.obj[i].id) === "number"){
       if(this.obj[i].id === 4){
   /// this.idForContact = this.obj[i].id
        //  this.idForContact === this.obj[i].id
        this.contactrecord.idForContact++;break;
       }
       
    //  / }
    }
    this.obj.push(
      {
        id: this.contactrecord.idForContact,
        name: this.name.value,
        lname: this.lname.value,
        contact: this.contact.value,
        wplace: this.wplace.value,
        email: this.email.value
      })
      // this.idForContact++;
     
    var tableobject = this.obj;
    console.log(this.contactrecord.idForContact)
    localStorage.setItem("my_records", JSON.stringify(tableobject));
    var storedcontacts = JSON.parse(localStorage.getItem("my_records"));
    console.log(storedcontacts)
   
    this.contactrecord.idForContact = this.obj[this.obj.length-1].id
    // this.obj = localStorage.setItem
    // name: this.name.value == undefined,   
    //    // this.nameForContact=this.name.value;
    // this.lnameForContact=this.lname.value;
    // this.contactForContact='';
    // this.wplaceForContact='';
    // this.emailForContact='';

    console.log(this.obj)
  }

  deleteContact(id:number){
    this.contactrecord.deleteRecord(id);
  }

  // Edit(id:number){
  //   this.contactrecord.editrecord(id);
  //   this.contactrecord.editform;
    // const contact = new ContactForm()
    //  this.ContactForm.name=this.ContactForm.get( 'name' ).value;
    //  this.lname=this.ContactForm.get( 'lname' ).value;
    //  this.wplace=this.ContactForm.get( 'wplace' ).value;
    //  this.contact=this.ContactForm.get( 'contact' ).value;
    //  this.email=this.ContactForm.get( 'email' ).value;
    //  console.log(this.name)
  // }
}
