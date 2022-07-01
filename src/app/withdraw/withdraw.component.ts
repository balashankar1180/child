import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  template: `
    <p>
      Our Bank doesn't provide withdraw transactions.
    </p>
  `,
  styles: []
})
export class WithdrawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
