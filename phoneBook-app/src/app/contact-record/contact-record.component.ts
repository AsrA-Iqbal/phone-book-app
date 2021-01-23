import { Component, OnInit } from '@angular/core';
import { ContactRecords } from '../contact-records';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';




var ELEMENT_DATA: ContactRecords[] = [
  { id: 1, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 2, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 3, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 4, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' },
  { id: 5, name: 'Zafar', lname: 'Iqbal', contact: '03002602205', wplace: 'EPZ Zone', email: 'zafar_iqbalsa@yahoo.com' }
]
@Component({
  selector: 'app-contact-record',
  templateUrl: './contact-record.component.html',
  styleUrls: ['./contact-record.component.scss']
})

export class ContactRecordComponent implements OnInit {
  // @ViewChild(AddContactComponent)  addcontact: AddContactComponent;
  idForContact: number = 4;
  tablerecords: any;
  editform:false;
  data:any
  showHideDetails: boolean = true;
  displayedColumns: string[] = ['id', 'name', 'lname', 'contact', 'wplace', 'email', 'action']
  dataSource = ELEMENT_DATA;
  tablerecordid: any;
  constructor(private dialog: MatDialog) {


  }


  show_hide_details() {
    this.showHideDetails = !this.showHideDetails;
  }

  opendialog() {
    var dialogRef = this.dialog.open(AddContactComponent, {
      width: "100%",
      height: "50%",
      data: this.dataSource,
    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');

    });
  }

  editrecord(items){
    console.log(items)
    var dialogRef = this.dialog.open(AddContactComponent, {
      width: "100%",
      height: "50%",
      data: items,
    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.editform;
    });
  }
  

  deleteRecord(items) {
    console.log(items)
      this.data =items
    this.dataSource = this.dataSource.filter(table => table !== items);
    this.tablerecords = JSON.parse(localStorage.getItem('my_records'));
    console.log(this.tablerecords)
    for (var i = 0; i < this.tablerecords.length; ++i) {
      if (this.tablerecords[i].id === items.id) {
        this.tablerecords.splice(i, 1);
        console.log(this.tablerecords)
      }
      // this.idForContact = 4;
      localStorage.setItem("my_records", JSON.stringify(this.tablerecords))
    }

  }


  ngOnInit() {

    this.show_hide_details();
    this.dataSource = JSON.parse(localStorage.getItem('my_records'))
  console.log(this.dataSource);
  }

}
