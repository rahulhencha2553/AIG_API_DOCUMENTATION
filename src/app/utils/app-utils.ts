import { MatSnackBar } from "@angular/material/snack-bar";

export class AppUtils {

  

    public static bodyCssChange(
    className: any = 'overflow',
    elementId: any = 'body'
  ) {
    var body = document.getElementById(elementId);
    body!.className = className;
  }



  public static copyText(value: any) {
    navigator.clipboard.writeText(value);
  }

}
