import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    this.http.get("http://localhost:5000/api/Values").subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.error();
      }
    );
  }
}
