import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth.guard'; 
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer.component';
import { CustomerService } from './services/customer.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { AdminPostFormComponent } from './components/admin-post-form/admin-post-form.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { BaseDashboardComponent } from './components/base-dashboard/base-dashboard.component';
import { OrderComponent } from './components/order/order.component';
import { AdminOrderFormComponent } from './components/admin-order-form/admin-order-form.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { FcmMainComponent } from './components/FCM/fcm-main/fcm-main.component';
import { FcmComponent } from './components/FCM/fcm/fcm.component';
import { FcmAddComponent } from './components/FCM/fcm-add/fcm-add.component';
import { FcmEditComponent } from './components/FCM/fcm-edit/fcm-edit.component';
import { AdminFcmFormComponent } from './components/FCM/admin-fcm-form/admin-fcm-form.component';
import { FcmDetailsComponent } from './components/FCM/fcm-details/fcm-details.component';
import { DashboardMainComponent } from './components/dashboard_banners/dashboard-main/dashboard-main.component';
import { BottomBannerComponent } from './components/dashboard_banners/bottom_banner/bottom-banner/bottom-banner.component';
import { BottomBannerAddComponent } from './components/dashboard_banners/bottom_banner/bottom-banner-add/bottom-banner-add.component';
import { BottomBannerEditComponent } from './components/dashboard_banners/bottom_banner/bottom-banner-edit/bottom-banner-edit.component';
import { BottomBannerDetailsComponent } from './components/dashboard_banners/bottom_banner/bottom-banner-details/bottom-banner-details.component';
import { AdminBottomFormComponent } from './components/dashboard_banners/bottom_banner/admin-bottom-form/admin-bottom-form.component';
import { BottomBar } from './server/models/bottom_bar.model';
import { MiddleBannerComponent } from './components/dashboard_banners/middle_banner/middle-banner/middle-banner.component';
import { AdminMiddleFormComponent } from './components/dashboard_banners/middle_banner/admin-middle-form/admin-middle-form.component';
import { MiddleBannerAddComponent } from './components/dashboard_banners/middle_banner/middle-banner-add/middle-banner-add.component';
import { MiddleBannerEditComponent } from './components/dashboard_banners/middle_banner/middle-banner-edit/middle-banner-edit.component';
import { BrandComponent } from './components/dashboard_banners/brand/brand/brand.component';
import { BrandAddComponent } from './components/dashboard_banners/brand/brand-add/brand-add.component';
import { BrandEditComponent } from './components/dashboard_banners/brand/brand-edit/brand-edit.component';
import { AdminBrandFormComponent } from './components/dashboard_banners/brand/admin-brand-form/admin-brand-form.component';
import { TopBannerComponent } from './components/dashboard_banners/top_banner/top-banner/top-banner.component';
import { TopBannerAddComponent } from './components/dashboard_banners/top_banner/top-banner-add/top-banner-add.component';
import { TopBannerEditComponent } from './components/dashboard_banners/top_banner/top-banner-edit/top-banner-edit.component';
import { AdminTopFormComponent } from './components/dashboard_banners/top_banner/admin-top-form/admin-top-form.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
  { path: 'admin', component: BaseDashboardComponent },
  { path: '', component: LoginComponent},
  { path: 'admin/users', component: UserMainComponent },
  { path: 'admin/fcm', component: FcmMainComponent },
  { path: 'admin/dashboard', component: DashboardMainComponent },
  { path: 'logout', component: LogoutComponent },

  //customer
  { path: 'admin/user/customer', component: CustomerListComponent },
  { path: 'admin/user/customer/detail/:id', component: CustomerDetailsComponent },
  { path: 'admin/user/customer/add', component: CustomerAddComponent },
  { path: 'admin/user/customer/update/:id', component: CustomerEditComponent },
  
  
  //order
  { path: 'admin/user/order', component: OrderComponent },
  { path: 'admin/user/order/detail/:id', component: OrderDetailsComponent },
  { path: 'admin/user/order/add', component: OrderAddComponent },
  { path: 'admin/user/order/update/:id', component: OrderEditComponent },
  
  //FCM
  { path: 'admin/fcm/fcmDevice', component: FcmComponent },
  { path: 'admin/fcm/fcmDevice/:id', component: FcmDetailsComponent },
  { path: 'admin/fcm/fcmDevice/add', component: FcmAddComponent },
  { path: 'admin/fcm/fcmDevice/update/:id', component: FcmEditComponent },

  //Bottom Banner

  { path: 'admin/dashboard/bottomBanner', component: BottomBannerComponent },
  { path: 'admin/dashboard/bottomBanner/detail/:id', component: BottomBannerDetailsComponent },
  { path: 'admin/dashboard/bottomBanner/add', component: BottomBannerAddComponent,pathMatch:'full' },
  { path: 'admin/dashboard/bottomBanner/update/:id', component: BottomBannerEditComponent },

  //Middle Banner

  { path: 'admin/dashboard/MiddleBanner', component: MiddleBannerComponent },
  // { path: 'admin/dashboard/bottomBanner/detail/:id', component: BottomBannerDetailsComponent },
  { path: 'admin/dashboard/MiddleBanner/add', component: MiddleBannerAddComponent,pathMatch:'full' },
  { path: 'admin/dashboard/MiddleBanner/update/:id', component: MiddleBannerEditComponent },

  //Brand

  { path: 'admin/dashboard/Brand', component: BrandComponent },
  { path: 'admin/dashboard/Brand/add', component: BrandAddComponent},
  { path: 'admin/dashboard/Brand/update/:id', component: BrandEditComponent },

  //Top Banner

  { path: 'admin/dashboard/TopBanner', component: TopBannerComponent },
  { path: 'admin/dashboard/TopBanner/add', component: TopBannerAddComponent},
  { path: 'admin/dashboard/TopBanner/update/:id', component: TopBannerEditComponent },
  

];

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    AdminPostFormComponent,
    CustomerEditComponent,
    BaseDashboardComponent,
    OrderComponent,
    AdminOrderFormComponent,
    OrderDetailsComponent,
    OrderEditComponent,
    OrderAddComponent,
    UserMainComponent,
    FcmMainComponent,
    FcmComponent,
    FcmAddComponent,
    FcmEditComponent,
    AdminFcmFormComponent,
    FcmDetailsComponent,
    DashboardMainComponent,
    BottomBannerComponent,
    BottomBannerAddComponent,
    BottomBannerEditComponent,
    BottomBannerDetailsComponent,
    AdminBottomFormComponent,
    MiddleBannerComponent,
    AdminMiddleFormComponent,
    MiddleBannerAddComponent,
    MiddleBannerEditComponent,
    BrandComponent,
    BrandAddComponent,
    BrandEditComponent,
    AdminBrandFormComponent,
    TopBannerComponent,
    TopBannerAddComponent,
    TopBannerEditComponent,
    AdminTopFormComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    // CustomerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [
    CustomerService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
