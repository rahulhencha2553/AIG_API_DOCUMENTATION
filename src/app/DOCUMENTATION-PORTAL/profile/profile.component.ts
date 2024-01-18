import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {






  // toggling edit button
  editButtonToggel(isEdit:any){
    if(isEdit){
    document.getElementById("btn2")!.style.display = "block";
    document.getElementById("btn1")!.style.display = "none";
    }
    else
    {
      document.getElementById("btn2")!.style.display = "none";
      document.getElementById("btn1")!.style.display = "flex";
    }

  }
}
