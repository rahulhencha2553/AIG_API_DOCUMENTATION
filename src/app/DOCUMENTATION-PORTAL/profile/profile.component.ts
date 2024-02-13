import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  constructor(private renderer: Renderer2,){}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'scroll');
  }

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
