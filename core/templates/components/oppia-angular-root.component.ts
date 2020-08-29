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
 * @fileoverview The root component for angular application.
 */

/**
 * This file contains a component that "informs" the oppia-root directive that
 * angular has finished loading. This also contains services that are written
 * in angular but have to be accessed in ajs code.
 *
 * To have a new angular service accesible in ajs do the following:
 *   - import the service here.
 *   - create a static variable with the name of the service class in camelCase.
 *   - inject the service by providing it as an argument in the constructor.
 *   - in the ngAfterViewInit assign the serivce to the static varible
 *
 * Example:
 *   Let us assume that the service class is called MyService.
 *   - First import the service.
 *     import { MyService } from './path';
 *   - Then we create a static variable with the name of the service class.
 *     static myService: MyService;
 *   - Then we add it to the constructor
 *     constructor(
 *      ...
 *      private myService: MyService
 *     ...) {}
 *   - Then we assign the serivce to the static varible in ngAfterViewInit
 *     ngAfterViewInit() {
 *       ...
 *       OppiaAngularRootComponent.myService = this.myService
 *       ...
 *     }
 *
 * In case the above explanation was not clear or in case of doubts over what
 * is done here, please look at the description of the PR #9479.
 * https://github.com/oppia/oppia/pull/9479#issue-432536289
 * You can also find this example there under the "How does it solve the
 * Interceptor problem?" heading.
 *
 * File Structure:
 *   1 - imports
 *   2 - component declaration
 *   3 - static declaration of service-variables
 *   4 - constructor having all the services injected
 *   5 - ngAfterViewInit function assigning the injected service to static class
 *       variables and emitting an event to inform that angular has finished
 *       loading
 */

/* eslint-disable max-len */
import { AdminBackendApiService } from
  'domain/admin/admin-backend-api.service';

import { ComputationDataObjectFactory } from
  'domain/admin/computation-data-object.factory';
import { JobDataObjectFactory } from
  'domain/admin/job-data-object.factory';
import { JobStatusSummaryObjectFactory } from
  'domain/admin/job-status-summary-object.factory';
import { AnswerClassificationResultObjectFactory } from
  'domain/classifier/AnswerClassificationResultObjectFactory';
import { ClassifierObjectFactory } from
  'domain/classifier/ClassifierObjectFactory';
import { PredictionResultObjectFactory } from
  'domain/classifier/PredictionResultObjectFactory';
import { ClassroomBackendApiService } from
  'domain/classroom/classroom-backend-api.service';
import { ClassroomDataObjectFactory } from
  'domain/classroom/ClassroomDataObjectFactory';
import { CollectionNodeObjectFactory } from
  'domain/collection/collection-node-object.factory';
import { CollectionRightsBackendApiService } from
  'domain/collection/collection-rights-backend-api.service';
import { CollectionSummaryObjectFactory } from
  'domain/collection/collection-summary-object.factory';
import { CollectionValidationService } from
  'domain/collection/collection-validation.service';
import { CollectionObjectFactory } from
  'domain/collection/CollectionObjectFactory';
import { CollectionPlaythroughObjectFactory } from
  'domain/collection/CollectionPlaythroughObjectFactory';
import { CollectionRightsObjectFactory } from
  'domain/collection/CollectionRightsObjectFactory';
import { EditableCollectionBackendApiService } from
  'domain/collection/editable-collection-backend-api.service';
import { GuestCollectionProgressService } from
  'domain/collection/guest-collection-progress.service';
import { GuestCollectionProgressObjectFactory } from
  'domain/collection/GuestCollectionProgressObjectFactory';
import { ReadOnlyCollectionBackendApiService } from
  'domain/collection/read-only-collection-backend-api.service';
import { SearchExplorationsBackendApiService } from
  'domain/collection/search-explorations-backend-api.service';
import { CreatorDashboardBackendApiService } from
  'domain/creator_dashboard/creator-dashboard-backend-api.service';
import { CreatorDashboardStatsObjectFactory } from
  'domain/creator_dashboard/creator-dashboard-stats-object.factory';
import { ChangeObjectFactory } from
  'domain/editor/undo_redo/ChangeObjectFactory';
import { EmailDashboardBackendApiService } from
  'domain/email-dashboard/email-dashboard-backend-api.service';
import { EmailDashboardQueryObjectFactory } from
  'domain/email-dashboard/email-dashboard-query-object.factory';
import { EmailDashboardQueryResultsObjectFactory } from
  'domain/email-dashboard/email-dashboard-query-results-object.factory';
import { AnswerGroupObjectFactory } from
  'domain/exploration/AnswerGroupObjectFactory';
import { AnswerStatsObjectFactory } from
  'domain/exploration/AnswerStatsObjectFactory';
import { ExplorationPermissionsBackendApiService } from
  'domain/exploration/exploration-permissions-backend-api.service';
import { ExplorationPermissionsObjectFactory } from
  'domain/exploration/exploration-permissions-object.factory';
import { ExplorationDraftObjectFactory } from
  'domain/exploration/ExplorationDraftObjectFactory';
import { ExplorationMetadataObjectFactory } from
  'domain/exploration/ExplorationMetadataObjectFactory';
import { ExplorationObjectFactory } from
  'domain/exploration/ExplorationObjectFactory';
import { HintObjectFactory } from 'domain/exploration/HintObjectFactory';
import { InteractionObjectFactory } from
  'domain/exploration/InteractionObjectFactory';
import { LostChangeObjectFactory } from
  'domain/exploration/LostChangeObjectFactory';
import { OutcomeObjectFactory } from 'domain/exploration/OutcomeObjectFactory';
import { ParamChangeObjectFactory } from
  'domain/exploration/ParamChangeObjectFactory';
import { ParamChangesObjectFactory } from
  'domain/exploration/ParamChangesObjectFactory';
import { ParamMetadataObjectFactory } from
  'domain/exploration/ParamMetadataObjectFactory';
import { ParamSpecObjectFactory } from
  'domain/exploration/ParamSpecObjectFactory';
import { ParamSpecsObjectFactory } from
  'domain/exploration/ParamSpecsObjectFactory';
import { ParamTypeObjectFactory } from
  'domain/exploration/ParamTypeObjectFactory';


import { RecordedVoiceoversObjectFactory } from
  'domain/exploration/RecordedVoiceoversObjectFactory';
import { RuleObjectFactory } from 'domain/exploration/RuleObjectFactory';
import { SolutionObjectFactory } from
  'domain/exploration/SolutionObjectFactory';
import { StateInteractionStatsBackendApiService } from
  'domain/exploration/state-interaction-stats-backend-api.service';
import { StatesObjectFactory } from 'domain/exploration/StatesObjectFactory';
import { StatsReportingBackendApiService } from
  'domain/exploration/stats-reporting-backend-api.service';
import { SubtitledHtmlObjectFactory } from
  'domain/exploration/SubtitledHtmlObjectFactory';
import { SubtitledUnicodeObjectFactory } from
  'domain/exploration/SubtitledUnicodeObjectFactory';
import { VisualizationInfoObjectFactory } from
  'domain/exploration/visualization-info-object.factory';
import { VoiceoverObjectFactory } from
  'domain/exploration/VoiceoverObjectFactory';
import { WrittenTranslationObjectFactory } from
  'domain/exploration/WrittenTranslationObjectFactory';
import { WrittenTranslationsObjectFactory } from
  'domain/exploration/WrittenTranslationsObjectFactory';
import { FeedbackMessageSummaryObjectFactory } from
  'domain/feedback_message/FeedbackMessageSummaryObjectFactory';
import { ThreadMessageObjectFactory } from
  'domain/feedback_message/ThreadMessageObjectFactory';
import { ThreadMessageSummaryObjectFactory } from
  'domain/feedback_message/ThreadMessageSummaryObjectFactory';
import { FeedbackThreadObjectFactory } from
  'domain/feedback_thread/FeedbackThreadObjectFactory';
import { FeedbackThreadSummaryObjectFactory } from
  'domain/feedback_thread/FeedbackThreadSummaryObjectFactory';
import { ExplorationImprovementsConfigObjectFactory } from
  'domain/improvements/exploration-improvements-config-object.factory';
import { ExplorationTaskObjectFactory } from
  'domain/improvements/ExplorationTaskObjectFactory';
import { HighBounceRateTaskObjectFactory } from
  'domain/improvements/HighBounceRateTaskObjectFactory';
import { IneffectiveFeedbackLoopTaskObjectFactory } from
  'domain/improvements/IneffectiveFeedbackLoopTaskObjectFactory';
import { NeedsGuidingResponsesTaskObjectFactory } from
  'domain/improvements/NeedsGuidingResponsesTaskObjectFactory';
import { SuccessiveIncorrectAnswersTaskObjectFactory } from
  'domain/improvements/SuccessiveIncorrectAnswersTaskObjectFactory';
import { LearnerDashboardBackendApiService } from
  'domain/learner_dashboard/learner-dashboard-backend-api.service';
import { LearnerDashboardIdsBackendApiService } from
  'domain/learner_dashboard/learner-dashboard-ids-backend-api.service';
import { LearnerDashboardActivityIdsObjectFactory } from
  'domain/learner_dashboard/LearnerDashboardActivityIdsObjectFactory';
import { NonExistentActivitiesObjectFactory } from
  'domain/learner_dashboard/non-existent-activities-object.factory';
import { FractionObjectFactory } from 'domain/objects/FractionObjectFactory';
import { NumberWithUnitsObjectFactory } from
  'domain/objects/NumberWithUnitsObjectFactory';
import { RatioObjectFactory } from 'domain/objects/RatioObjectFactory';
import { UnitsObjectFactory } from 'domain/objects/UnitsObjectFactory';
import { ExplorationOpportunitySummaryObjectFactory } from
  'domain/opportunity/ExplorationOpportunitySummaryObjectFactory';
import { FeaturedTranslationLanguageObjectFactory } from
  'domain/opportunity/FeaturedTranslationLanguageObjectFactory';
import { SkillOpportunityObjectFactory } from
  'domain/opportunity/SkillOpportunityObjectFactory';
import { ClientContextObjectFactory } from
  'domain/platform_feature/client-context-object.factory';
import { FeatureStatusSummaryObjectFactory } from
  'domain/platform_feature/feature-status-summary-object.factory';
import { PlatformParameterFilterObjectFactory } from
  'domain/platform_feature/platform-parameter-filter-object.factory';
import { PlatformParameterObjectFactory } from
  'domain/platform_feature/platform-parameter-object.factory';
import { PlatformParameterRuleObjectFactory } from
  'domain/platform_feature/platform-parameter-rule-object.factory';
import { PretestQuestionBackendApiService } from
  'domain/question/pretest-question-backend-api.service';
import { QuestionBackendApiService } from
  'domain/question/question-backend-api.service.ts';
import { QuestionSummaryForOneSkillObjectFactory }
  from 'domain/question/QuestionSummaryForOneSkillObjectFactory';
import { QuestionSummaryObjectFactory } from
  'domain/question/QuestionSummaryObjectFactory';
import { ExplorationRecommendationsBackendApiService } from
  'domain/recommendations/exploration-recommendations-backend-api.service';
import { ReviewTestBackendApiService } from
  'domain/review_test/review-test-backend-api.service';
import { ReviewTestObjectFactory } from
  'domain/review_test/review-test-object.factory';
import { SidebarStatusService } from 'domain/sidebar/sidebar-status.service';
import { AssignedSkillObjectFactory } from
  'domain/skill/assigned-skill-object.factory';
import { AugmentedSkillSummaryObjectFactory } from
  'domain/skill/augmented-skill-summary-object.factory';
import { ConceptCardObjectFactory } from
  'domain/skill/ConceptCardObjectFactory';
import { MisconceptionObjectFactory } from
  'domain/skill/MisconceptionObjectFactory';
import { RubricObjectFactory } from
  'domain/skill/RubricObjectFactory';
import { ShortSkillSummaryObjectFactory } from
  'domain/skill/ShortSkillSummaryObjectFactory';
import { SkillCreationBackendApiService } from
  'domain/skill/skill-creation-backend-api.service';
import { SkillMasteryBackendApiService } from
  'domain/skill/skill-mastery-backend-api.service';
import { SkillRightsBackendApiService} from
  'domain/skill/skill-rights-backend-api.service.ts';
import { SkillSummaryObjectFactory } from
  'domain/skill/skill-summary-object.factory';
import { SkillDifficultyObjectFactory } from
  'domain/skill/SkillDifficultyObjectFactory';
import { SkillMasteryObjectFactory } from
  'domain/skill/SkillMasteryObjectFactory';
import { SkillObjectFactory } from 'domain/skill/SkillObjectFactory';
import { SkillRightsObjectFactory } from
  'domain/skill/SkillRightsObjectFactory';
import { WorkedExampleObjectFactory } from
  'domain/skill/WorkedExampleObjectFactory';
import { StateObjectFactory } from 'domain/state/StateObjectFactory';
import { StateCardObjectFactory } from
  'domain/state_card/StateCardObjectFactory';
import { ExplorationStatsObjectFactory } from
  'domain/statistics/ExplorationStatsObjectFactory';
import { LearnerAnswerDetailsBackendApiService } from
  'domain/statistics/learner-answer-details-backend-api.service';
import { LearnerActionObjectFactory } from
  'domain/statistics/LearnerActionObjectFactory';
import { LearnerAnswerDetailsObjectFactory } from
  'domain/statistics/LearnerAnswerDetailsObjectFactory';
import { LearnerAnswerInfoObjectFactory } from
  'domain/statistics/LearnerAnswerInfoObjectFactory';
import { PlaythroughBackendApiService } from
  'domain/statistics/playthrough-backend-api.service';
import { PlaythroughIssueObjectFactory } from
  'domain/statistics/PlaythroughIssueObjectFactory';
import { PlaythroughObjectFactory } from
  'domain/statistics/PlaythroughObjectFactory';
import { StateTopAnswersStatsObjectFactory } from
  'domain/statistics/state-top-answers-stats-object.factory';
