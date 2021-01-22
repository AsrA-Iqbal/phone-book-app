import { Component, OnInit } from '@angular/core';
import { ContactRecords } from '../contact-records';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';



const ELEMENT_DATA: ContactRecords[] = [
  { id: 0, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 1, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 2, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 3, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 4, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' }
]
@Component({
  selector: 'app-contact-record',
  templateUrl: './contact-record.component.html',
  styleUrls: ['./contact-record.component.scss']
})

export class ContactRecordComponent implements OnInit {
  showHideDetails: boolean = true;
  displayedColumns: string[] = ['id','name', 'lname', 'contact', 'wplace', 'email', 'action']
  dataSource = ELEMENT_DATA;

  constructor(private dialog:MatDialog) { }

  show_hide_details() {
    this.showHideDetails = !this.showHideDetails;
  }

  openDialog(items){
    console.log(items)
    const dialogRef = this.dialog.open(AddContactComponent,{
      width:"100%",
      height: "50%",
      data:items
    });
  }
  ngOnInit() {

    this.show_hide_details();

  }

}
