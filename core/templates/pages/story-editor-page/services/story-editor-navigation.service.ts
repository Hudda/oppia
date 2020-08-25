// Copyright 2020 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Service to handle navigation in story editor page.
 */

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

import { WindowRef } from 'services/contextual/window-ref.service';

const STORY_EDITOR = 'story_editor';
const CHAPTER_EDITOR = 'chapter_editor';
const STORY_PREVIEW = 'story_preview';

@Injectable({
  providedIn: 'root'
})
export class StoryEditorNavigationService {
    activeTab: string = 'story_editor';
    chapterId: string = null;
    chapterIndex: number = null;
    constructor(private windowRef: WindowRef) {}

    getActiveTab(): string {
      return this.activeTab;
    }
    setChapterId(id: string): void {
      this.chapterId = id;
    }
    getChapterIndex(): number {
      return this.chapterIndex;
    }
    getChapterId(): string {
      return this.chapterId;
    }
    navigateToChapterEditorWithId(id: string, index: number): void {
      this.activeTab = CHAPTER_EDITOR;
      this.setChapterId(id);
      this.chapterIndex = index;
      this.windowRef.nativeWindow.location.hash = '/chapter_editor/' + id;
    }
    checkIfPresentInChapterEditor(): boolean {
      const chapterId = this.windowRef.nativeWindow.location.hash.split('/')[2];
      if (chapterId) {
        this.chapterId = chapterId;
        return true;
      }
      return false;
    }
    checkIfPresentInStoryPreviewTab(): boolean {
      return (
        this.windowRef.nativeWindow.location.hash.split('/')[1] ===
          'story_preview');
    }
    navigateToChapterEditor(): void {
      this.navigateToChapterEditorWithId(this.chapterId, null);
    }
    navigateToStoryEditor(): void {
      this.activeTab = STORY_EDITOR;
      this.windowRef.nativeWindow.location.hash = '';
    }
    navigateToStoryPreviewTab(): void {
      this.windowRef.nativeWindow.location.hash = '/story_preview/';
      this.activeTab = STORY_PREVIEW;
    }
}

angular.module('oppia').factory(
  'StoryEditorNavigationService',
  downgradeInjectable(StoryEditorNavigationService));
