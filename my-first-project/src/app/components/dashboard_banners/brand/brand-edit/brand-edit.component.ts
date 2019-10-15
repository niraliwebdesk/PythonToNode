import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../../services/brand.service';
import { Brands } from 'src/app/server/models/brands.model';



@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  post: Brands;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.brandService.getBrandById(id)
      .subscribe((post: Brands) => {
        this.post = post;
        this.originalTitle = String(post.name);
      });
  }

}
