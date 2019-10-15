import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiddleBannerService } from '../../../../services/middle-banner.service';
import { Middle_banner } from 'src/app/server/models/middle_banner.model';


@Component({
  selector: 'app-middle-banner-edit',
  templateUrl: './middle-banner-edit.component.html',
  styleUrls: ['./middle-banner-edit.component.css']
})
export class MiddleBannerEditComponent implements OnInit {
  post: Middle_banner;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private middleBannerService: MiddleBannerService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.middleBannerService.getMiddleBannerById(id)
      .subscribe((post: Middle_banner) => {
        this.post = post;
        this.originalTitle = String(post.name);
      });
  }

}
