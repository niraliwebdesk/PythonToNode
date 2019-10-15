import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopBannerService } from '../../../../services/top-banner.service';
import { Top_banner } from 'src/app/server/models/top_banner.model';


@Component({
  selector: 'app-top-banner-edit',
  templateUrl: './top-banner-edit.component.html',
  styleUrls: ['./top-banner-edit.component.css']
})
export class TopBannerEditComponent implements OnInit {
  post: Top_banner;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private topBannerService: TopBannerService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.topBannerService.getTopBannerById(id)
      .subscribe((post: Top_banner) => {
        this.post = post;
        this.originalTitle = String(post.name);
      });
  }

}
