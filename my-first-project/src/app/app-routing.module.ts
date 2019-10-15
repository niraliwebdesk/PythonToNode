import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BaseDashboardComponent } from './components/base-dashboard/base-dashboard.component';
import { AuthGuard } from './guards/auth.guard'; 
import { CustomerListComponent } from './components/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { AdminPostFormComponent } from './components/admin-post-form/admin-post-form.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
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
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'admin', component: BaseDashboardComponent, canActivate : [AuthGuard] },
  { path: '', component: LoginComponent},
  { path: 'admin/users', component: UserMainComponent, canActivate : [AuthGuard] },
  { path: 'admin/fcm', component: FcmMainComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard', component: DashboardMainComponent, canActivate : [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate : [AuthGuard] },

  //customer
  { path: 'admin/user/customer', component: CustomerListComponent, canActivate : [AuthGuard] },
  { path: 'admin/user/customer/detail/:id', component: CustomerDetailsComponent, canActivate : [AuthGuard] },
  { path: 'admin/user/customer/add', component: CustomerAddComponent, canActivate : [AuthGuard] },
  { path: 'admin/user/customer/update/:id', component: CustomerEditComponent, canActivate : [AuthGuard] },
  
  
  //order
  { path: 'admin/order', component: OrderComponent, canActivate : [AuthGuard] },
  { path: 'admin/order/:id', component: OrderDetailsComponent, canActivate : [AuthGuard] },
  { path: 'admin/user/order/add', component: OrderAddComponent, canActivate : [AuthGuard] },
  { path: 'admin/order/update/:id', component: OrderEditComponent, canActivate : [AuthGuard] },
  
  //FCM
  { path: 'admin/fcmDevice', component: FcmComponent, canActivate : [AuthGuard] },
  { path: 'admin/fcmDevice/:id', component: FcmDetailsComponent, canActivate : [AuthGuard] },
  { path: 'admin/fcm/fcmDevice/add', component: FcmAddComponent, canActivate : [AuthGuard] },
  { path: 'admin/fcmDevice/update/:id', component: FcmEditComponent, canActivate : [AuthGuard] },

  //Bottom Banner

  { path: 'admin/dashboard/bottomBanner', component: BottomBannerComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard/bottomBanner/detail/:id', component: BottomBannerDetailsComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard/bottomBanner/add', component: BottomBannerAddComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard/bottomBanner/update/:id', component: BottomBannerEditComponent, canActivate : [AuthGuard] },

  //Middle Banner

  { path: 'admin/dashboard/MiddleBanner', component: MiddleBannerComponent, canActivate : [AuthGuard] },
  // { path: 'admin/dashboard/bottomBanner/detail/:id', component: BottomBannerDetailsComponent },
  { path: 'admin/dashboard/MiddleBanner/add', component: MiddleBannerAddComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard/MiddleBanner/update/:id', component: MiddleBannerEditComponent, canActivate : [AuthGuard] },

  //Brand

  { path: 'admin/dashboard/Brand', component: BrandComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard/Brand/add', component: BrandAddComponent, canActivate : [AuthGuard]},
  { path: 'admin/dashboard/Brand/update/:id', component: BrandEditComponent, canActivate : [AuthGuard] },

  //Top Banner

  { path: 'admin/dashboard/TopBanner', component: TopBannerComponent, canActivate : [AuthGuard] },
  { path: 'admin/dashboard/TopBanner/add', component: TopBannerAddComponent, canActivate : [AuthGuard]},
  { path: 'admin/dashboard/TopBanner/update/:id', component: TopBannerEditComponent, canActivate : [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
