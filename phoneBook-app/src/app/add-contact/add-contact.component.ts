import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactRecordComponent } from '../contact-record/contact-record.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, public dialog: MatDialog) { }

  ngOnInit() {
  }

}
