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
 * @fileoverview Unit tests for the ExplorationStatsBackendApiService.
 */

import { HttpClientTestingModule, HttpTestingController } from
  '@angular/common/http/testing';
import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { ExplorationStatsBackendApiService } from
  'services/exploration-stats-backend-api.service';
import {
  ExplorationStats,
  ExplorationStatsObjectFactory,
  ExplorationStatsBackendDict
} from 'domain/statistics/ExplorationStatsObjectFactory';
import { StateStatsBackendDict } from
  'domain/statistics/StateStatsObjectFactory';

describe('Exploration stats backend api service', () => {
  let explorationStatsBackendApiService: ExplorationStatsBackendApiService;
  let explorationStatsObjectFactory: ExplorationStatsObjectFactory;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    explorationStatsBackendApiService = (
      TestBed.get(ExplorationStatsBackendApiService));
    explorationStatsObjectFactory = (
      TestBed.get(ExplorationStatsObjectFactory));
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should return an ExplorationStats domain object', fakeAsync(() => {
    let explorationStatsBackendDict: ExplorationStatsBackendDict = {
      exp_id: 'eid',
      exp_version: 1,
      num_starts: 0,
      num_actual_starts: 0,
      num_completions: 0,
      state_stats_mapping: {
        Introduction: (
          <StateStatsBackendDict>{
            total_answers_count: 0,
            useful_feedback_count: 0,
            total_hit_count: 0,
            first_hit_count: 0,
            num_completions: 0,
          }),
      },
    };
    let explorationStats: ExplorationStats = (
      explorationStatsObjectFactory.createFromBackendDict(
        explorationStatsBackendDict));

    let onSuccess = jasmine.createSpy('onSuccess', stats => {
      expect(stats).toEqual(explorationStats);
    });
    let onFailure = jasmine.createSpy('onFailure');

    explorationStatsBackendApiService.fetchExplorationStats('eid')
      .then(onSuccess, onFailure);

    let req = httpTestingController.expectOne('/createhandler/statistics/eid');
    expect(req.request.method).toEqual('GET');
    req.flush(explorationStatsBackendDict);
    flushMicrotasks();

    expect(onSuccess).toHaveBeenCalled();
    expect(onFailure).not.toHaveBeenCalled();
  }));
});
