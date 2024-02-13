import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-create-api-key',
  templateUrl: './create-api-key.component.html',
  styleUrls: ['./create-api-key.component.scss']
})
export class CreateApiKeyComponent implements AfterViewInit{

  constructor(private renderer: Renderer2,){}

  ngAfterViewInit(): void {
    this.renderer.addClass(document.body, 'overflow');

     const buttons = document.querySelectorAll(".selectSection button");
              let firstPage=buttons[0] as HTMLElement ;
            
             

for (let button =0;button<buttons.length;button++) {
    buttons[button].addEventListener('click', (e: Event) => {
        const et = e.target as HTMLElement;
        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active");
        }
        et.classList.add("active");

        const allContent = document.querySelectorAll('.content');
        for (let content =0;content<allContent.length;content++) {
          let butt = allContent[content] as HTMLElement;
            if (butt.getAttribute('data-number') === buttons[button].getAttribute('data-number')) {
              butt.style.display = "block";
            } else {
              butt.style.display = "none";
            }
        }
    });
}
//firstPage.click();


  }

}
