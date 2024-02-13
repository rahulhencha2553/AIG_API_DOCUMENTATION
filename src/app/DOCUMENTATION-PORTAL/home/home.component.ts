import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    //AppUtils.bodyCssChange("auto");
    
  }
}
