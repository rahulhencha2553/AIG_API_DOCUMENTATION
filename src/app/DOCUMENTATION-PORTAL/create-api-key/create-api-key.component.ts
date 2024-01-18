import { Component, OnInit } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-create-api-key',
  templateUrl: './create-api-key.component.html',
  styleUrls: ['./create-api-key.component.scss']
})
export class CreateApiKeyComponent implements OnInit{
  ngOnInit(): void {
    AppUtils.bodyCssChange();
   
  }

}
