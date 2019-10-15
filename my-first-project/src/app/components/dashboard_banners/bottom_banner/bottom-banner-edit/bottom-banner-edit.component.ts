import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BottomBannerService } from '../../../../services/bottom-banner.service';
import { BottomBar } from 'src/app/server/models/bottom_bar.model';

@Component({
  selector: 'app-bottom-banner-edit',
  templateUrl: './bottom-banner-edit.component.html',
  styleUrls: ['./bottom-banner-edit.component.css']
})
export class BottomBannerEditComponent implements OnInit {

  post: BottomBar;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private bottomBannerService: BottomBannerService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.bottomBannerService.getBottomBannerById(id)
      .subscribe((post: BottomBar) => {
        this.post = post;
        this.originalTitle = String(post.name);
      });
  }

}
