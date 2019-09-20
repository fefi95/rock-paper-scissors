import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { NotificationService } from 'src/services/notification.service';
import { throwError } from 'rxjs';


// Hook for centralized exception handling.
@Injectable()
export class AppErrorsHandler implements ErrorHandler {
  // Can't use dependency injection directly. The error handler loads first
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationService);
    if (error instanceof HttpErrorResponse) {
      // Handle an HttpError
      console.error(error);
    } else {
      // Client Error - could be navigation, could be a variable doesn't exist
      this.handleNonHttpError(error);
    }
    // Log the error to server
    // Send error to a monitoring service"
    return throwError(error);
  }

  private handleNonHttpError(error) {
    if (environment.production) {
      const router = this.injector.get(Router);
      router.navigate(['/error']);
    } else {
      console.error(error.message);
    }
  }
}
