import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppErrorsHandler } from "./error-handler/errors-handler";
import { ErrorRoutingModule } from "./error-routing/error-routing.module";
import { ErrorsComponent } from "./errors-component/errors.component";

@NgModule({
  imports: [CommonModule, RouterModule, ErrorRoutingModule],
  declarations: [ErrorsComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorsHandler
    }
  ]
})
export class ErrorsModule {}
