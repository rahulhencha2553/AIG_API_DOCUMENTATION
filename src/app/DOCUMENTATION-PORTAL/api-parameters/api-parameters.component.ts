import { Component, OnInit } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-api-parameters',
  templateUrl: './api-parameters.component.html',
  styleUrls: ['./api-parameters.component.scss']
})
export class ApiParametersComponent implements OnInit{
  ngOnInit(): void {
 AppUtils.bodyCssChange();
  }

  code =` {
    "id": "cus_123456789",<br>
    "object": "customer",
    "address": {
      "city": "city",
      "country": "US",
      "line1": "line 1",
      "line2": "line 2",
      "postal_code": "90210",
      "state": "CA"
    },
    "balance": 0,
    "created": 1483565364,
    "currency": null,
    "default_source": null,
    "delinquent": false,
    "description": null,
    "discount": null,
    "email": null,
    "invoice_prefix": "C11F7E1",
    "invoice_settings": {
      "custom_fields": null,
      "default_payment_method": null,
      "footer": null,
      "rendering_options": null
    },
    "livemode": false,
    "metadata": {
      "order_id": "6735"
    },
    "name": null,
    "next_invoice_sequence": 1,
    "phone": null,
    "preferred_locales": [],
    "shipping": null,
    "tax_exempt": "none"
  }`;
}
