import { AfterViewInit, Component } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    AppUtils.bodyCssChange();
  }

}
