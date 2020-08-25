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
 * @fileoverview Factory for creating instances of frontend
 * subtopic data domain objects.
 */

import { SubtopicBackendDict, Subtopic, SubtopicObjectFactory } from
  'domain/topic/SubtopicObjectFactory';
import {
  SubtopicPageContentsBackendDict,
  SubtopicPageContents,
  SubtopicPageContentsObjectFactory
} from 'domain/topic/SubtopicPageContentsObjectFactory';

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';


export interface SubtopicDataBackendDict {
  'subtopic_title': string;
  'page_contents': SubtopicPageContentsBackendDict;
  'next_subtopic_dict': SubtopicBackendDict | null,
  'topic_id': string,
  'topic_name': string
}

export class ReadOnlySubtopicPageData {
  parentTopicId: string;
  parentTopicName: string;
  subtopicTitle: string;
  pageContents: SubtopicPageContents;
  nextSubtopic: Subtopic | null;

  constructor(
      parentTopicId: string,
      parentTopicName: string,
      subtopicTitle: string,
      pageContents: SubtopicPageContents,
      nextSubtopic: Subtopic | null
  ) {
    this.parentTopicId = parentTopicId;
    this.parentTopicName = parentTopicName;
    this.subtopicTitle = subtopicTitle;
    this.pageContents = pageContents;
    this.nextSubtopic = nextSubtopic;
  }

  getParentTopicId(): string {
    return this.parentTopicId;
  }

  getParentTopicName(): string {
    return this.parentTopicName;
  }

  getSubtopicTitle(): string {
    return this.subtopicTitle;
  }

  getPageContents(): SubtopicPageContents {
    return this.pageContents;
  }

  getNextSubtopic(): Subtopic | null {
    return this.nextSubtopic;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReadOnlySubtopicPageObjectFactory {
  constructor(
    private subtopicPageContentsObjectFactory:
      SubtopicPageContentsObjectFactory,
    private subtopicObjectFactory: SubtopicObjectFactory
  ) {}

  createFromBackendDict(subtopicDataBackendDict: SubtopicDataBackendDict):
    ReadOnlySubtopicPageData {
    let nextSubtopic = subtopicDataBackendDict.next_subtopic_dict ? (
      this.subtopicObjectFactory
        .create(subtopicDataBackendDict.next_subtopic_dict, {})
    ) : null;

    return new ReadOnlySubtopicPageData(
      subtopicDataBackendDict.topic_id,
      subtopicDataBackendDict.topic_name,
      subtopicDataBackendDict.subtopic_title,
      this.subtopicPageContentsObjectFactory.createFromBackendDict(
        subtopicDataBackendDict.page_contents
      ),
      nextSubtopic
    );
  }
}

angular.module('oppia').factory(
  'ReadOnlySubtopicPageObjectFactory',
  downgradeInjectable(ReadOnlySubtopicPageObjectFactory));
