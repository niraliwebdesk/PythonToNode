import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FcmService } from '../../../services/fcm.service';
import { FCM } from 'src/app/server/models/fcm.model';


@Component({
  selector: 'app-fcm-edit',
  templateUrl: './fcm-edit.component.html',
  styleUrls: ['./fcm-edit.component.css']
})
export class FcmEditComponent implements OnInit {

  post: FCM;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private FCMService: FcmService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.FCMService.getFcmById(id)
      .subscribe((post: FCM) => {
        this.post = post;
        this.originalTitle = String(post.name);
      });
  }
}
