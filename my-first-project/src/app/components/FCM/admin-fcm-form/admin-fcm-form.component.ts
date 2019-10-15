import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FcmService } from '../../../services/fcm.service';
import { FCM } from 'src/app/server/models/fcm.model';

@Component({
  selector: 'app-admin-fcm-form',
  templateUrl: './admin-fcm-form.component.html',
  styleUrls: ['./admin-fcm-form.component.css']
})
export class AdminFcmFormComponent{
  @Input() post: FCM = {
    isActive : true,
    name : '',
    registration_token : '',
    type : '',
    user_name : ''
  };
  @Input() isEditing = false;
  constructor(
    private FCMService: FcmService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }
   
  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.FCMService.editFCM(id, this.post).subscribe(() => {
        this.location.back();
      });
      return;
    } 
      this.FCMService.addFcm(this.post).subscribe(() => {
        this.location.back();
      });
    }
    onCancelClick() {
      this.location.back();
    }
    
    
}