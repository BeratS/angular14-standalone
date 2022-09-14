import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { environment } from './environments/environment';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './app/core/interceptors/http-interceptor.service';
import { Ability, PureAbility } from '@casl/ability';
import AppInitialization from './app/utils/app-initialization';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateRootConfig } from './app/utils/translate.config';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      TranslateModule.forRoot(TranslateRootConfig),
    ]),
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitialization,
      multi: true,
      deps: [Router, HttpClient, Ability],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
  .catch(err => console.error(err));