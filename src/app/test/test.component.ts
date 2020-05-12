import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  id: number;
  p1: string;
  p2: string;

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
    this.activatedRouter.queryParams.subscribe((param) => {
      this.p1 = param.prop1;
      this.p2 = param.prop2;
    });
  }

  ngOnInit(): void {}
}
