import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorsModule, AppErrorsHandler } from 'src/errors';
import { ServerErrorsInterceptor } from 'src/errors/server-error-interceptor/server-error-interceptor';
import { NotificationService } from 'src/services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ErrorsModule
  ],
  providers: [
    AppErrorsHandler,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
