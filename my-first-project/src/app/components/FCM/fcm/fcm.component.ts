import { Component, OnInit, Input } from '@angular/core';
import { FcmService } from '../../../services/fcm.service';
import { FCM } from 'src/app/server/models/fcm.model';
import { Location } from '@angular/common';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-fcm',
  templateUrl: './fcm.component.html',
  styleUrls: ['./fcm.component.css']
})
export class FcmComponent{
  fcmList: FCM[];
  notification_msg: any;
  error : any;
  selectOneVal: any;
  IDsFormArray: Array<any> = [];
  returned_val; any;
 constructor(

    private FcmService: FcmService,
    private location: Location
  ) { 
    FcmService.getFCM()
    .subscribe((order: FCM[]) => {
      this.fcmList = order;
    });
}
onDeleteClick(id) {
  this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
  if (this.returned_val == true){
    this.FcmService.deleteFcm(id)
    .subscribe(() => {
      // this.location.go('/customer')
      window.location.reload()
    });

  }
  else{
    window.location.hash
  }
  
}

onSendNoti(id) {
  this.FcmService.sendNotify(id)
    .subscribe(() => {
      // this.location.go('/customer')
     console.log("notification send")
     this.notification_msg = "Notification Sent Sucessfully!"
    });
}

changeStatus(id) {
  this.FcmService.changeActivation(id)
    .subscribe(() => {
      // this.location.go('/customer')
     console.log("notification send")
     this.notification_msg = "Enabled Device"
    });
    window.location.reload()
}
disableStatus(id) {
  this.FcmService.disableActivation(id)
    .subscribe(() => {
      // this.location.go('/customer')
     console.log("notification send")
     this.notification_msg = "Disabled Device"
    });
    window.location.reload()
}
onDataSendNoti(id) {
  this.FcmService.sendDataNotify(id)
    .subscribe(() => {
      // this.location.go('/customer')
     console.log("data notification send")
     this.notification_msg = "Data Notification Sent Sucessfully!"
    });
}
save() {
    console.log(this.selectOneVal);
    console.log(this.IDsFormArray);
    if(this.selectOneVal == 'single_noti'){
      console.log("Send Single Notification")
      if(this.IDsFormArray.length > 0)
      {
        console.log("length of array is :: ",this.IDsFormArray.length )
        if(this.IDsFormArray.length < 2){
          console.log("ID gotten ::: ", this.IDsFormArray[0])
          var user_id = this.IDsFormArray[0]
          this.onSendNoti(user_id)
          console.log("notification sent to id :: ", user_id)
        }
        else{
          this.IDsFormArray.forEach(element => {
            console.log("We got multiple user_ids :: ", element);
            this.onSendNoti(element)
            console.log("notification sent to all users")
          });
          
        } 
        
      }
      else{
        this.error = "Please select IDs"
        setTimeout(() => {
          this.error = ""   
        }, 3000);  
      }
    }
    else if(this.selectOneVal == 'none'){
      this.error = "Please select some action"
      setTimeout(() => {
        this.error = ""   
      }, 3000);  
    }
    else if(this.selectOneVal =='data_noti'){
      console.log("Send data Notification")
      if(this.IDsFormArray.length > 0)
      {
        console.log("length of array is :: ",this.IDsFormArray.length )
        if(this.IDsFormArray.length < 2){
          console.log("ID gotten ::: ", this.IDsFormArray[0])
          var user_id = this.IDsFormArray[0]
          this.onDataSendNoti(user_id)
          console.log("notification sent to id :: ", user_id)
        }
        else{
          this.IDsFormArray.forEach(element => {
            console.log("We got multiple user_ids :: ", element);
            this.onDataSendNoti(element)
            console.log("notification sent to all users")
          });
          
        } 
        
      }
      else{
        this.error = "Please select IDs"
        setTimeout(() => {
          this.error = ""   
        }, 3000);  
      }
    }
    else if(this.selectOneVal =='bulk_noti'){
      console.log("Send bulk Notification")
      if(this.IDsFormArray.length > 0)
      {
        console.log("length of array is :: ",this.IDsFormArray.length )
        if(this.IDsFormArray.length < 2)
        {
          console.log("ID gotten ::: ", this.IDsFormArray[0])
          var user_id = this.IDsFormArray[0]
          this.onSendNoti(user_id)
          console.log("notification sent to id :: ", user_id)
        }
        else{
          this.IDsFormArray.forEach(element => {
            console.log("We got multiple user_ids :: ", element);
            this.onSendNoti(element)
            console.log("notification sent to all users")
          });
        } 
      }
      else{
        this.error = "Please select IDs"
        setTimeout(() => {
          this.error = ""   
        }, 3000);  
      }
    }
    else if(this.selectOneVal =='bulk_data_noti'){
      console.log("Send bulk Notification")
      if(this.IDsFormArray.length > 0)
      {
        console.log("length of array is :: ",this.IDsFormArray.length )
        if(this.IDsFormArray.length < 2)
        {
          console.log("ID gotten ::: ", this.IDsFormArray[0])
          var user_id = this.IDsFormArray[0]
          this.onDataSendNoti(user_id)
          console.log("data notification sent to id :: ", user_id)
        }
        else{
          this.IDsFormArray.forEach(element => {
            console.log("We got multiple user_ids :: ", element);
            this.onDataSendNoti(element)
            console.log("data notification sent to all users")
          });
        } 
      }
      else{
        this.error = "Please select IDs"
        setTimeout(() => {
          this.error = ""   
        }, 3000);  
      }
    }
    else if(this.selectOneVal =='enable'){
      this.IDsFormArray.forEach(element => {
        console.log("We got multiple user_ids :: ", element);
        this.changeStatus(element)
        console.log("enabled!!")
      })
    }
    else if(this.selectOneVal =='disable'){
      this.IDsFormArray.forEach(element => {
        console.log("We got multiple user_ids :: ", element);
        this.disableStatus(element)
        console.log("disabled!!")
      })
    }
    else{
      this.error = "Please select at least one action"
      setTimeout(() => {
        this.error = ""   
      }, 3000);   
    }
  }
  onChange(email:string, isChecked: boolean) {
    if(isChecked) {
      this.IDsFormArray.push(email);
    } else {
      let index = this.IDsFormArray.indexOf(email);
      this.IDsFormArray.splice(index,1);
    }
}
}
