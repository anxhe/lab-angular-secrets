import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  user: any;
  secret: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.getPrivateData()
      .subscribe((data)=> this.secret = data.message)
  }
}
