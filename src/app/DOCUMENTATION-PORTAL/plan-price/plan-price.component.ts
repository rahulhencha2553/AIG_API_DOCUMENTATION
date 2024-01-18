import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-plan-price',
  templateUrl: './plan-price.component.html',
  styleUrls: ['./plan-price.component.scss']
})
export class PlanPriceComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    this.buttonClassActive()

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
