// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// //can just use dialogData: any
// export interface DialogData {
//   date: string;
//   create: string;
// }

// @Component({
//   selector: 'app-dialog',
//   templateUrl: './dialog.component.html',
//   styleUrls: ['./dialog.component.scss']
// })
// export class DialogComponent {
//   dialogResult = null;

//   constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {

//   }

//   save() {
//     console.log("Saving changes made in dialog.");
//     //emit form
//     this.dialogRef.close(this.dialogResult);
//   }

//   close() {
//     console.log("Closing dialog without saving.");
//     this.dialogRef.close();
//   }

// }