import { StateStatsObjectFactory } from
  'domain/statistics/StateStatsObjectFactory';
import { StoryContentsObjectFactory } from
  'domain/story/StoryContentsObjectFactory';
import { StoryNodeObjectFactory } from
  'domain/story/StoryNodeObjectFactory';
import { StoryObjectFactory } from 'domain/story/StoryObjectFactory';
import { StorySummaryObjectFactory } from
  'domain/story/StorySummaryObjectFactory';
import { ReadOnlyStoryNodeObjectFactory } from
  'domain/story_viewer/ReadOnlyStoryNodeObjectFactory';
import { StoryViewerBackendApiService } from
  'domain/story_viewer/story-viewer-backend-api.service';
import { StoryPlaythroughObjectFactory } from
  'domain/story_viewer/StoryPlaythroughObjectFactory';
import { ReadOnlySubtopicPageObjectFactory } from
  'domain/subtopic_viewer/ReadOnlySubtopicPageObjectFactory';
import { SubtopicViewerBackendApiService } from
  'domain/subtopic_viewer/subtopic-viewer-backend-api.service';
import { SuggestionObjectFactory } from
  'domain/suggestion/SuggestionObjectFactory';
import { SuggestionThreadObjectFactory } from
  'domain/suggestion/SuggestionThreadObjectFactory';
import { CreatorExplorationSummaryObjectFactory } from
  'domain/summary/creator-exploration-summary-object.factory';
import { LearnerExplorationSummaryObjectFactory } from
  'domain/summary/learner-exploration-summary-object.factory';
import { NewlyCreatedStoryObjectFactory } from
  'domain/topic/NewlyCreatedStoryObjectFactory';
import { StoryReferenceObjectFactory } from
  'domain/topic/StoryReferenceObjectFactory';
import { SubtopicObjectFactory } from 'domain/topic/SubtopicObjectFactory';
import { SubtopicPageContentsObjectFactory } from
  'domain/topic/SubtopicPageContentsObjectFactory';
import { SubtopicPageObjectFactory } from
  'domain/topic/SubtopicPageObjectFactory';
import { TopicCreationBackendApiService } from
  'domain/topic/topic-creation-backend-api.service.ts';
import { TopicObjectFactory } from 'domain/topic/TopicObjectFactory';
import { TopicRightsObjectFactory } from
  'domain/topic/TopicRightsObjectFactory';
import { TopicSummaryObjectFactory } from
  'domain/topic/TopicSummaryObjectFactory';
import { ReadOnlyTopicObjectFactory } from
  'domain/topic_viewer/read-only-topic-object.factory';
import { TopicViewerBackendApiService } from
  'domain/topic_viewer/topic-viewer-backend-api.service';
import { NewlyCreatedTopicObjectFactory } from
  'domain/topics_and_skills_dashboard/NewlyCreatedTopicObjectFactory';
import { TopicsAndSkillsDashboardBackendApiService } from
  // eslint-disable-next-line max-len
  'domain/topics_and_skills_dashboard/topics-and-skills-dashboard-backend-api.service';
import { TopicsAndSkillsDashboardFilterObjectFactory } from
  // eslint-disable-next-line max-len
  'domain/topics_and_skills_dashboard/TopicsAndSkillsDashboardFilterObjectFactory';
import { ProfileSummaryObjectFactory } from
  'domain/user/profile-summary-object.factory';
import { UserProfileObjectFactory } from
  'domain/user/user-profile-object.factory';
import { UserInfoObjectFactory } from 'domain/user/UserInfoObjectFactory';
import { AudioFileObjectFactory } from
  'domain/utilities/AudioFileObjectFactory';
import { AudioLanguageObjectFactory } from
  'domain/utilities/AudioLanguageObjectFactory';
import { AutogeneratedAudioLanguageObjectFactory } from
  'domain/utilities/AutogeneratedAudioLanguageObjectFactory';
import { BrowserCheckerService } from
  'domain/utilities/browser-checker.service';

import { EntityContextObjectFactory } from
  'domain/utilities/EntityContextObjectFactory';

import { FileDownloadRequestObjectFactory } from
  'domain/utilities/FileDownloadRequestObjectFactory';

import { ImageFileObjectFactory } from
  'domain/utilities/ImageFileObjectFactory';

import { LanguageUtilService } from 'domain/utilities/language-util.service';
import { StopwatchObjectFactory } from
  'domain/utilities/StopwatchObjectFactory';

import { UrlInterpolationService } from
  'domain/utilities/url-interpolation.service';

