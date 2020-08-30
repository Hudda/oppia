// Copyright 2018 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Factory for creating and mutating instances of frontend
 * subtopic page domain objects.
 */

import {
  SubtopicPageContentsBackendDict,
  SubtopicPageContents,
  SubtopicPageContentsObjectFactory
} from 'domain/topic/SubtopicPageContentsObjectFactory';

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import cloneDeep from 'lodash/cloneDeep';


interface SubtopicPageBackendDict {
  'id': string;
  'topic_id': string;
  'page_contents': SubtopicPageContentsBackendDict;
  'language_code': string;
}

export class SubtopicPage {
  constructor(
    private id: string,
    private topicId: string,
    private pageContents: SubtopicPageContents,
    private languageCode: string) {}

  // Returns the id of the subtopic page.
  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  // Returns the topic id that the subtopic page is linked to.
  getTopicId(): string {
    return this.topicId;
  }

  // Returns the page data for the subtopic page.
  getPageContents(): SubtopicPageContents {
    return this.pageContents;
  }

  // Sets the page data for the subtopic page.
  setPageContents(pageContents: SubtopicPageContents): void {
    this.pageContents = cloneDeep(pageContents);
  }

  // Returns the language code for the subtopic page.
  getLanguageCode(): string {
    return this.languageCode;
  }

  copyFromSubtopicPage(otherSubtopicPage: SubtopicPage): void {
    this.id = otherSubtopicPage.getId();
    this.topicId = otherSubtopicPage.getTopicId();
    this.pageContents = cloneDeep(otherSubtopicPage.getPageContents());
    this.languageCode = otherSubtopicPage.getLanguageCode();
  }
}

@Injectable({
  providedIn: 'root'
})
export class SubtopicPageObjectFactory {
  constructor(
    private subtopicPageContentsObjectFactory:
      SubtopicPageContentsObjectFactory) {}

  createFromBackendDict(
      subtopicPageBackendDict: SubtopicPageBackendDict): SubtopicPage {
    return new SubtopicPage(
      subtopicPageBackendDict.id, subtopicPageBackendDict.topic_id,
      this.subtopicPageContentsObjectFactory.createFromBackendDict(
        subtopicPageBackendDict.page_contents),
      subtopicPageBackendDict.language_code
    );
  }

  private getSubtopicPageId(topicId: string, subtopicId: number): string {
    return topicId + '-' + subtopicId.toString();
  }

  createDefault(topicId: string, subtopicId: number): SubtopicPage {
    return new SubtopicPage(
      this.getSubtopicPageId(topicId, subtopicId),
      topicId, this.subtopicPageContentsObjectFactory.createDefault(),
      'en');
  }

  // Create an interstitial subtopic page that would be displayed in the
  // editor until the actual subtopic page is fetched from the backend.
  createInterstitialSubtopicPage(): SubtopicPage {
    return new SubtopicPage(null, null, null, 'en');
  }
}

angular.module('oppia').factory(
  'SubtopicPageObjectFactory', downgradeInjectable(SubtopicPageObjectFactory));
