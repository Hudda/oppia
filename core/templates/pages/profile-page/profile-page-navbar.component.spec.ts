// Copyright 2014 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for the profile page navbar component.
 */

import { ComponentFixture, TestBed, async } from
  '@angular/core/testing';

import { UrlService } from 'services/contextual/url.service';

import { ProfilePageNavbarComponent } from './profile-page-navbar.component';

class MockUrlService {
  getUsernameFromProfileUrl() {
    return 'username1';
  }
}

let component: ProfilePageNavbarComponent;
let fixture: ComponentFixture<ProfilePageNavbarComponent>;

describe('Profile Page Navbar Component', function() {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageNavbarComponent],
      providers: [
        { provide: UrlService, useClass: MockUrlService }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get username from profile url when component calls OnInit hook',
    () => {
      component.ngOnInit();
      expect(component.username).toBe('username1');
    });
});
