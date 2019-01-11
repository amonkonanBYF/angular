import { Component, OnInit } from '@angular/core';
import {Session} from '../session';
import {FakeSessionItemService} from '../fake-session-item.service';
import {ActivatedRoute} from '@angular/router';
import {SessionHttpService} from '../session-http.service';
import { Observable} from 'rxjs';
import { Router } from "@angular/router";
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
id;
private sub: any;
session:any;
tracks = ['MEAN', 'Angular',
    'NodeJS', 'Android', 'Swift', 'Xamarin'];
  constructor(private router: Router, private route: ActivatedRoute, 
    private sessionItemService: FakeSessionItemService, private  sessionhttp: SessionHttpService) { }
    ngOnInit() {
    	this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    console.log('Session ID ' + this.id.toString());
      this.sessionhttp.getSession(this.id.toString())
    .subscribe(data => {
      console.log(data);
      this.session = data;
    });
  }
editSession(sessionItem) {
    //console.log(sessionItem);
    console.log(sessionItem);
    sessionItem._id = this.id;
    console.log('Session ID' + sessionItem._id);
    this.sessionhttp.updateSession(sessionItem).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
      this.router.navigate(['../admin/list']);
      location.reload();
  }
}
