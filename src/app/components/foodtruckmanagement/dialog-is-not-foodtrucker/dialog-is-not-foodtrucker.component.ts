import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-is-not-foodtrucker',
  templateUrl: './dialog-is-not-foodtrucker.component.html',
  styleUrls: ['./dialog-is-not-foodtrucker.component.css'],
})
export class DialogIsNotFoodtruckerComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogIsNotFoodtruckerComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
    location.reload();
  }
}