import { Component, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { CountVectorizerService } from 'classifiers/count-vectorizer.service';
import { PythonProgramTokenizer } from 'classifiers/python-program.tokenizer';
import { SVMPredictionService } from 'classifiers/svm-prediction.service';
import { TextInputTokenizer } from 'classifiers/text-input.tokenizer';
import { WinnowingPreprocessingService } from
  'classifiers/winnowing-preprocessing.service';
import { CkEditorCopyContentService } from
  'components/ck-editor-helpers/ck-editor-copy-content-service.ts';
import { CollectionCreationBackendService } from
  'components/entity-creation-services/collection-creation-backend-api.service';
import { CollectionCreationService } from
  'components/entity-creation-services/collection-creation.service';
import { StateGraphLayoutService } from
  'components/graph-services/graph-layout.service';
import { ProfileLinkImageBackendApiService } from
  'components/profile-link-directives/profile-link-image-backend-api.service';
import { RatingComputationService } from
  'components/ratings/rating-computation/rating-computation.service';
import { StateContentService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-content.service';
import { StateCustomizationArgsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-customization-args.service';
import { StateEditorService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-editor.service';
import { StateHintsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-hints.service';
import { StateInteractionIdService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-interaction-id.service';
import { StateNameService } from
  'components/state-editor/state-editor-properties-services/state-name.service';
import { StateNextContentIdIndexService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-next-content-id-index.service';
import { StateParamChangesService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-param-changes.service';
import { StateRecordedVoiceoversService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-recorded-voiceovers.service';
import { StateSolicitAnswerDetailsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-solicit-answer-details.service';
import { StateSolutionService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-solution.service';
import { StateWrittenTranslationsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-written-translations.service';
import { ExpressionParserService } from 'expressions/expression-parser.service';
import { ExpressionSyntaxTreeService } from
  'expressions/expression-syntax-tree.service';
import { FormatTimePipe } from 'filters/format-timer.pipe';
import { CamelCaseToHyphensPipe } from
  'filters/string-utility-filters/camel-case-to-hyphens.pipe';
import { NormalizeWhitespacePunctuationAndCasePipe } from
  // eslint-disable-next-line max-len
  'filters/string-utility-filters/normalize-whitespace-punctuation-and-case.pipe';
import { NormalizeWhitespacePipe } from
  'filters/string-utility-filters/normalize-whitespace.pipe';
import { AlgebraicExpressionInputRulesService } from
  // eslint-disable-next-line max-len
  'interactions/AlgebraicExpressionInput/directives/algebraic-expression-input-rules.service';
import { AlgebraicExpressionInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/AlgebraicExpressionInput/directives/algebraic-expression-input-validation.service';
import { baseInteractionValidationService } from
  'interactions/base-interaction-validation.service';
import { CodeReplPredictionService } from
  'interactions/CodeRepl/code-repl-prediction.service';
import { CodeReplRulesService } from
  'interactions/CodeRepl/directives/code-repl-rules.service';
import { CodeReplValidationService } from
  'interactions/CodeRepl/directives/code-repl-validation.service';
import { ContinueRulesService } from
  'interactions/Continue/directives/continue-rules.service';
import { ContinueValidationService } from
  'interactions/Continue/directives/continue-validation.service';
import { DragAndDropSortInputRulesService } from
  // eslint-disable-next-line max-len
  'interactions/DragAndDropSortInput/directives/drag-and-drop-sort-input-rules.service';
import { DragAndDropSortInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/DragAndDropSortInput/directives/drag-and-drop-sort-input-validation.service';
import { EndExplorationRulesService } from
  'interactions/EndExploration/directives/end-exploration-rules.service';
import { EndExplorationValidationService } from
  'interactions/EndExploration/directives/end-exploration-validation.service';
import { FractionInputRulesService } from
  'interactions/FractionInput/directives/fraction-input-rules.service';
import { FractionInputValidationService } from
  'interactions/FractionInput/directives/fraction-input-validation.service';
import { GraphDetailService } from
  'interactions/GraphInput/directives/graph-detail.service';
import { GraphInputRulesService } from
  'interactions/GraphInput/directives/graph-input-rules.service';
import { GraphInputValidationService } from
  'interactions/GraphInput/directives/graph-input-validation.service';
import { GraphUtilsService } from
  'interactions/GraphInput/directives/graph-utils.service';
import { ImageClickInputRulesService } from
  'interactions/ImageClickInput/directives/image-click-input-rules.service';
import { ImageClickInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/ImageClickInput/directives/image-click-input-validation.service';
import { InteractionAttributesExtractorService } from
  'interactions/interaction-attributes-extractor.service';
import { InteractiveMapRulesService } from
  'interactions/InteractiveMap/directives/interactive-map-rules.service';
import { InteractiveMapValidationService } from
  'interactions/InteractiveMap/directives/interactive-map-validation.service';
import { ItemSelectionInputRulesService } from
  // eslint-disable-next-line max-len
  'interactions/ItemSelectionInput/directives/item-selection-input-rules.service';
import { ItemSelectionInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/ItemSelectionInput/directives/item-selection-input-validation.service';
import { LogicProofRulesService } from
  'interactions/LogicProof/directives/logic-proof-rules.service';
import { LogicProofValidationService } from
  'interactions/LogicProof/directives/logic-proof-validation.service';
import { MathEquationInputRulesService } from
  // eslint-disable-next-line max-len
  'interactions/MathEquationInput/directives/math-equation-input-rules.service';
import { MathEquationInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/MathEquationInput/directives/math-equation-input-validation.service';
import { MultipleChoiceInputRulesService } from
  // eslint-disable-next-line max-len
  'interactions/MultipleChoiceInput/directives/multiple-choice-input-rules.service';
import { MultipleChoiceInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/MultipleChoiceInput/directives/multiple-choice-input-validation.service';
import { MusicNotesInputRulesService } from
  'interactions/MusicNotesInput/directives/music-notes-input-rules.service';
import { MusicNotesInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/MusicNotesInput/directives/music-notes-input-validation.service';
import { MusicPhrasePlayerService } from
  // eslint-disable-next-line max-len
  'interactions/MusicNotesInput/directives/music-phrase-player.service';
import { NumberWithUnitsRulesService } from
  'interactions/NumberWithUnits/directives/number-with-units-rules.service';
import { NumberWithUnitsValidationService } from
  // eslint-disable-next-line max-len
  'interactions/NumberWithUnits/directives/number-with-units-validation.service.ts';
import { NumericExpressionInputRulesService } from
  // eslint-disable-next-line max-len
  'interactions/NumericExpressionInput/directives/numeric-expression-input-rules.service';
import { NumericExpressionInputValidationService } from
  // eslint-disable-next-line max-len
  'interactions/NumericExpressionInput/directives/numeric-expression-input-validation.service';
import { NumericInputRulesService } from
  'interactions/NumericInput/directives/numeric-input-rules.service';
import { NumericInputValidationService } from
  'interactions/NumericInput/directives/numeric-input-validation.service';
import { PencilCodeEditorRulesService } from
  'interactions/PencilCodeEditor/directives/pencil-code-editor-rules.service';
import { PencilCodeEditorValidationService } from
  'interactions/PencilCodeEditor/directives/pencil-code-editor-validation.service';
import { RatioExpressionInputRulesService } from
  'interactions/RatioExpressionInput/directives/ratio-expression-input-rules.service';
import { RatioExpressionInputValidationService } from
  'interactions/RatioExpressionInput/directives/ratio-expression-input-validation.service';
import { SetInputRulesService } from
  'interactions/SetInput/directives/set-input-rules.service';
import { SetInputValidationService } from
  'interactions/SetInput/directives/set-input-validation.service';
import { TextInputRulesService } from
  'interactions/TextInput/directives/text-input-rules.service';
import { TextInputValidationService } from
  'interactions/TextInput/directives/text-input-validation.service';
import { TextInputPredictionService } from
  'interactions/TextInput/text-input-prediction.service';
import { AdminDataService } from
  'pages/admin-page/services/admin-data.service';
import { AdminRouterService } from
  'pages/admin-page/services/admin-router.service.ts';
import { AdminTaskManagerService } from
  'pages/admin-page/services/admin-task-manager.service';
import { ContributionOpportunitiesBackendApiService } from
  // eslint-disable-next-line max-len
  'pages/contributor-dashboard-page/services/contribution-opportunities-backend-api.service';
import { EmailDashboardDataService } from
  'pages/email-dashboard-pages/email-dashboard-data.service';
import { AnswerGroupsCacheService } from
  // eslint-disable-next-line max-len
  'pages/exploration-editor-page/editor-tab/services/answer-groups-cache.service';
import { InteractionDetailsCacheService } from
  // eslint-disable-next-line max-len
  'pages/exploration-editor-page/editor-tab/services/interaction-details-cache.service';
import { SolutionValidityService } from
  'pages/exploration-editor-page/editor-tab/services/solution-validity.service';
import { ThreadStatusDisplayService } from
  // eslint-disable-next-line max-len
  'pages/exploration-editor-page/feedback-tab/services/thread-status-display.service';
import { VersionTreeService } from
  'pages/exploration-editor-page/history-tab/services/version-tree.service';
import { AngularNameService } from
  'pages/exploration-editor-page/services/angular-name.service';
import { EditorFirstTimeEventsService } from
  'pages/exploration-editor-page/services/editor-first-time-events.service';
import { ExplorationDiffService } from
  'pages/exploration-editor-page/services/exploration-diff.service';
import { StateEditorRefreshService } from
  'pages/exploration-editor-page/services/state-editor-refresh.service';
import { UserExplorationPermissionsService } from
  'pages/exploration-editor-page/services/user-exploration-permissions.service';
import { AnswerClassificationService } from
  'pages/exploration-player-page/services/answer-classification.service';
import { AudioTranslationLanguageService } from
  'pages/exploration-player-page/services/audio-translation-language.service';
import { AudioTranslationManagerService } from
  'pages/exploration-player-page/services/audio-translation-manager.service';
import { CurrentInteractionService } from
  'pages/exploration-player-page/services/current-interaction.service';
import { ExplorationRecommendationsService } from
  'pages/exploration-player-page/services/exploration-recommendations.service';
import { ExtractImageFilenamesFromStateService } from
  // eslint-disable-next-line max-len
  'pages/exploration-player-page/services/extract-image-filenames-from-state.service';
import { LearnerParamsService } from
  'pages/exploration-player-page/services/learner-params.service';
import { NumberAttemptsService } from
  'pages/exploration-player-page/services/number-attempts.service';
import { PlayerCorrectnessFeedbackEnabledService } from
  'pages/exploration-player-page/services/player-correctness-feedback-enabled.service';
import { PlayerPositionService } from
  'pages/exploration-player-page/services/player-position.service';
import { PlayerTranscriptService } from
  'pages/exploration-player-page/services/player-transcript.service';
import { PredictionAlgorithmRegistryService } from
  'pages/exploration-player-page/services/prediction-algorithm-registry.service';
import { StateClassifierMappingService } from
  'pages/exploration-player-page/services/state-classifier-mapping.service';
import { StatsReportingService } from
  'pages/exploration-player-page/services/stats-reporting.service';
import { ProfilePageBackendApiService } from
  'pages/profile-page/profile-page-backend-api.service';
import { ReviewTestEngineService } from
  'pages/review-test-page/review-test-engine.service.ts';
import { StoryEditorNavigationService } from
  'pages/story-editor-page/services/story-editor-navigation.service';
import { TopicsAndSkillsDashboardPageService } from
  // eslint-disable-next-line max-len
  'pages/topics-and-skills-dashboard-page/topics-and-skills-dashboard-page.service';
import { AlertsService } from 'services/alerts.service';
import { AppService } from 'services/app.service';
import { AudioBarStatusService } from 'services/audio-bar-status.service';
import { AutogeneratedAudioPlayerService } from
  'services/autogenerated-audio-player.service';
import { AutoplayedVideosService } from 'services/autoplayed-videos.service';
import { BottomNavbarStatusService } from
  'services/bottom-navbar-status.service';




import { CodeNormalizerService } from 'services/code-normalizer.service';


import { ComputeGraphService } from 'services/compute-graph.service';


import { ConstructTranslationIdsService } from
  'services/construct-translation-ids.service';
import { ContextService } from 'services/context.service';


import { DeviceInfoService } from 'services/contextual/device-info.service';
import { DocumentAttributeCustomizationService } from
  'services/contextual/document-attribute-customization.service';
import { LoggerService } from 'services/contextual/logger.service';
import { MetaTagCustomizationService } from
  'services/contextual/meta-tag-customization.service';
import { UrlService } from 'services/contextual/url.service';
import { WindowDimensionsService } from
  'services/contextual/window-dimensions.service';
import { WindowRef } from 'services/contextual/window-ref.service';
import { CsrfTokenService } from 'services/csrf-token.service';
import { DateTimeFormatService } from 'services/date-time-format.service';
import { DebouncerService } from 'services/debouncer.service';


import { EditabilityService } from 'services/editability.service';






import { ExplorationFeaturesBackendApiService } from
  'services/exploration-features-backend-api.service';
import { ExplorationFeaturesService } from
  'services/exploration-features.service';
import { ExplorationHtmlFormatterService } from
  'services/exploration-html-formatter.service';


import { ExplorationImprovementsBackendApiService } from
  'services/exploration-improvements-backend-api.service';


import { ExplorationImprovementsTaskRegistryService } from
  'services/exploration-improvements-task-registry.service';


import { ExplorationStatsBackendApiService } from
  'services/exploration-stats-backend-api.service';


import { ExplorationStatsService } from 'services/exploration-stats.service';


import { ExtensionTagAssemblerService } from
  'services/extension-tag-assembler.service';
import { ExternalSaveService } from 'services/external-save.service.ts';




import { GenerateContentIdService } from 'services/generate-content-id.service';


import { GuppyConfigurationService } from
  // eslint-disable-next-line max-len
  'services/guppy-configuration.service';
import { GuppyInitializationService } from
  // eslint-disable-next-line max-len
  'services/guppy-initialization.service';


import { HtmlEscaperService } from 'services/html-escaper.service';
import { I18nLanguageCodeService } from 'services/i18n-language-code.service';
import { IdGenerationService } from 'services/id-generation.service';


import { ImprovementsService } from 'services/improvements.service';




import { InteractionRulesRegistryService } from
  'services/interaction-rules-registry.service';
import { InteractionSpecsService } from 'services/interaction-specs.service';


import { KeyboardShortcutService } from
  'services/keyboard-shortcut.service';


import { LoaderService } from 'services/loader.service';
import { LocalStorageService } from 'services/local-storage.service';


import { MathInteractionsService } from 'services/math-interactions.service';
import { MessengerService } from 'services/messenger.service';








import { PageTitleService } from 'services/page-title.service';






import { PlaythroughIssuesBackendApiService } from
  'services/playthrough-issues-backend-api.service';


import { PlaythroughService } from 'services/playthrough.service';










import { SchemaDefaultValueService } from
  'services/schema-default-value.service';
import { SchemaFormSubmittedService } from
  'services/schema-form-submitted.service';
import { SchemaUndefinedLastElementService } from
  'services/schema-undefined-last-element.service';




import { SiteAnalyticsService } from 'services/site-analytics.service';


import { SpeechSynthesisChunkerService } from
  'services/speech-synthesis-chunker.service';




import { StateInteractionStatsService } from
  'services/state-interaction-stats.service';




import { StateTopAnswersStatsBackendApiService } from
  'services/state-top-answers-stats-backend-api.service';


import { StateTopAnswersStatsService } from
  'services/state-top-answers-stats.service';






import { BackgroundMaskService } from
  'services/stateful/background-mask.service';
import { SuggestionModalService } from 'services/suggestion-modal.service';


import { SuggestionsService } from 'services/suggestions.service';








import { TranslateService } from 'services/translate.service';
import { UtilsService } from 'services/utils.service';
import { ValidatorsService } from 'services/validators.service';





@Component({
  selector: 'oppia-angular-root',
  template: ''
})
export class OppiaAngularRootComponent implements AfterViewInit {
  @Output()
    public initialized: EventEmitter<void> = new EventEmitter();

  static adminBackendApiService: AdminBackendApiService;
  static adminDataService: AdminDataService;
  static adminRouterService: AdminRouterService;
  static adminTaskManagerService: AdminTaskManagerService;
  static alertsService: AlertsService;
  static algebraicExpressionInputRulesService: AlgebraicExpressionInputRulesService;
  static algebraicExpressionInputValidationService: AlgebraicExpressionInputValidationService;
  static angularNameService: AngularNameService;
  static answerClassificationResultObjectFactory: AnswerClassificationResultObjectFactory;
  static answerClassificationService: AnswerClassificationService;
  static answerGroupsCacheService: AnswerGroupsCacheService;
  static answerGroupObjectFactory: AnswerGroupObjectFactory;
  static answerStatsObjectFactory: AnswerStatsObjectFactory;
  static appService: AppService;
  static assignedSkillObjectFactory: AssignedSkillObjectFactory;
  static audioBarStatusService: AudioBarStatusService;
  static audioFileObjectFactory: AudioFileObjectFactory;
  static audioLanguageObjectFactory: AudioLanguageObjectFactory;
  static audioTranslationLanguageService: AudioTranslationLanguageService;
  static audioTranslationManagerService: AudioTranslationManagerService;
  static augmentedSkillSummaryObjectFactory: AugmentedSkillSummaryObjectFactory;
  static autogeneratedAudioLanguageObjectFactory: AutogeneratedAudioLanguageObjectFactory;
  static autogeneratedAudioPlayerService: AutogeneratedAudioPlayerService;
  static autoplayedVideosService: AutoplayedVideosService;
  static backgroundMaskService: BackgroundMaskService;
  static baseInteractionValidationService: baseInteractionValidationService;
  static bottomNavbarStatusService: BottomNavbarStatusService;
  static browserCheckerService: BrowserCheckerService;
  static camelCaseToHyphensPipe: CamelCaseToHyphensPipe;
  static changeObjectFactory: ChangeObjectFactory;
  static ckEditorCopyContentService: CkEditorCopyContentService;
  static classifierObjectFactory: ClassifierObjectFactory;
  static classroomBackendApiService: ClassroomBackendApiService;
  static classroomDataObjectFactory: ClassroomDataObjectFactory;
  static clientContextObjectFactory: ClientContextObjectFactory;
  static codeNormalizerService: CodeNormalizerService;
  static codeReplPredictionService: CodeReplPredictionService;
  static codeReplRulesService: CodeReplRulesService;
  static codeReplValidationService: CodeReplValidationService;
  static collectionCreationBackendService: CollectionCreationBackendService;
  static collectionCreationService: CollectionCreationService;
  static collectionNodeObjectFactory: CollectionNodeObjectFactory;
  static collectionObjectFactory: CollectionObjectFactory;
  static collectionPlaythroughObjectFactory: CollectionPlaythroughObjectFactory;
  static collectionRightsBackendApiService: CollectionRightsBackendApiService;
  static collectionRightsObjectFactory: CollectionRightsObjectFactory;
  static collectionSummaryObjectFactory: CollectionSummaryObjectFactory;
  static collectionValidationService: CollectionValidationService;
  static computationDataObjectFactory: ComputationDataObjectFactory;
  static computeGraphService: ComputeGraphService;
  static conceptCardObjectFactory: ConceptCardObjectFactory;
  static contextService: ContextService;
  static continueRulesService: ContinueRulesService;
  static continueValidationService: ContinueValidationService;
  static contributionOpportunitiesBackendApiService: ContributionOpportunitiesBackendApiService;
  static constructTranslationIdsService: ConstructTranslationIdsService;
  static countVectorizerService: CountVectorizerService;
  static creatorDashboardBackendApiService: CreatorDashboardBackendApiService;
  static creatorDashboardStatsObjectFactory: CreatorDashboardStatsObjectFactory;
  static creatorExplorationSummaryObjectFactory: CreatorExplorationSummaryObjectFactory;
  static csrfTokenService: CsrfTokenService;
  static currentInteractionService: CurrentInteractionService;
  static dateTimeFormatService: DateTimeFormatService;
  static debouncerService: DebouncerService;
  static deviceInfoService: DeviceInfoService;
  static documentAttributeCustomizationService: DocumentAttributeCustomizationService;
  static dragAndDropSortInputRulesService: DragAndDropSortInputRulesService;
  static dragAndDropSortInputValidationService: DragAndDropSortInputValidationService;
  static editableCollectionBackendApiService: EditableCollectionBackendApiService;
  static editabilityService: EditabilityService;
  static editorFirstTimeEventsService: EditorFirstTimeEventsService;
  static emailDashboardBackendApiService: EmailDashboardBackendApiService;
  static emailDashboardDataService: EmailDashboardDataService;
  static emailDashboardQueryObjectFactory: EmailDashboardQueryObjectFactory;
  static emailDashboardQueryResultsObjectFactory: EmailDashboardQueryResultsObjectFactory;
  static endExplorationRulesService: EndExplorationRulesService;
  static endExplorationValidationService: EndExplorationValidationService;
  static entityContextObjectFactory: EntityContextObjectFactory;
  static explorationDiffService: ExplorationDiffService;
  static explorationDraftObjectFactory: ExplorationDraftObjectFactory;
  static explorationFeaturesBackendApiService: ExplorationFeaturesBackendApiService;
  static explorationFeaturesService: ExplorationFeaturesService;
  static explorationHtmlFormatterService: ExplorationHtmlFormatterService;
  static explorationImprovementsBackendApiService: ExplorationImprovementsBackendApiService;
  static explorationImprovementsConfigObjectFactory: ExplorationImprovementsConfigObjectFactory;
  static explorationImprovementsTaskRegistryService: ExplorationImprovementsTaskRegistryService;
  static explorationMetadataObjectFactory: ExplorationMetadataObjectFactory;
  static explorationObjectFactory: ExplorationObjectFactory;
  static explorationOpportunitySummaryObjectFactory: ExplorationOpportunitySummaryObjectFactory;
  static expressionParserService: ExpressionParserService;
  static explorationPermissionsBackendApiService: ExplorationPermissionsBackendApiService;
  static explorationPermissionsObjectFactory: ExplorationPermissionsObjectFactory;
  static explorationRecommendationsBackendApiService: ExplorationRecommendationsBackendApiService;
  static explorationRecommendationsService: ExplorationRecommendationsService;
  static explorationStatsBackendApiService: ExplorationStatsBackendApiService;
  static explorationStatsObjectFactory: ExplorationStatsObjectFactory;
  static explorationStatsService: ExplorationStatsService;
  static explorationTaskObjectFactory: ExplorationTaskObjectFactory;
  static expressionSyntaxTreeService: ExpressionSyntaxTreeService;
  static extensionTagAssemblerService: ExtensionTagAssemblerService;
  static externalSaveService: ExternalSaveService;
  static extractImageFilenamesFromStateService: ExtractImageFilenamesFromStateService;
  static featuredTranslationLanguageObjectFactory: FeaturedTranslationLanguageObjectFactory;
  static featureStatusSummaryObjectFactory: FeatureStatusSummaryObjectFactory;
  static feedbackMessageSummaryObjectFactory: FeedbackMessageSummaryObjectFactory;
  static feedbackThreadObjectFactory: FeedbackThreadObjectFactory;
  static feedbackThreadSummaryObjectFactory: FeedbackThreadSummaryObjectFactory;
  static fileDownloadRequestObjectFactory: FileDownloadRequestObjectFactory;
  static formatTimePipe: FormatTimePipe;
  static fractionInputRulesService: FractionInputRulesService;
  static fractionInputValidationService: FractionInputValidationService;
  static fractionObjectFactory: FractionObjectFactory;
  static generateContentIdService: GenerateContentIdService;
  static graphDetailService: GraphDetailService;
  static graphInputRulesService: GraphInputRulesService;
  static graphInputValidationService: GraphInputValidationService;
  static graphUtilsService: GraphUtilsService;
  static guestCollectionProgressObjectFactory: GuestCollectionProgressObjectFactory;
  static guestCollectionProgressService: GuestCollectionProgressService;
  static guppyConfigurationService: GuppyConfigurationService;
  static guppyInitializationService: GuppyInitializationService;
  static highBounceRateTaskObjectFactory: HighBounceRateTaskObjectFactory;
  static hintObjectFactory: HintObjectFactory;
  static htmlEscaperService: HtmlEscaperService;
  static i18nLanguageCodeService: I18nLanguageCodeService;
  static idGenerationService: IdGenerationService;
  static imageClickInputRulesService: ImageClickInputRulesService;
  static imageClickInputValidationService: ImageClickInputValidationService;
  static imageFileObjectFactory: ImageFileObjectFactory;
  static improvementsService: ImprovementsService;
  static ineffectiveFeedbackLoopTaskObjectFactory: IneffectiveFeedbackLoopTaskObjectFactory;
  static interactionAttributesExtractorService: InteractionAttributesExtractorService;
  static interactionDetailsCacheService: InteractionDetailsCacheService;
  static interactionObjectFactory: InteractionObjectFactory;
  static interactionRulesRegistryService: InteractionRulesRegistryService;
  static interactionSpecsService: InteractionSpecsService;
  static interactiveMapRulesService: InteractiveMapRulesService;
  static interactiveMapValidationService: InteractiveMapValidationService;
  static itemSelectionInputRulesService: ItemSelectionInputRulesService;
  static itemSelectionInputValidationService: ItemSelectionInputValidationService;
  static jobDataObjectFactory: JobDataObjectFactory;
  static jobStatusSummaryObjectFactory: JobStatusSummaryObjectFactory;
  static languageUtilService: LanguageUtilService;
  static learnerActionObjectFactory: LearnerActionObjectFactory;
  static learnerAnswerDetailsBackendApiService: LearnerAnswerDetailsBackendApiService;
  static learnerAnswerDetailsObjectFactory: LearnerAnswerDetailsObjectFactory;
  static learnerAnswerInfoObjectFactory: LearnerAnswerInfoObjectFactory;
  static learnerDashboardActivityIdsObjectFactory: LearnerDashboardActivityIdsObjectFactory;
  static learnerDashboardBackendApiService: LearnerDashboardBackendApiService;
  static learnerDashboardIdsBackendApiService: LearnerDashboardIdsBackendApiService;
  static learnerExplorationSummaryObjectFactory: LearnerExplorationSummaryObjectFactory;
  static learnerParamsService: LearnerParamsService;
  static localStorageService: LocalStorageService;
  static loaderService: LoaderService;
  static loggerService: LoggerService;
  static logicProofRulesService: LogicProofRulesService;
  static logicProofValidationService: LogicProofValidationService;
  static lostChangeObjectFactory: LostChangeObjectFactory;
  static mathEquationInputRulesService: MathEquationInputRulesService;
  static mathEquationInputValidationService: MathEquationInputValidationService;
  static mathInteractionsService: MathInteractionsService;
  static messengerService: MessengerService;
  static metaTagCustomizationService: MetaTagCustomizationService;
  static misconceptionObjectFactory: MisconceptionObjectFactory;
  static multipleChoiceInputRulesService: MultipleChoiceInputRulesService;
  static multipleChoiceInputValidationService: MultipleChoiceInputValidationService;
  static musicNotesInputRulesService: MusicNotesInputRulesService;
  static musicNotesInputValidationService: MusicNotesInputValidationService;
  static musicPhrasePlayerService: MusicPhrasePlayerService;
  static needsGuidingResponsesTaskObjectFactory: NeedsGuidingResponsesTaskObjectFactory;
  static newlyCreatedStoryObjectFactory: NewlyCreatedStoryObjectFactory;
  static newlyCreatedTopicObjectFactory: NewlyCreatedTopicObjectFactory;
  static nonExistentActivitiesObjectFactory: NonExistentActivitiesObjectFactory;
  static normalizeWhitespacePipe: NormalizeWhitespacePipe;
  static normalizeWhitespacePunctuationAndCasePipe: NormalizeWhitespacePunctuationAndCasePipe;
  static numberAttemptsService: NumberAttemptsService;
  static numericExpressionInputRulesService: NumericExpressionInputRulesService;
  static numericExpressionInputValidationService: NumericExpressionInputValidationService;
  static numericInputRulesService: NumericInputRulesService;
  static numericInputValidationService: NumericInputValidationService;
  static numberWithUnitsObjectFactory: NumberWithUnitsObjectFactory;
  static numberWithUnitsRulesService: NumberWithUnitsRulesService;
  static numberWithUnitsValidationService: NumberWithUnitsValidationService;
  static outcomeObjectFactory: OutcomeObjectFactory;
  static pageTitleService: PageTitleService;
  static paramChangeObjectFactory: ParamChangeObjectFactory;
  static paramChangesObjectFactory: ParamChangesObjectFactory;
  static paramMetadataObjectFactory: ParamMetadataObjectFactory;
  static paramSpecObjectFactory: ParamSpecObjectFactory;
  static paramSpecsObjectFactory: ParamSpecsObjectFactory;
  static paramTypeObjectFactory: ParamTypeObjectFactory;
  static pencilCodeEditorRulesService: PencilCodeEditorRulesService;
  static pencilCodeEditorValidationService: PencilCodeEditorValidationService;
  static playerCorrectnessFeedbackEnabledService: PlayerCorrectnessFeedbackEnabledService;
  static platformParameterFilterObjectFactory: PlatformParameterFilterObjectFactory;
  static platformParameterObjectFactory: PlatformParameterObjectFactory;
  static platformParameterRuleObjectFactory: PlatformParameterRuleObjectFactory;
  static playerPositionService: PlayerPositionService;
  static playerTranscriptService: PlayerTranscriptService;
  static playthroughBackendApiService: PlaythroughBackendApiService;
  static playthroughIssueObjectFactory: PlaythroughIssueObjectFactory;
  static playthroughIssuesBackendApiService: PlaythroughIssuesBackendApiService;
  static playthroughObjectFactory: PlaythroughObjectFactory;
  static playthroughService: PlaythroughService;
  static predictionAlgorithmRegistryService: PredictionAlgorithmRegistryService;
  static predictionResultObjectFactory: PredictionResultObjectFactory;
  static pretestQuestionBackendApiService: PretestQuestionBackendApiService;
  static profileLinkImageBackendApiService: ProfileLinkImageBackendApiService;
  static profilePageBackendApiService: ProfilePageBackendApiService;
  static profileSummaryObjectFactory: ProfileSummaryObjectFactory;
  static pythonProgramTokenizer: PythonProgramTokenizer;
  static questionBackendApiService: QuestionBackendApiService;
  static questionSummaryForOneSkillObjectFactory: QuestionSummaryForOneSkillObjectFactory;
  static questionSummaryObjectFactory: QuestionSummaryObjectFactory;
  static readOnlyCollectionBackendApiService: ReadOnlyCollectionBackendApiService;
  static ratioExpressionInputRulesService: RatioExpressionInputRulesService;
  static ratioExpressionInputValidationService: RatioExpressionInputValidationService;
  static ratioObjectFactory: RatioObjectFactory;
  static ratingComputationService: RatingComputationService;
  static readOnlyStoryNodeObjectFactory: ReadOnlyStoryNodeObjectFactory;
  static readOnlySubtopicPageObjectFactory: ReadOnlySubtopicPageObjectFactory;
  static readOnlyTopicObjectFactory: ReadOnlyTopicObjectFactory;
  static recordedVoiceoversObjectFactory: RecordedVoiceoversObjectFactory;
  static reviewTestBackendApiService: ReviewTestBackendApiService;
  static reviewTestEngineService: ReviewTestEngineService;
  static reviewTestObjectFactory: ReviewTestObjectFactory;
  static rubricObjectFactory: RubricObjectFactory;
  static ruleObjectFactory: RuleObjectFactory;
  static schemaDefaultValueService: SchemaDefaultValueService;
  static schemaFormSubmittedService: SchemaFormSubmittedService;
  static schemaUndefinedLastElementService: SchemaUndefinedLastElementService;
  static searchExplorationsBackendApiService: SearchExplorationsBackendApiService;
  static setInputRulesService: SetInputRulesService;
  static setInputValidationService: SetInputValidationService;
  static shortSkillSummaryObjectFactory: ShortSkillSummaryObjectFactory;
  static sVMPredictionService: SVMPredictionService;
  static sidebarStatusService: SidebarStatusService;
  static siteAnalyticsService: SiteAnalyticsService;
  static skillCreationBackendApiService: SkillCreationBackendApiService;
  static skillDifficultyObjectFactory: SkillDifficultyObjectFactory;
  static skillMasteryBackendApiService: SkillMasteryBackendApiService;
  static skillMasteryObjectFactory: SkillMasteryObjectFactory;
  static skillObjectFactory: SkillObjectFactory;
  static skillOpportunityObjectFactory: SkillOpportunityObjectFactory;
  static skillRightsBackendApiService: SkillRightsBackendApiService;
  static skillRightsObjectFactory: SkillRightsObjectFactory;
  static skillSummaryObjectFactory: SkillSummaryObjectFactory;
  static solutionObjectFactory: SolutionObjectFactory;
  static solutionValidityService: SolutionValidityService;
  static speechSynthesisChunkerService: SpeechSynthesisChunkerService;
  static stateCardObjectFactory: StateCardObjectFactory;
  static stateClassifierMappingService: StateClassifierMappingService;
  static stateContentService: StateContentService;
  static stateCustomizationArgsService: StateCustomizationArgsService;
  static stateEditorRefreshService: StateEditorRefreshService;
  static stateEditorService: StateEditorService;
  static keyboardShortcutService: KeyboardShortcutService;
  static stateGraphLayoutService: StateGraphLayoutService;
  static stateHintsService: StateHintsService;
  static stateInteractionIdService: StateInteractionIdService;
  static stateInteractionStatsBackendApiService: StateInteractionStatsBackendApiService;
  static stateInteractionStatsService: StateInteractionStatsService;
  static stateNameService: StateNameService;
  static stateNextContentIdIndexService: StateNextContentIdIndexService;
  static stateObjectFactory: StateObjectFactory;
  static stateParamChangesService: StateParamChangesService;
  static stateRecordedVoiceoversService: StateRecordedVoiceoversService;
  static stateSolicitAnswerDetailsService: StateSolicitAnswerDetailsService;
  static stateSolutionService: StateSolutionService;
  static stateStatsObjectFactory: StateStatsObjectFactory;
  static stateTopAnswersStatsBackendApiService: StateTopAnswersStatsBackendApiService;
  static stateTopAnswersStatsObjectFactory: StateTopAnswersStatsObjectFactory;
  static stateTopAnswersStatsService: StateTopAnswersStatsService;
  static stateWrittenTranslationsService: StateWrittenTranslationsService;
  static statesObjectFactory: StatesObjectFactory;
  static statsReportingBackendApiService: StatsReportingBackendApiService;
  static statsReportingService: StatsReportingService;
  static stopwatchObjectFactory: StopwatchObjectFactory;
  static storyContentsObjectFactory: StoryContentsObjectFactory;
  static storyEditorNavigationService: StoryEditorNavigationService;
  static storyNodeObjectFactory: StoryNodeObjectFactory;
  static storyObjectFactory: StoryObjectFactory;
  static storyPlaythroughObjectFactory: StoryPlaythroughObjectFactory;
  static storyReferenceObjectFactory: StoryReferenceObjectFactory;
  static storySummaryObjectFactory: StorySummaryObjectFactory;
  static storyViewerBackendApiService: StoryViewerBackendApiService;
  static subtitledHtmlObjectFactory: SubtitledHtmlObjectFactory;
  static subtitledUnicodeObjectFactory: SubtitledUnicodeObjectFactory;
  static subtopicObjectFactory: SubtopicObjectFactory;
  static subtopicPageContentsObjectFactory: SubtopicPageContentsObjectFactory;
  static subtopicPageObjectFactory: SubtopicPageObjectFactory;
  static subtopicViewerBackendApiService: SubtopicViewerBackendApiService;
  static successiveIncorrectAnswersTaskObjectFactory: SuccessiveIncorrectAnswersTaskObjectFactory;
  static suggestionModalService: SuggestionModalService;
  static suggestionObjectFactory: SuggestionObjectFactory;
  static suggestionThreadObjectFactory: SuggestionThreadObjectFactory;
  static suggestionsService: SuggestionsService;
  static textInputPredictionService: TextInputPredictionService;
  static textInputRulesService: TextInputRulesService;
  static textInputTokenizer: TextInputTokenizer;
  static textInputValidationService: TextInputValidationService;
  static threadMessageObjectFactory: ThreadMessageObjectFactory;
  static threadMessageSummaryObjectFactory: ThreadMessageSummaryObjectFactory;
  static threadStatusDisplayService: ThreadStatusDisplayService;
  static topicCreationBackendApiService: TopicCreationBackendApiService;
  static topicObjectFactory: TopicObjectFactory;
  static topicRightsObjectFactory: TopicRightsObjectFactory;
  static topicsAndSkillsDashboardBackendApiService: TopicsAndSkillsDashboardBackendApiService;
  static topicSummaryObjectFactory: TopicSummaryObjectFactory;
  static topicsAndSkillsDashboardFilterObjectFactory: TopicsAndSkillsDashboardFilterObjectFactory;
  static topicsAndSkillsDashboardPageService: TopicsAndSkillsDashboardPageService;
  static topicViewerBackendApiService: TopicViewerBackendApiService;
  static translateService: TranslateService;
  static unitsObjectFactory: UnitsObjectFactory;
  static urlInterpolationService: UrlInterpolationService;
  static urlService: UrlService;
  static userExplorationPermissionsService: UserExplorationPermissionsService;
  static userInfoObjectFactory: UserInfoObjectFactory;
  static userProfileObjectFactory: UserProfileObjectFactory;
  static utilsService: UtilsService;
  static validatorsService: ValidatorsService;
  static versionTreeService: VersionTreeService;
  static visualizationInfoObjectFactory: VisualizationInfoObjectFactory;
  static voiceoverObjectFactory: VoiceoverObjectFactory;
  static windowDimensionsService: WindowDimensionsService;
  static windowRef: WindowRef;
  static winnowingPreprocessingService: WinnowingPreprocessingService;
  static workedExampleObjectFactory: WorkedExampleObjectFactory;
  static writtenTranslationObjectFactory: WrittenTranslationObjectFactory;
  static writtenTranslationsObjectFactory: WrittenTranslationsObjectFactory;

  constructor(
    private adminBackendApiService: AdminBackendApiService,
private adminDataService: AdminDataService,
private adminRouterService: AdminRouterService,
private adminTaskManagerService: AdminTaskManagerService,
private alertsService: AlertsService,
private algebraicExpressionInputRulesService: AlgebraicExpressionInputRulesService,
private algebraicExpressionInputValidationService: AlgebraicExpressionInputValidationService,
private angularNameService: AngularNameService,
private answerClassificationResultObjectFactory: AnswerClassificationResultObjectFactory,
private answerClassificationService: AnswerClassificationService,
private answerGroupsCacheService: AnswerGroupsCacheService,
private answerGroupObjectFactory: AnswerGroupObjectFactory,
private answerStatsObjectFactory: AnswerStatsObjectFactory,
private appService: AppService,
private assignedSkillObjectFactory: AssignedSkillObjectFactory,
private audioBarStatusService: AudioBarStatusService,
private audioFileObjectFactory: AudioFileObjectFactory,
private audioLanguageObjectFactory: AudioLanguageObjectFactory,
private audioTranslationLanguageService: AudioTranslationLanguageService,
private audioTranslationManagerService: AudioTranslationManagerService,
private augmentedSkillSummaryObjectFactory: AugmentedSkillSummaryObjectFactory,
private autogeneratedAudioLanguageObjectFactory: AutogeneratedAudioLanguageObjectFactory,
private autogeneratedAudioPlayerService: AutogeneratedAudioPlayerService,
private autoplayedVideosService: AutoplayedVideosService,
private backgroundMaskService: BackgroundMaskService,
private baseInteractionValidationService: baseInteractionValidationService,
private bottomNavbarStatusService: BottomNavbarStatusService,
private browserCheckerService: BrowserCheckerService,
private camelCaseToHyphensPipe: CamelCaseToHyphensPipe,
private changeObjectFactory: ChangeObjectFactory,
private ckEditorCopyContentService: CkEditorCopyContentService,
private classifierObjectFactory: ClassifierObjectFactory,
private classroomBackendApiService: ClassroomBackendApiService,
private classroomDataObjectFactory: ClassroomDataObjectFactory,
private clientContextObjectFactory: ClientContextObjectFactory,
private codeNormalizerService: CodeNormalizerService,
private codeReplPredictionService: CodeReplPredictionService,
private codeReplRulesService: CodeReplRulesService,
private codeReplValidationService: CodeReplValidationService,
private collectionCreationBackendService: CollectionCreationBackendService,
private collectionCreationService: CollectionCreationService,
private collectionNodeObjectFactory: CollectionNodeObjectFactory,
private collectionObjectFactory: CollectionObjectFactory,
private collectionPlaythroughObjectFactory: CollectionPlaythroughObjectFactory,
private collectionRightsBackendApiService: CollectionRightsBackendApiService,
private collectionRightsObjectFactory: CollectionRightsObjectFactory,
private collectionSummaryObjectFactory: CollectionSummaryObjectFactory,
private collectionValidationService: CollectionValidationService,
private computationDataObjectFactory: ComputationDataObjectFactory,
private computeGraphService: ComputeGraphService,
private conceptCardObjectFactory: ConceptCardObjectFactory,
private contextService: ContextService,
private continueRulesService: ContinueRulesService,
private continueValidationService: ContinueValidationService,
private contributionOpportunitiesBackendApiService: ContributionOpportunitiesBackendApiService,
private constructTranslationIdsService: ConstructTranslationIdsService,
private countVectorizerService: CountVectorizerService,
private creatorDashboardBackendApiService: CreatorDashboardBackendApiService,
private creatorDashboardStatsObjectFactory: CreatorDashboardStatsObjectFactory,
private creatorExplorationSummaryObjectFactory: CreatorExplorationSummaryObjectFactory,
private csrfTokenService: CsrfTokenService,
private currentInteractionService: CurrentInteractionService,
private dateTimeFormatService: DateTimeFormatService,
private debouncerService: DebouncerService,
private deviceInfoService: DeviceInfoService,
private documentAttributeCustomizationService: DocumentAttributeCustomizationService,
private dragAndDropSortInputRulesService: DragAndDropSortInputRulesService,
private dragAndDropSortInputValidationService: DragAndDropSortInputValidationService,
private editableCollectionBackendApiService: EditableCollectionBackendApiService,
private editabilityService: EditabilityService,
private editorFirstTimeEventsService: EditorFirstTimeEventsService,
private emailDashboardBackendApiService: EmailDashboardBackendApiService,
private emailDashboardDataService: EmailDashboardDataService,
private emailDashboardQueryObjectFactory: EmailDashboardQueryObjectFactory,
private emailDashboardQueryResultsObjectFactory: EmailDashboardQueryResultsObjectFactory,
private endExplorationRulesService: EndExplorationRulesService,
private endExplorationValidationService: EndExplorationValidationService,
private entityContextObjectFactory: EntityContextObjectFactory,
private explorationDiffService: ExplorationDiffService,
private explorationDraftObjectFactory: ExplorationDraftObjectFactory,
private explorationFeaturesBackendApiService: ExplorationFeaturesBackendApiService,
private explorationFeaturesService: ExplorationFeaturesService,
private explorationHtmlFormatterService: ExplorationHtmlFormatterService,
private explorationImprovementsBackendApiService: ExplorationImprovementsBackendApiService,
private explorationImprovementsConfigObjectFactory: ExplorationImprovementsConfigObjectFactory,
private explorationImprovementsTaskRegistryService: ExplorationImprovementsTaskRegistryService,
private explorationMetadataObjectFactory: ExplorationMetadataObjectFactory,
private explorationObjectFactory: ExplorationObjectFactory,
private explorationOpportunitySummaryObjectFactory: ExplorationOpportunitySummaryObjectFactory,
private expressionParserService: ExpressionParserService,
private explorationPermissionsBackendApiService: ExplorationPermissionsBackendApiService,
private explorationPermissionsObjectFactory: ExplorationPermissionsObjectFactory,
private explorationRecommendationsBackendApiService: ExplorationRecommendationsBackendApiService,
private explorationRecommendationsService: ExplorationRecommendationsService,
private explorationStatsBackendApiService: ExplorationStatsBackendApiService,
private explorationStatsObjectFactory: ExplorationStatsObjectFactory,
private explorationStatsService: ExplorationStatsService,
private explorationTaskObjectFactory: ExplorationTaskObjectFactory,
private expressionSyntaxTreeService: ExpressionSyntaxTreeService,
private extensionTagAssemblerService: ExtensionTagAssemblerService,
private externalSaveService: ExternalSaveService,
private extractImageFilenamesFromStateService: ExtractImageFilenamesFromStateService,
private featuredTranslationLanguageObjectFactory: FeaturedTranslationLanguageObjectFactory,
private featureStatusSummaryObjectFactory: FeatureStatusSummaryObjectFactory,
private feedbackMessageSummaryObjectFactory: FeedbackMessageSummaryObjectFactory,
private feedbackThreadObjectFactory: FeedbackThreadObjectFactory,
private feedbackThreadSummaryObjectFactory: FeedbackThreadSummaryObjectFactory,
private fileDownloadRequestObjectFactory: FileDownloadRequestObjectFactory,
private formatTimePipe: FormatTimePipe,
private fractionInputRulesService: FractionInputRulesService,
private fractionInputValidationService: FractionInputValidationService,
private fractionObjectFactory: FractionObjectFactory,
private generateContentIdService: GenerateContentIdService,
private graphDetailService: GraphDetailService,
private graphInputRulesService: GraphInputRulesService,
private graphInputValidationService: GraphInputValidationService,
private graphUtilsService: GraphUtilsService,
private guestCollectionProgressObjectFactory: GuestCollectionProgressObjectFactory,
private guppyConfigurationService: GuppyConfigurationService,
private guppyInitializationService: GuppyInitializationService,
private guestCollectionProgressService: GuestCollectionProgressService,
private highBounceRateTaskObjectFactory: HighBounceRateTaskObjectFactory,
private hintObjectFactory: HintObjectFactory,
private htmlEscaperService: HtmlEscaperService,
private i18nLanguageCodeService: I18nLanguageCodeService,
private idGenerationService: IdGenerationService,
private imageClickInputRulesService: ImageClickInputRulesService,
private imageClickInputValidationService: ImageClickInputValidationService,
private imageFileObjectFactory: ImageFileObjectFactory,
private improvementsService: ImprovementsService,
private ineffectiveFeedbackLoopTaskObjectFactory: IneffectiveFeedbackLoopTaskObjectFactory,
private interactionAttributesExtractorService: InteractionAttributesExtractorService,
private interactionDetailsCacheService: InteractionDetailsCacheService,
private interactionObjectFactory: InteractionObjectFactory,
private interactionRulesRegistryService: InteractionRulesRegistryService,
private interactionSpecsService: InteractionSpecsService,
private interactiveMapRulesService: InteractiveMapRulesService,
private interactiveMapValidationService: InteractiveMapValidationService,
private itemSelectionInputRulesService: ItemSelectionInputRulesService,
private itemSelectionInputValidationService: ItemSelectionInputValidationService,
private jobDataObjectFactory: JobDataObjectFactory,
private jobStatusSummaryObjectFactory: JobStatusSummaryObjectFactory,
private languageUtilService: LanguageUtilService,
private learnerActionObjectFactory: LearnerActionObjectFactory,
private learnerAnswerDetailsBackendApiService: LearnerAnswerDetailsBackendApiService,
private learnerAnswerDetailsObjectFactory: LearnerAnswerDetailsObjectFactory,
private learnerAnswerInfoObjectFactory: LearnerAnswerInfoObjectFactory,
private learnerDashboardActivityIdsObjectFactory: LearnerDashboardActivityIdsObjectFactory,
private learnerDashboardBackendApiService: LearnerDashboardBackendApiService,
private learnerDashboardIdsBackendApiService: LearnerDashboardIdsBackendApiService,
private learnerExplorationSummaryObjectFactory: LearnerExplorationSummaryObjectFactory,
private learnerParamsService: LearnerParamsService,
private localStorageService: LocalStorageService,
private loaderService: LoaderService,
private loggerService: LoggerService,
private logicProofRulesService: LogicProofRulesService,
private logicProofValidationService: LogicProofValidationService,
private lostChangeObjectFactory: LostChangeObjectFactory,
private mathEquationInputRulesService: MathEquationInputRulesService,
private mathEquationInputValidationService: MathEquationInputValidationService,
private mathInteractionsService: MathInteractionsService,
private messengerService: MessengerService,
private metaTagCustomizationService: MetaTagCustomizationService,
private misconceptionObjectFactory: MisconceptionObjectFactory,
private multipleChoiceInputRulesService: MultipleChoiceInputRulesService,
private multipleChoiceInputValidationService: MultipleChoiceInputValidationService,
private musicNotesInputRulesService: MusicNotesInputRulesService,
private musicNotesInputValidationService: MusicNotesInputValidationService,
private musicPhrasePlayerService: MusicPhrasePlayerService,
private needsGuidingResponsesTaskObjectFactory: NeedsGuidingResponsesTaskObjectFactory,
private newlyCreatedStoryObjectFactory: NewlyCreatedStoryObjectFactory,
private newlyCreatedTopicObjectFactory: NewlyCreatedTopicObjectFactory,
private nonExistentActivitiesObjectFactory: NonExistentActivitiesObjectFactory,
private normalizeWhitespacePipe: NormalizeWhitespacePipe,
private normalizeWhitespacePunctuationAndCasePipe: NormalizeWhitespacePunctuationAndCasePipe,
private numberAttemptsService: NumberAttemptsService,
private numericExpressionInputRulesService: NumericExpressionInputRulesService,
private numericExpressionInputValidationService: NumericExpressionInputValidationService,
private numericInputRulesService: NumericInputRulesService,
private numericInputValidationService: NumericInputValidationService,
private numberWithUnitsObjectFactory: NumberWithUnitsObjectFactory,
private numberWithUnitsRulesService: NumberWithUnitsRulesService,
private numberWithUnitsValidationService: NumberWithUnitsValidationService,
private outcomeObjectFactory: OutcomeObjectFactory,
private pageTitleService: PageTitleService,
private paramChangeObjectFactory: ParamChangeObjectFactory,
private paramChangesObjectFactory: ParamChangesObjectFactory,
private paramMetadataObjectFactory: ParamMetadataObjectFactory,
private paramSpecObjectFactory: ParamSpecObjectFactory,
private paramSpecsObjectFactory: ParamSpecsObjectFactory,
private paramTypeObjectFactory: ParamTypeObjectFactory,
private pencilCodeEditorRulesService: PencilCodeEditorRulesService,
private pencilCodeEditorValidationService: PencilCodeEditorValidationService,
private platformParameterFilterObjectFactory: PlatformParameterFilterObjectFactory,
private platformParameterObjectFactory: PlatformParameterObjectFactory,
private platformParameterRuleObjectFactory: PlatformParameterRuleObjectFactory,
private playerCorrectnessFeedbackEnabledService: PlayerCorrectnessFeedbackEnabledService,
private playerPositionService: PlayerPositionService,
private playerTranscriptService: PlayerTranscriptService,
private playthroughBackendApiService: PlaythroughBackendApiService,
private playthroughIssueObjectFactory: PlaythroughIssueObjectFactory,
private playthroughIssuesBackendApiService: PlaythroughIssuesBackendApiService,
private playthroughObjectFactory: PlaythroughObjectFactory,
private playthroughService: PlaythroughService,
private predictionAlgorithmRegistryService: PredictionAlgorithmRegistryService,
private predictionResultObjectFactory: PredictionResultObjectFactory,
private pretestQuestionBackendApiService: PretestQuestionBackendApiService,
private profileLinkImageBackendApiService: ProfileLinkImageBackendApiService,
private profilePageBackendApiService: ProfilePageBackendApiService,
private profileSummaryObjectFactory: ProfileSummaryObjectFactory,
private pythonProgramTokenizer: PythonProgramTokenizer,
private questionBackendApiService: QuestionBackendApiService,
private questionSummaryForOneSkillObjectFactory: QuestionSummaryForOneSkillObjectFactory,
private questionSummaryObjectFactory: QuestionSummaryObjectFactory,
private readOnlyCollectionBackendApiService: ReadOnlyCollectionBackendApiService,
private ratioExpressionInputRulesService: RatioExpressionInputRulesService,
private ratioExpressionInputValidationService: RatioExpressionInputValidationService,
private ratioObjectFactory: RatioObjectFactory,
private ratingComputationService: RatingComputationService,
private readOnlyStoryNodeObjectFactory: ReadOnlyStoryNodeObjectFactory,
private readOnlySubtopicPageObjectFactory: ReadOnlySubtopicPageObjectFactory,
private readOnlyTopicObjectFactory: ReadOnlyTopicObjectFactory,
private recordedVoiceoversObjectFactory: RecordedVoiceoversObjectFactory,
private reviewTestBackendApiService: ReviewTestBackendApiService,
private reviewTestEngineService: ReviewTestEngineService,
private reviewTestObjectFactory: ReviewTestObjectFactory,
private rubricObjectFactory: RubricObjectFactory,
private ruleObjectFactory: RuleObjectFactory,
private schemaDefaultValueService: SchemaDefaultValueService,
private schemaFormSubmittedService: SchemaFormSubmittedService,
private schemaUndefinedLastElementService: SchemaUndefinedLastElementService,
private searchExplorationsBackendApiService: SearchExplorationsBackendApiService,
private setInputRulesService: SetInputRulesService,
private setInputValidationService: SetInputValidationService,
private shortSkillSummaryObjectFactory: ShortSkillSummaryObjectFactory,
private sVMPredictionService: SVMPredictionService,
private sidebarStatusService: SidebarStatusService,
private siteAnalyticsService: SiteAnalyticsService,
private skillCreationBackendApiService: SkillCreationBackendApiService,
private skillDifficultyObjectFactory: SkillDifficultyObjectFactory,
private skillMasteryBackendApiService: SkillMasteryBackendApiService,
private skillMasteryObjectFactory: SkillMasteryObjectFactory,
private skillObjectFactory: SkillObjectFactory,
private skillOpportunityObjectFactory: SkillOpportunityObjectFactory,
private skillRightsBackendApiService: SkillRightsBackendApiService,
private skillRightsObjectFactory: SkillRightsObjectFactory,
private skillSummaryObjectFactory: SkillSummaryObjectFactory,
private solutionObjectFactory: SolutionObjectFactory,
private solutionValidityService: SolutionValidityService,
private speechSynthesisChunkerService: SpeechSynthesisChunkerService,
private stateCardObjectFactory: StateCardObjectFactory,
private stateClassifierMappingService: StateClassifierMappingService,
private stateContentService: StateContentService,
private stateCustomizationArgsService: StateCustomizationArgsService,
private stateEditorRefreshService: StateEditorRefreshService,
private stateEditorService: StateEditorService,
private keyboardShortcutService: KeyboardShortcutService,
private stateGraphLayoutService: StateGraphLayoutService,
private stateHintsService: StateHintsService,
private stateInteractionIdService: StateInteractionIdService,
private stateInteractionStatsBackendApiService: StateInteractionStatsBackendApiService,
private stateInteractionStatsService: StateInteractionStatsService,
private stateNameService: StateNameService,
private stateNextContentIdIndexService: StateNextContentIdIndexService,
private stateObjectFactory: StateObjectFactory,
private stateParamChangesService: StateParamChangesService,
private stateRecordedVoiceoversService: StateRecordedVoiceoversService,
private stateSolicitAnswerDetailsService: StateSolicitAnswerDetailsService,
private stateSolutionService: StateSolutionService,
private stateStatsObjectFactory: StateStatsObjectFactory,
private stateTopAnswersStatsBackendApiService: StateTopAnswersStatsBackendApiService,
private stateTopAnswersStatsObjectFactory: StateTopAnswersStatsObjectFactory,
private stateTopAnswersStatsService: StateTopAnswersStatsService,
private stateWrittenTranslationsService: StateWrittenTranslationsService,
private statesObjectFactory: StatesObjectFactory,
private statsReportingBackendApiService: StatsReportingBackendApiService,
private statsReportingService: StatsReportingService,
private stopwatchObjectFactory: StopwatchObjectFactory,
private storyContentsObjectFactory: StoryContentsObjectFactory,
private storyEditorNavigationService: StoryEditorNavigationService,
private storyNodeObjectFactory: StoryNodeObjectFactory,
private storyObjectFactory: StoryObjectFactory,
private storyPlaythroughObjectFactory: StoryPlaythroughObjectFactory,
private storyReferenceObjectFactory: StoryReferenceObjectFactory,
private storySummaryObjectFactory: StorySummaryObjectFactory,
private storyViewerBackendApiService: StoryViewerBackendApiService,
private subtitledHtmlObjectFactory: SubtitledHtmlObjectFactory,
private subtitledUnicodeObjectFactory: SubtitledUnicodeObjectFactory,
private subtopicObjectFactory: SubtopicObjectFactory,
private subtopicPageContentsObjectFactory: SubtopicPageContentsObjectFactory,
private subtopicPageObjectFactory: SubtopicPageObjectFactory,
private subtopicViewerBackendApiService: SubtopicViewerBackendApiService,
private successiveIncorrectAnswersTaskObjectFactory: SuccessiveIncorrectAnswersTaskObjectFactory,
private suggestionModalService: SuggestionModalService,
private suggestionObjectFactory: SuggestionObjectFactory,
private suggestionThreadObjectFactory: SuggestionThreadObjectFactory,
private suggestionsService: SuggestionsService,
private textInputPredictionService: TextInputPredictionService,
private textInputRulesService: TextInputRulesService,
private textInputTokenizer: TextInputTokenizer,
private textInputValidationService: TextInputValidationService,
private threadMessageObjectFactory: ThreadMessageObjectFactory,
private threadMessageSummaryObjectFactory: ThreadMessageSummaryObjectFactory,
private threadStatusDisplayService: ThreadStatusDisplayService,
private topicCreationBackendApiService: TopicCreationBackendApiService,
private topicObjectFactory: TopicObjectFactory,
private topicRightsObjectFactory: TopicRightsObjectFactory,
private topicsAndSkillsDashboardBackendApiService: TopicsAndSkillsDashboardBackendApiService,
private topicSummaryObjectFactory: TopicSummaryObjectFactory,
private topicsAndSkillsDashboardFilterObjectFactory: TopicsAndSkillsDashboardFilterObjectFactory,
private topicsAndSkillsDashboardPageService: TopicsAndSkillsDashboardPageService,
private topicViewerBackendApiService: TopicViewerBackendApiService,
private translateService: TranslateService,
private unitsObjectFactory: UnitsObjectFactory,
private urlInterpolationService: UrlInterpolationService,
private urlService: UrlService,
private userExplorationPermissionsService: UserExplorationPermissionsService,
private userInfoObjectFactory: UserInfoObjectFactory,
private userProfileObjectFactory: UserProfileObjectFactory,
private utilsService: UtilsService,
private validatorsService: ValidatorsService,
private versionTreeService: VersionTreeService,
private visualizationInfoObjectFactory: VisualizationInfoObjectFactory,
private voiceoverObjectFactory: VoiceoverObjectFactory,
private windowDimensionsService: WindowDimensionsService,
private windowRef: WindowRef,
private winnowingPreprocessingService: WinnowingPreprocessingService,
private workedExampleObjectFactory: WorkedExampleObjectFactory,
private writtenTranslationObjectFactory: WrittenTranslationObjectFactory,
private writtenTranslationsObjectFactory: WrittenTranslationsObjectFactory
  ) {}

  public ngAfterViewInit(): void {
    OppiaAngularRootComponent.adminBackendApiService = this.adminBackendApiService;
    OppiaAngularRootComponent.adminDataService = this.adminDataService;
    OppiaAngularRootComponent.adminRouterService = this.adminRouterService;
    OppiaAngularRootComponent.adminTaskManagerService = this.adminTaskManagerService;
    OppiaAngularRootComponent.alertsService = this.alertsService;
    OppiaAngularRootComponent.algebraicExpressionInputRulesService = this.algebraicExpressionInputRulesService;
    OppiaAngularRootComponent.algebraicExpressionInputValidationService = this.algebraicExpressionInputValidationService;
    OppiaAngularRootComponent.angularNameService = this.angularNameService;
    OppiaAngularRootComponent.answerClassificationResultObjectFactory = this.answerClassificationResultObjectFactory;
    OppiaAngularRootComponent.answerClassificationService = this.answerClassificationService;
    OppiaAngularRootComponent.answerGroupsCacheService = this.answerGroupsCacheService;
    OppiaAngularRootComponent.answerGroupObjectFactory = this.answerGroupObjectFactory;
    OppiaAngularRootComponent.answerStatsObjectFactory = this.answerStatsObjectFactory;
    OppiaAngularRootComponent.appService = this.appService;
    OppiaAngularRootComponent.assignedSkillObjectFactory = this.assignedSkillObjectFactory;
    OppiaAngularRootComponent.audioBarStatusService = this.audioBarStatusService;
    OppiaAngularRootComponent.audioFileObjectFactory = this.audioFileObjectFactory;
    OppiaAngularRootComponent.audioLanguageObjectFactory = this.audioLanguageObjectFactory;
    OppiaAngularRootComponent.audioTranslationLanguageService = this.audioTranslationLanguageService;
    OppiaAngularRootComponent.audioTranslationManagerService = this.audioTranslationManagerService;
    OppiaAngularRootComponent.augmentedSkillSummaryObjectFactory = this.augmentedSkillSummaryObjectFactory;
    OppiaAngularRootComponent.autogeneratedAudioLanguageObjectFactory = this.autogeneratedAudioLanguageObjectFactory;
    OppiaAngularRootComponent.autogeneratedAudioPlayerService = this.autogeneratedAudioPlayerService;
    OppiaAngularRootComponent.autoplayedVideosService = this.autoplayedVideosService;
    OppiaAngularRootComponent.backgroundMaskService = this.backgroundMaskService;
    OppiaAngularRootComponent.baseInteractionValidationService = this.baseInteractionValidationService;
    OppiaAngularRootComponent.bottomNavbarStatusService = this.bottomNavbarStatusService;
    OppiaAngularRootComponent.browserCheckerService = this.browserCheckerService;
    OppiaAngularRootComponent.camelCaseToHyphensPipe = this.camelCaseToHyphensPipe;
    OppiaAngularRootComponent.changeObjectFactory = this.changeObjectFactory;
    OppiaAngularRootComponent.ckEditorCopyContentService = this.ckEditorCopyContentService,
    OppiaAngularRootComponent.classifierObjectFactory = this.classifierObjectFactory;
    OppiaAngularRootComponent.classroomBackendApiService = this.classroomBackendApiService;
    OppiaAngularRootComponent.classroomDataObjectFactory = this.classroomDataObjectFactory;
    OppiaAngularRootComponent.clientContextObjectFactory = this.clientContextObjectFactory;
    OppiaAngularRootComponent.codeNormalizerService = this.codeNormalizerService;
    OppiaAngularRootComponent.codeReplPredictionService = this.codeReplPredictionService;
    OppiaAngularRootComponent.codeReplRulesService = this.codeReplRulesService;
    OppiaAngularRootComponent.codeReplValidationService = this.codeReplValidationService;
    OppiaAngularRootComponent.collectionCreationBackendService = this.collectionCreationBackendService;
    OppiaAngularRootComponent.collectionCreationService = this.collectionCreationService;
    OppiaAngularRootComponent.collectionNodeObjectFactory = this.collectionNodeObjectFactory;
    OppiaAngularRootComponent.collectionObjectFactory = this.collectionObjectFactory;
    OppiaAngularRootComponent.collectionPlaythroughObjectFactory = this.collectionPlaythroughObjectFactory;
    OppiaAngularRootComponent.collectionRightsBackendApiService = this.collectionRightsBackendApiService;
    OppiaAngularRootComponent.collectionRightsObjectFactory = this.collectionRightsObjectFactory;
    OppiaAngularRootComponent.collectionSummaryObjectFactory = this.collectionSummaryObjectFactory;
    OppiaAngularRootComponent.collectionValidationService = this.collectionValidationService;
    OppiaAngularRootComponent.computationDataObjectFactory = this.computationDataObjectFactory;
    OppiaAngularRootComponent.computeGraphService = this.computeGraphService;
    OppiaAngularRootComponent.conceptCardObjectFactory = this.conceptCardObjectFactory;
    OppiaAngularRootComponent.contextService = this.contextService;
    OppiaAngularRootComponent.continueRulesService = this.continueRulesService;
    OppiaAngularRootComponent.continueValidationService = this.continueValidationService;
    OppiaAngularRootComponent.contributionOpportunitiesBackendApiService = this.contributionOpportunitiesBackendApiService;
    OppiaAngularRootComponent.constructTranslationIdsService = this.constructTranslationIdsService;
    OppiaAngularRootComponent.countVectorizerService = this.countVectorizerService;
    OppiaAngularRootComponent.creatorDashboardBackendApiService = this.creatorDashboardBackendApiService;
    OppiaAngularRootComponent.creatorDashboardStatsObjectFactory = this.creatorDashboardStatsObjectFactory;
    OppiaAngularRootComponent.creatorExplorationSummaryObjectFactory = this.creatorExplorationSummaryObjectFactory;
    OppiaAngularRootComponent.csrfTokenService = this.csrfTokenService;
    OppiaAngularRootComponent.currentInteractionService = this.currentInteractionService;
    OppiaAngularRootComponent.dateTimeFormatService = this.dateTimeFormatService;
    OppiaAngularRootComponent.debouncerService = this.debouncerService;
    OppiaAngularRootComponent.deviceInfoService = this.deviceInfoService;
    OppiaAngularRootComponent.documentAttributeCustomizationService = this.documentAttributeCustomizationService;
    OppiaAngularRootComponent.dragAndDropSortInputRulesService = this.dragAndDropSortInputRulesService;
    OppiaAngularRootComponent.dragAndDropSortInputValidationService = this.dragAndDropSortInputValidationService;
    OppiaAngularRootComponent.editableCollectionBackendApiService = this.editableCollectionBackendApiService;
    OppiaAngularRootComponent.editabilityService = this.editabilityService;
    OppiaAngularRootComponent.editorFirstTimeEventsService = this.editorFirstTimeEventsService;
    OppiaAngularRootComponent.emailDashboardBackendApiService = this.emailDashboardBackendApiService;
    OppiaAngularRootComponent.emailDashboardDataService = this.emailDashboardDataService;
    OppiaAngularRootComponent.emailDashboardQueryObjectFactory = this.emailDashboardQueryObjectFactory;
    OppiaAngularRootComponent.emailDashboardQueryResultsObjectFactory = this.emailDashboardQueryResultsObjectFactory;
    OppiaAngularRootComponent.endExplorationRulesService = this.endExplorationRulesService;
    OppiaAngularRootComponent.endExplorationValidationService = this.endExplorationValidationService;
    OppiaAngularRootComponent.entityContextObjectFactory = this.entityContextObjectFactory;
    OppiaAngularRootComponent.explorationDiffService = this.explorationDiffService;
    OppiaAngularRootComponent.explorationDraftObjectFactory = this.explorationDraftObjectFactory;
    OppiaAngularRootComponent.explorationFeaturesBackendApiService = this.explorationFeaturesBackendApiService;
    OppiaAngularRootComponent.explorationFeaturesService = this.explorationFeaturesService;
    OppiaAngularRootComponent.explorationHtmlFormatterService = this.explorationHtmlFormatterService;
    OppiaAngularRootComponent.explorationImprovementsBackendApiService = this.explorationImprovementsBackendApiService;
    OppiaAngularRootComponent.explorationImprovementsConfigObjectFactory = this.explorationImprovementsConfigObjectFactory;
    OppiaAngularRootComponent.explorationImprovementsTaskRegistryService = this.explorationImprovementsTaskRegistryService;
    OppiaAngularRootComponent.explorationMetadataObjectFactory = this.explorationMetadataObjectFactory;
    OppiaAngularRootComponent.explorationObjectFactory = this.explorationObjectFactory;
    OppiaAngularRootComponent.explorationOpportunitySummaryObjectFactory = this.explorationOpportunitySummaryObjectFactory;
    OppiaAngularRootComponent.expressionParserService = this.expressionParserService;
    OppiaAngularRootComponent.explorationPermissionsBackendApiService = this.explorationPermissionsBackendApiService;
    OppiaAngularRootComponent.explorationPermissionsObjectFactory = this.explorationPermissionsObjectFactory;
    OppiaAngularRootComponent.explorationRecommendationsBackendApiService = this.explorationRecommendationsBackendApiService;
    OppiaAngularRootComponent.explorationRecommendationsService = this.explorationRecommendationsService;
    OppiaAngularRootComponent.explorationStatsBackendApiService = this.explorationStatsBackendApiService;
    OppiaAngularRootComponent.explorationStatsObjectFactory = this.explorationStatsObjectFactory;
    OppiaAngularRootComponent.explorationStatsService = this.explorationStatsService;
    OppiaAngularRootComponent.explorationTaskObjectFactory = this.explorationTaskObjectFactory;
    OppiaAngularRootComponent.expressionSyntaxTreeService = this.expressionSyntaxTreeService;
    OppiaAngularRootComponent.extensionTagAssemblerService = this.extensionTagAssemblerService;
    OppiaAngularRootComponent.externalSaveService = this.externalSaveService;
    OppiaAngularRootComponent.extractImageFilenamesFromStateService = this.extractImageFilenamesFromStateService;
    OppiaAngularRootComponent.featuredTranslationLanguageObjectFactory = this.featuredTranslationLanguageObjectFactory;
    OppiaAngularRootComponent.featureStatusSummaryObjectFactory = this.featureStatusSummaryObjectFactory;
    OppiaAngularRootComponent.feedbackMessageSummaryObjectFactory = this.feedbackMessageSummaryObjectFactory;
    OppiaAngularRootComponent.feedbackThreadObjectFactory = this.feedbackThreadObjectFactory;
    OppiaAngularRootComponent.feedbackThreadSummaryObjectFactory = this.feedbackThreadSummaryObjectFactory;
    OppiaAngularRootComponent.fileDownloadRequestObjectFactory = this.fileDownloadRequestObjectFactory;
    OppiaAngularRootComponent.formatTimePipe = this.formatTimePipe;
    OppiaAngularRootComponent.fractionInputRulesService = this.fractionInputRulesService;
    OppiaAngularRootComponent.fractionInputValidationService = this.fractionInputValidationService;
    OppiaAngularRootComponent.fractionObjectFactory = this.fractionObjectFactory;
    OppiaAngularRootComponent.generateContentIdService = this.generateContentIdService;
    OppiaAngularRootComponent.graphDetailService = this.graphDetailService;
    OppiaAngularRootComponent.graphInputRulesService = this.graphInputRulesService;
    OppiaAngularRootComponent.graphInputValidationService = this.graphInputValidationService;
    OppiaAngularRootComponent.graphUtilsService = this.graphUtilsService;
    OppiaAngularRootComponent.guestCollectionProgressObjectFactory = this.guestCollectionProgressObjectFactory;
    OppiaAngularRootComponent.guppyConfigurationService = this.guppyConfigurationService;
    OppiaAngularRootComponent.guppyInitializationService = this.guppyInitializationService;
    OppiaAngularRootComponent.guestCollectionProgressService = this.guestCollectionProgressService;
    OppiaAngularRootComponent.highBounceRateTaskObjectFactory = this.highBounceRateTaskObjectFactory;
    OppiaAngularRootComponent.hintObjectFactory = this.hintObjectFactory;
    OppiaAngularRootComponent.htmlEscaperService = this.htmlEscaperService;
    OppiaAngularRootComponent.i18nLanguageCodeService = this.i18nLanguageCodeService;
    OppiaAngularRootComponent.idGenerationService = this.idGenerationService;
    OppiaAngularRootComponent.imageClickInputRulesService = this.imageClickInputRulesService;
    OppiaAngularRootComponent.imageClickInputValidationService = this.imageClickInputValidationService;
    OppiaAngularRootComponent.imageFileObjectFactory = this.imageFileObjectFactory;
    OppiaAngularRootComponent.improvementsService = this.improvementsService;
    OppiaAngularRootComponent.ineffectiveFeedbackLoopTaskObjectFactory = this.ineffectiveFeedbackLoopTaskObjectFactory;
    OppiaAngularRootComponent.interactionAttributesExtractorService = this.interactionAttributesExtractorService;
    OppiaAngularRootComponent.interactionDetailsCacheService = this.interactionDetailsCacheService;
    OppiaAngularRootComponent.interactionObjectFactory = this.interactionObjectFactory;
    OppiaAngularRootComponent.interactionRulesRegistryService = this.interactionRulesRegistryService;
    OppiaAngularRootComponent.interactionSpecsService = this.interactionSpecsService;
    OppiaAngularRootComponent.interactiveMapRulesService = this.interactiveMapRulesService;
    OppiaAngularRootComponent.interactiveMapValidationService = this.interactiveMapValidationService;
    OppiaAngularRootComponent.itemSelectionInputRulesService = this.itemSelectionInputRulesService;
    OppiaAngularRootComponent.itemSelectionInputValidationService = this.itemSelectionInputValidationService;
    OppiaAngularRootComponent.jobDataObjectFactory = this.jobDataObjectFactory;
    OppiaAngularRootComponent.jobStatusSummaryObjectFactory = this.jobStatusSummaryObjectFactory;
    OppiaAngularRootComponent.languageUtilService = this.languageUtilService;
    OppiaAngularRootComponent.learnerActionObjectFactory = this.learnerActionObjectFactory;
    OppiaAngularRootComponent.learnerAnswerDetailsBackendApiService = this.learnerAnswerDetailsBackendApiService;
    OppiaAngularRootComponent.learnerAnswerDetailsObjectFactory = this.learnerAnswerDetailsObjectFactory;
    OppiaAngularRootComponent.learnerAnswerInfoObjectFactory = this.learnerAnswerInfoObjectFactory;
    OppiaAngularRootComponent.learnerDashboardActivityIdsObjectFactory = this.learnerDashboardActivityIdsObjectFactory;
    OppiaAngularRootComponent.learnerDashboardBackendApiService = this.learnerDashboardBackendApiService;
    OppiaAngularRootComponent.learnerDashboardIdsBackendApiService = this.learnerDashboardIdsBackendApiService;
    OppiaAngularRootComponent.learnerExplorationSummaryObjectFactory = this.learnerExplorationSummaryObjectFactory;
    OppiaAngularRootComponent.learnerParamsService = this.learnerParamsService;
    OppiaAngularRootComponent.localStorageService = this.localStorageService;
    OppiaAngularRootComponent.loaderService = this.loaderService;
    OppiaAngularRootComponent.loggerService = this.loggerService;
    OppiaAngularRootComponent.logicProofRulesService = this.logicProofRulesService;
    OppiaAngularRootComponent.logicProofValidationService = this.logicProofValidationService;
    OppiaAngularRootComponent.lostChangeObjectFactory = this.lostChangeObjectFactory;
    OppiaAngularRootComponent.mathEquationInputRulesService = this.mathEquationInputRulesService;
    OppiaAngularRootComponent.mathEquationInputValidationService = this.mathEquationInputValidationService;
    OppiaAngularRootComponent.mathInteractionsService = this.mathInteractionsService;
    OppiaAngularRootComponent.messengerService = this.messengerService;
    OppiaAngularRootComponent.metaTagCustomizationService = this.metaTagCustomizationService;
    OppiaAngularRootComponent.misconceptionObjectFactory = this.misconceptionObjectFactory;
    OppiaAngularRootComponent.multipleChoiceInputRulesService = this.multipleChoiceInputRulesService;
    OppiaAngularRootComponent.multipleChoiceInputValidationService = this.multipleChoiceInputValidationService;
    OppiaAngularRootComponent.musicNotesInputRulesService = this.musicNotesInputRulesService;
    OppiaAngularRootComponent.musicNotesInputValidationService = this.musicNotesInputValidationService;
    OppiaAngularRootComponent.musicPhrasePlayerService = this.musicPhrasePlayerService;
    OppiaAngularRootComponent.newlyCreatedStoryObjectFactory = this.newlyCreatedStoryObjectFactory;
    OppiaAngularRootComponent.newlyCreatedTopicObjectFactory = this.newlyCreatedTopicObjectFactory;
    OppiaAngularRootComponent.needsGuidingResponsesTaskObjectFactory = this.needsGuidingResponsesTaskObjectFactory;
    OppiaAngularRootComponent.nonExistentActivitiesObjectFactory = this.nonExistentActivitiesObjectFactory;
    OppiaAngularRootComponent.normalizeWhitespacePipe = this.normalizeWhitespacePipe;
    OppiaAngularRootComponent.normalizeWhitespacePunctuationAndCasePipe = this.normalizeWhitespacePunctuationAndCasePipe;
    OppiaAngularRootComponent.numberAttemptsService = this.numberAttemptsService;
    OppiaAngularRootComponent.numericExpressionInputRulesService = this.numericExpressionInputRulesService;
    OppiaAngularRootComponent.numericExpressionInputValidationService = this.numericExpressionInputValidationService;
    OppiaAngularRootComponent.numericInputRulesService = this.numericInputRulesService;
    OppiaAngularRootComponent.numericInputValidationService = this.numericInputValidationService;
    OppiaAngularRootComponent.numberWithUnitsObjectFactory = this.numberWithUnitsObjectFactory;
    OppiaAngularRootComponent.numberWithUnitsRulesService = this.numberWithUnitsRulesService;
    OppiaAngularRootComponent.numberWithUnitsValidationService = this.numberWithUnitsValidationService;
    OppiaAngularRootComponent.outcomeObjectFactory = this.outcomeObjectFactory;
    OppiaAngularRootComponent.pageTitleService = this.pageTitleService;
    OppiaAngularRootComponent.paramChangeObjectFactory = this.paramChangeObjectFactory;
    OppiaAngularRootComponent.paramChangesObjectFactory = this.paramChangesObjectFactory;
    OppiaAngularRootComponent.paramMetadataObjectFactory = this.paramMetadataObjectFactory;
    OppiaAngularRootComponent.paramSpecObjectFactory = this.paramSpecObjectFactory;
    OppiaAngularRootComponent.paramSpecsObjectFactory = this.paramSpecsObjectFactory;
    OppiaAngularRootComponent.paramTypeObjectFactory = this.paramTypeObjectFactory;
    OppiaAngularRootComponent.pencilCodeEditorRulesService = this.pencilCodeEditorRulesService;
    OppiaAngularRootComponent.pencilCodeEditorValidationService = this.pencilCodeEditorValidationService;
    OppiaAngularRootComponent.platformParameterFilterObjectFactory = this.platformParameterFilterObjectFactory;
    OppiaAngularRootComponent.platformParameterObjectFactory = this.platformParameterObjectFactory;
    OppiaAngularRootComponent.platformParameterRuleObjectFactory = this.platformParameterRuleObjectFactory;
    OppiaAngularRootComponent.playerCorrectnessFeedbackEnabledService = this.playerCorrectnessFeedbackEnabledService;
    OppiaAngularRootComponent.playerPositionService = this.playerPositionService;
    OppiaAngularRootComponent.playerTranscriptService = this.playerTranscriptService;
    OppiaAngularRootComponent.playthroughIssueObjectFactory = this.playthroughIssueObjectFactory;
    OppiaAngularRootComponent.playthroughIssuesBackendApiService = this.playthroughIssuesBackendApiService;
    OppiaAngularRootComponent.playthroughObjectFactory = this.playthroughObjectFactory;
    OppiaAngularRootComponent.playthroughBackendApiService = this.playthroughBackendApiService;
    OppiaAngularRootComponent.playthroughService = this.playthroughService;
    OppiaAngularRootComponent.predictionAlgorithmRegistryService = this.predictionAlgorithmRegistryService;
    OppiaAngularRootComponent.predictionResultObjectFactory = this.predictionResultObjectFactory;
    OppiaAngularRootComponent.pretestQuestionBackendApiService = this.pretestQuestionBackendApiService;
    OppiaAngularRootComponent.profileLinkImageBackendApiService = this.profileLinkImageBackendApiService;
    OppiaAngularRootComponent.profilePageBackendApiService = this.profilePageBackendApiService;
    OppiaAngularRootComponent.profileSummaryObjectFactory = this.profileSummaryObjectFactory;
    OppiaAngularRootComponent.pythonProgramTokenizer = this.pythonProgramTokenizer;
    OppiaAngularRootComponent.questionBackendApiService = this.questionBackendApiService;
    OppiaAngularRootComponent.questionSummaryForOneSkillObjectFactory = this.questionSummaryForOneSkillObjectFactory;
    OppiaAngularRootComponent.questionSummaryObjectFactory = this.questionSummaryObjectFactory;
    OppiaAngularRootComponent.readOnlyCollectionBackendApiService = this.readOnlyCollectionBackendApiService;
    OppiaAngularRootComponent.ratioExpressionInputRulesService = this.ratioExpressionInputRulesService;
    OppiaAngularRootComponent.ratioExpressionInputValidationService = this.ratioExpressionInputValidationService;
    OppiaAngularRootComponent.ratioObjectFactory = this.ratioObjectFactory;
    OppiaAngularRootComponent.ratingComputationService = this.ratingComputationService;
    OppiaAngularRootComponent.readOnlyStoryNodeObjectFactory = this.readOnlyStoryNodeObjectFactory;
    OppiaAngularRootComponent.readOnlySubtopicPageObjectFactory = this.readOnlySubtopicPageObjectFactory;
    OppiaAngularRootComponent.readOnlyTopicObjectFactory = this.readOnlyTopicObjectFactory;
    OppiaAngularRootComponent.recordedVoiceoversObjectFactory = this.recordedVoiceoversObjectFactory;
    OppiaAngularRootComponent.reviewTestBackendApiService = this.reviewTestBackendApiService;
    OppiaAngularRootComponent.reviewTestEngineService = this.reviewTestEngineService;
    OppiaAngularRootComponent.reviewTestObjectFactory = this.reviewTestObjectFactory;
    OppiaAngularRootComponent.rubricObjectFactory = this.rubricObjectFactory;
    OppiaAngularRootComponent.ruleObjectFactory = this.ruleObjectFactory;
    OppiaAngularRootComponent.schemaDefaultValueService = this.schemaDefaultValueService;
    OppiaAngularRootComponent.schemaFormSubmittedService = this.schemaFormSubmittedService;
    OppiaAngularRootComponent.schemaUndefinedLastElementService = this.schemaUndefinedLastElementService;
    OppiaAngularRootComponent.searchExplorationsBackendApiService = this.searchExplorationsBackendApiService;
    OppiaAngularRootComponent.setInputRulesService = this.setInputRulesService;
    OppiaAngularRootComponent.setInputValidationService = this.setInputValidationService;
    OppiaAngularRootComponent.shortSkillSummaryObjectFactory = this.shortSkillSummaryObjectFactory;
    OppiaAngularRootComponent.sVMPredictionService = this.sVMPredictionService;
    OppiaAngularRootComponent.sidebarStatusService = this.sidebarStatusService;
    OppiaAngularRootComponent.siteAnalyticsService = this.siteAnalyticsService;
    OppiaAngularRootComponent.skillCreationBackendApiService = this.skillCreationBackendApiService;
    OppiaAngularRootComponent.skillDifficultyObjectFactory = this.skillDifficultyObjectFactory;
    OppiaAngularRootComponent.skillMasteryBackendApiService = this.skillMasteryBackendApiService;
    OppiaAngularRootComponent.skillMasteryObjectFactory = this.skillMasteryObjectFactory;
    OppiaAngularRootComponent.skillObjectFactory = this.skillObjectFactory;
    OppiaAngularRootComponent.skillOpportunityObjectFactory = this.skillOpportunityObjectFactory;
    OppiaAngularRootComponent.skillRightsBackendApiService = this.skillRightsBackendApiService;
    OppiaAngularRootComponent.skillRightsObjectFactory = this.skillRightsObjectFactory;
    OppiaAngularRootComponent.skillSummaryObjectFactory = this.skillSummaryObjectFactory;
    OppiaAngularRootComponent.solutionObjectFactory = this.solutionObjectFactory;
    OppiaAngularRootComponent.solutionValidityService = this.solutionValidityService;
    OppiaAngularRootComponent.speechSynthesisChunkerService = this.speechSynthesisChunkerService;
    OppiaAngularRootComponent.stateCardObjectFactory = this.stateCardObjectFactory;
    OppiaAngularRootComponent.stateClassifierMappingService = this.stateClassifierMappingService;
    OppiaAngularRootComponent.stateContentService = this.stateContentService;
    OppiaAngularRootComponent.stateCustomizationArgsService = this.stateCustomizationArgsService;
    OppiaAngularRootComponent.stateEditorRefreshService = this.stateEditorRefreshService;
    OppiaAngularRootComponent.stateEditorService = this.stateEditorService;
    OppiaAngularRootComponent.keyboardShortcutService = this.keyboardShortcutService;
    OppiaAngularRootComponent.stateGraphLayoutService = this.stateGraphLayoutService;
    OppiaAngularRootComponent.stateHintsService = this.stateHintsService;
    OppiaAngularRootComponent.stateInteractionIdService = this.stateInteractionIdService;
    OppiaAngularRootComponent.stateInteractionStatsBackendApiService = this.stateInteractionStatsBackendApiService;
    OppiaAngularRootComponent.stateInteractionStatsService = this.stateInteractionStatsService;
    OppiaAngularRootComponent.stateNameService = this.stateNameService;
    OppiaAngularRootComponent.stateNextContentIdIndexService = this.stateNextContentIdIndexService;
    OppiaAngularRootComponent.stateObjectFactory = this.stateObjectFactory;
    OppiaAngularRootComponent.stateParamChangesService = this.stateParamChangesService;
    OppiaAngularRootComponent.stateRecordedVoiceoversService = this.stateRecordedVoiceoversService;
    OppiaAngularRootComponent.stateSolicitAnswerDetailsService = this.stateSolicitAnswerDetailsService;
    OppiaAngularRootComponent.stateSolutionService = this.stateSolutionService;
    OppiaAngularRootComponent.stateTopAnswersStatsBackendApiService = this.stateTopAnswersStatsBackendApiService;
    OppiaAngularRootComponent.stateTopAnswersStatsObjectFactory = this.stateTopAnswersStatsObjectFactory;
    OppiaAngularRootComponent.stateTopAnswersStatsService = this.stateTopAnswersStatsService;
    OppiaAngularRootComponent.stateStatsObjectFactory = this.stateStatsObjectFactory;
    OppiaAngularRootComponent.stateWrittenTranslationsService = this.stateWrittenTranslationsService;
    OppiaAngularRootComponent.statesObjectFactory = this.statesObjectFactory;
    OppiaAngularRootComponent.statsReportingBackendApiService = this.statsReportingBackendApiService;
    OppiaAngularRootComponent.statsReportingService = this.statsReportingService;
    OppiaAngularRootComponent.stopwatchObjectFactory = this.stopwatchObjectFactory;
    OppiaAngularRootComponent.storyContentsObjectFactory = this.storyContentsObjectFactory;
    OppiaAngularRootComponent.storyEditorNavigationService = this.storyEditorNavigationService;
    OppiaAngularRootComponent.storyNodeObjectFactory = this.storyNodeObjectFactory;
    OppiaAngularRootComponent.storyObjectFactory = this.storyObjectFactory;
    OppiaAngularRootComponent.storyPlaythroughObjectFactory = this.storyPlaythroughObjectFactory;
    OppiaAngularRootComponent.storyReferenceObjectFactory = this.storyReferenceObjectFactory;
    OppiaAngularRootComponent.storySummaryObjectFactory = this.storySummaryObjectFactory;
    OppiaAngularRootComponent.storyViewerBackendApiService = this.storyViewerBackendApiService;
    OppiaAngularRootComponent.subtitledHtmlObjectFactory = this.subtitledHtmlObjectFactory;
    OppiaAngularRootComponent.subtitledUnicodeObjectFactory = this.subtitledUnicodeObjectFactory;
    OppiaAngularRootComponent.subtopicObjectFactory = this.subtopicObjectFactory;
    OppiaAngularRootComponent.subtopicPageContentsObjectFactory = this.subtopicPageContentsObjectFactory;
    OppiaAngularRootComponent.subtopicPageObjectFactory = this.subtopicPageObjectFactory;
    OppiaAngularRootComponent.subtopicViewerBackendApiService = this.subtopicViewerBackendApiService;
    OppiaAngularRootComponent.successiveIncorrectAnswersTaskObjectFactory = this.successiveIncorrectAnswersTaskObjectFactory;
    OppiaAngularRootComponent.suggestionModalService = this.suggestionModalService;
    OppiaAngularRootComponent.suggestionObjectFactory = this.suggestionObjectFactory;
    OppiaAngularRootComponent.suggestionThreadObjectFactory = this.suggestionThreadObjectFactory;
    OppiaAngularRootComponent.suggestionsService = this.suggestionsService;
    OppiaAngularRootComponent.textInputPredictionService = this.textInputPredictionService;
    OppiaAngularRootComponent.textInputRulesService = this.textInputRulesService;
    OppiaAngularRootComponent.textInputTokenizer = this.textInputTokenizer;
    OppiaAngularRootComponent.textInputValidationService = this.textInputValidationService;
    OppiaAngularRootComponent.threadMessageObjectFactory = this.threadMessageObjectFactory;
    OppiaAngularRootComponent.threadMessageSummaryObjectFactory = this.threadMessageSummaryObjectFactory;
    OppiaAngularRootComponent.threadStatusDisplayService = this.threadStatusDisplayService;
    OppiaAngularRootComponent.topicCreationBackendApiService = this.topicCreationBackendApiService;
    OppiaAngularRootComponent.topicObjectFactory = this.topicObjectFactory;
    OppiaAngularRootComponent.topicRightsObjectFactory = this.topicRightsObjectFactory;
    OppiaAngularRootComponent.topicsAndSkillsDashboardBackendApiService = this.topicsAndSkillsDashboardBackendApiService;
    OppiaAngularRootComponent.topicSummaryObjectFactory = this.topicSummaryObjectFactory;
    OppiaAngularRootComponent.topicsAndSkillsDashboardFilterObjectFactory = this.topicsAndSkillsDashboardFilterObjectFactory;
    OppiaAngularRootComponent.topicsAndSkillsDashboardPageService = this.topicsAndSkillsDashboardPageService;
    OppiaAngularRootComponent.topicViewerBackendApiService = this.topicViewerBackendApiService;
    OppiaAngularRootComponent.translateService = this.translateService;
    OppiaAngularRootComponent.unitsObjectFactory = this.unitsObjectFactory;
    OppiaAngularRootComponent.urlInterpolationService = this.urlInterpolationService;
    OppiaAngularRootComponent.urlService = this.urlService;
    OppiaAngularRootComponent.userExplorationPermissionsService = this.userExplorationPermissionsService;
    OppiaAngularRootComponent.userInfoObjectFactory = this.userInfoObjectFactory;
    OppiaAngularRootComponent.userProfileObjectFactory = this.userProfileObjectFactory;
    OppiaAngularRootComponent.utilsService = this.utilsService;
    OppiaAngularRootComponent.validatorsService = this.validatorsService;
    OppiaAngularRootComponent.versionTreeService = this.versionTreeService;
    OppiaAngularRootComponent.visualizationInfoObjectFactory = this.visualizationInfoObjectFactory;
    OppiaAngularRootComponent.voiceoverObjectFactory = this.voiceoverObjectFactory;
    OppiaAngularRootComponent.windowDimensionsService = this.windowDimensionsService;
    OppiaAngularRootComponent.windowRef = this.windowRef;
    OppiaAngularRootComponent.winnowingPreprocessingService = this.winnowingPreprocessingService;
    OppiaAngularRootComponent.workedExampleObjectFactory = this.workedExampleObjectFactory;
    OppiaAngularRootComponent.writtenTranslationObjectFactory = this.writtenTranslationObjectFactory;
    OppiaAngularRootComponent.writtenTranslationsObjectFactory = this.writtenTranslationsObjectFactory;
    // This emit triggers ajs to start its app.
    this.initialized.emit();
  }
}
