import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  ngOnInit(): void {
    //AppUtils.bodyCssChange();
  }

  constructor(private snackBar:MatSnackBar){}
  value="hello rahul";
  copyText(){
AppUtils.copyText(this.value);
this.openSnackBar()
  }

  

  public  openSnackBar() {
console.log(this.snackBar);

    this.snackBar.open('Message archived');
   }
}
