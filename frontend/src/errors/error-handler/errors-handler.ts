import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
// import { NotificationService } from "./../../services/notification/notification.service";
import { throwError } from "rxjs";
import { environment } from "../../environments/environment";
// import { NGXLogger } from "ngx-logger";

@Injectable()
export class AppErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    console.error("holis vale");
    // if para cuando es dev
    return;
    // const notificationService = this.injector.get(NotificationService);

    // if (error instanceof HttpErrorResponse) {
    //   if (!navigator.onLine) {
    //     notificationService.notify("No Internet Connection");
    //   }
    //   notificationService.notify(
    //     "Error making request to server. Please reload this page"
    //   );
    // } else {
    //   // Client Error - could be navigation, could be a variable doesn't exist
    //   this.handleNonHttpError(error);
    // }
    // // Log the error anyway
    // const logger = this.injector.get(NGXLogger);
    // logger.error(error.message);

    // return throwError(error);
  }

  private handleNonHttpError(error) {
    if (environment.production) {
      const router = this.injector.get(Router);
      return router.navigate(["/error"]);
    }
  }
}
