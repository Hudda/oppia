// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Module for the contributor dashboard page.
 */

import 'core-js/es7/reflect';
import 'zone.js';

import 'angular-ui-sortable';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, StaticProvider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent } from '@angular/upgrade/static';
import { downgradeModule } from '@angular/upgrade/static';
import uiValidate from 'angular-ui-validate';
import ngInfiniteScroll from 'ng-infinite-scroll';
import 'third-party-imports/ui-tree.import';

angular.module('oppia', [
  require('angular-cookies'), 'headroom', 'ngAnimate', ngInfiniteScroll,
  'ngMaterial', 'ngSanitize', 'ngTouch', 'pascalprecht.translate',
  'toastr', 'ui.bootstrap', 'ui.sortable', 'ui.tree', uiValidate
]);

import { ContributorDashboardConstants } from
  'pages/contributor-dashboard-page/contributor-dashboard-page.constants';
import { RequestInterceptor } from 'services/request-interceptor.service';
import { SharedComponentsModule } from 'components/shared-component.module';
import { OppiaAngularRootComponent } from
  'components/oppia-angular-root.component';

import { AppConstants } from 'app.constants';

import { TranslationLanguageSelectorComponent } from
  './translation-language-selector/translation-language-selector.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  declarations: [
    OppiaAngularRootComponent,
    TranslationLanguageSelectorComponent
  ],
  entryComponents: [
    OppiaAngularRootComponent,
    TranslationLanguageSelectorComponent
  ],
  providers: [
    AppConstants,
    ContributorDashboardConstants,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
class ContributorDashboardPageModule {
  // Empty placeholder method to satisfy the `Compiler`.
  ngDoBootstrap() {}
}


const bootstrapFn = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(ContributorDashboardPageModule);
};
const downgradedModule = downgradeModule(bootstrapFn);

declare var angular: ng.IAngularStatic;

angular.module('oppia').requires.push(downgradedModule);

angular.module('oppia').directive(
  // This directive is the downgraded version of the Angular component to
  // bootstrap the Angular 8.
  'oppiaAngularRoot',
  downgradeComponent({
    component: OppiaAngularRootComponent
  }) as angular.IDirectiveFactory);
