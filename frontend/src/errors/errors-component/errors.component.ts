import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "wk-error",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.scss"]
})
export class ErrorsComponent implements OnInit {
  routeParams: Params;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
  }
}
