import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  message: string;
  action: string;

  constructor(private _snackBar: MatSnackBar, private msg: string, private act: string) {
    msg ? this.message = msg : this.message = "No message";
    act ? this.action = act : "Dismiss";
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
