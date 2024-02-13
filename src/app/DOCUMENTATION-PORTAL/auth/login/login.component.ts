import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(private renderer: Renderer2){}

  ngAfterViewInit(): void {
    this.renderer.addClass(document.body, 'scroll');
  }
}
