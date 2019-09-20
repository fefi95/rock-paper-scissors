import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from 'src/services/notification.service';
import { catchError } from 'rxjs/operators';

@Injectable()
// Intercepts and handles an HttpRequest or HttpResponse.
export class ServerErrorsInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) { }

  // We can do more than just handling errors (retry)
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status > 400) {
          // Show the error
          this.notificationService.notify('Something happened');
        }
        return throwError(error);
      })
    );
  }
}
