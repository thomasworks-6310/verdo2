// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { RegistrationComponent } from './empRegist/registration/registration.component';
import { PassprintComponent } from './visitRegist/passprint/passprint.component';
import { PassReprintComponent } from './visitRegist/pass-reprint/pass-reprint.component';
import { DailyReportComponent } from './visitRegist/daily-report/daily-report.component';

@NgModule({
	declarations: [RegistrationComponent, PassprintComponent, PassReprintComponent, DailyReportComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
	],
	providers: []
})
export class PagesModule {
}
