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
  // @ViewChild(ContactRecordComponent) contactRef: ContactRecordComponent;
  // obj:ContactRecordComponent["dataSource"]

  
  //lnameForContact: string;
  // name : string = '';
  obj: ContactRecords[] = [];
  tablerecords: any;
  // idForContact: number = 4;
  //  obj: data[]=[]

  constructor(private contactrecord:ContactRecordComponent,private fb: FormBuilder, public dialogRef: MatDialogRef<ContactRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [], public dialog: MatDialog,
    // public addcontact: ContactRecordComponent
  ) {

    this.obj = this.data;
    // this.todos = this.todos.filter(todo => todo.id !== id)

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
    // this.contactRef = new  this.contactRef();
    // this.obj=this.data;
    // var tableobject = this.obj
    // console.log(tableobject)
    //this.idForContact = this.obj[this.obj.length-1].id;
    //var tableobject = this.obj;
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
    // this.idForContact = Number(tableobject.filter(id => tableobject[4].id))
    // this.idForContact = this.obj.filter(id => id.id === this.obj[4].id)
    // this.idForContact = tableobject.filter(id => id.id === tableobject[4].id)
    // this.idForContact++;
    console.log(this.contactrecord.idForContact)
    localStorage.setItem("my_records", JSON.stringify(tableobject));
    var storedcontacts = JSON.parse(localStorage.getItem("my_records"));
    // storedcontacts.id++;
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
    this.tablerecords =JSON.parse(localStorage.getItem('my_records'))
    this.tablerecords = this.tablerecords.filter(recorid => recorid.id !== id)
  }
}
