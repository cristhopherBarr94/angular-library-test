import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-demo-lib',
  template: `
    <p>
      my-demo-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyDemoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
