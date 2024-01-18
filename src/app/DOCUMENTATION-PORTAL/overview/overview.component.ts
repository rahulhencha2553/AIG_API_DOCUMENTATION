import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.buttonClassActive()
    AppUtils.bodyCssChange();
  }


  buttonClassActive(){
    const header: HTMLElement | null = document.getElementById("myDIV");
const btns: any = header?.getElementsByClassName("total_account");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",  () => {
        const current: HTMLCollectionOf<Element> = document.getElementsByClassName("actives");
        current[0].className = current[0].className.replace(" actives", "");
        btns[i].className += " actives";
    });
}
  }
}
