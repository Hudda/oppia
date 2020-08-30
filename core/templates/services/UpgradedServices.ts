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
 * @fileoverview Service for storing all upgraded services
 */

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
import { TaskEntryObjectFactory } from
  'domain/improvements/TaskEntryObjectFactory';
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
import { ConceptCardBackendApiService } from
  'domain/skill/concept-card-backend-api.service';
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

import {
  HttpClient,
  HttpXhrBackend,
  // eslint-disable-next-line camelcase
  ɵangular_packages_common_http_http_d
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { downgradeInjectable } from '@angular/upgrade/static';
import { CountVectorizerService } from 'classifiers/count-vectorizer.service';
import { PythonProgramTokenizer } from 'classifiers/python-program.tokenizer';
import { SVMPredictionService } from 'classifiers/svm-prediction.service';
import { TextInputTokenizer } from 'classifiers/text-input.tokenizer';
import { WinnowingPreprocessingService } from
  'classifiers/winnowing-preprocessing.service';
import { CkEditorCopyContentService } from
  'components/ck-editor-helpers/ck-editor-copy-content-service';
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
import { StatePropertyService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-property.service';
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
  // eslint-disable-next-line max-len
  'interactions/PencilCodeEditor/directives/pencil-code-editor-validation.service';
import { RatioExpressionInputValidationService } from
  // eslint-disable-next-line max-len
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
  // eslint-disable-next-line max-len
  'pages/exploration-player-page/services/exploration-recommendations.service.ts';
import { ExtractImageFilenamesFromStateService } from
  // eslint-disable-next-line max-len
  'pages/exploration-player-page/services/extract-image-filenames-from-state.service';
import { LearnerParamsService } from
  'pages/exploration-player-page/services/learner-params.service';
import { NumberAttemptsService } from
  'pages/exploration-player-page/services/number-attempts.service';
import { PlayerCorrectnessFeedbackEnabledService } from
  // eslint-disable-next-line max-len
  'pages/exploration-player-page/services/player-correctness-feedback-enabled.service';
import { PlayerPositionService } from
  'pages/exploration-player-page/services/player-position.service';
import { PlayerTranscriptService } from
  'pages/exploration-player-page/services/player-transcript.service';
import { PredictionAlgorithmRegistryService } from
  // eslint-disable-next-line max-len
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
import { HtmlEscaperService } from 'services/html-escaper.service';
import { I18nLanguageCodeService } from 'services/i18n-language-code.service';
import { IdGenerationService } from 'services/id-generation.service';
import { ImprovementsService } from 'services/improvements.service';
import { InteractionRulesRegistryService } from
  'services/interaction-rules-registry.service';
import { InteractionSpecsService } from 'services/interaction-specs.service';
import { LoaderService } from 'services/loader.service';
import { LocalStorageService } from 'services/local-storage.service';
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
import { TranslationsBackendApiService } from
  'services/translations-backend-api.service';
import { UtilsService } from 'services/utils.service';
import { ValidatorsService } from 'services/validators.service';

interface UpgradedServicesDict {
  [service: string]: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class UpgradedServices {
  getUpgradedServices(): UpgradedServicesDict {
    var upgradedServices = {};
    /* eslint-disable dot-notation */

    // Topological level: 0.
    upgradedServices['AdminRouterService'] = new AdminRouterService();
    upgradedServices['AdminTaskManagerService'] = new AdminTaskManagerService();
    upgradedServices['AlgebraicExpressionInputRulesService'] =
      new AlgebraicExpressionInputRulesService();
    upgradedServices['AngularNameService'] = new AngularNameService();
    upgradedServices['AnswerClassificationResultObjectFactory'] =
      new AnswerClassificationResultObjectFactory();
    upgradedServices['AnswerGroupsCacheService'] =
      new AnswerGroupsCacheService();
    upgradedServices['AnswerStatsObjectFactory'] =
      new AnswerStatsObjectFactory();
    upgradedServices['AudioFileObjectFactory'] = new AudioFileObjectFactory();
    upgradedServices['AppService'] = new AppService();
    upgradedServices['AssignedSkillObjectFactory'] =
      new AssignedSkillObjectFactory();
    upgradedServices['AudioBarStatusService'] = new AudioBarStatusService();
    upgradedServices['AudioFileObjectFactory'] = new AudioFileObjectFactory();
    upgradedServices['AudioLanguageObjectFactory'] =
      new AudioLanguageObjectFactory();
    upgradedServices['AudioTranslationManagerService'] =
      new AudioTranslationManagerService();
    upgradedServices['AugmentedSkillSummaryObjectFactory'] =
      new AugmentedSkillSummaryObjectFactory();
    upgradedServices['AutogeneratedAudioLanguageObjectFactory'] =
      new AutogeneratedAudioLanguageObjectFactory();
    upgradedServices['AutoplayedVideosService'] = new AutoplayedVideosService();
    upgradedServices['BackgroundMaskService'] = new BackgroundMaskService();
    upgradedServices['baseInteractionValidationService'] =
      new baseInteractionValidationService();
    upgradedServices['BrowserCheckerService'] =
      new BrowserCheckerService(new WindowRef());
    upgradedServices['CamelCaseToHyphensPipe'] = new CamelCaseToHyphensPipe();
    upgradedServices['ChangeObjectFactory'] = new ChangeObjectFactory();
    upgradedServices['ClassifierObjectFactory'] = new ClassifierObjectFactory();
    upgradedServices['ClientContextObjectFactory'] =
      new ClientContextObjectFactory();
    upgradedServices['CodeNormalizerService'] = new CodeNormalizerService();
    upgradedServices['CollectionNodeObjectFactory'] =
      new CollectionNodeObjectFactory();
    upgradedServices['CollectionPlaythroughObjectFactory'] =
      new CollectionPlaythroughObjectFactory();
    upgradedServices['CollectionRightsObjectFactory'] =
      new CollectionRightsObjectFactory();
    upgradedServices['CollectionSummaryObjectFactory'] =
      new CollectionSummaryObjectFactory();
    upgradedServices['CollectionValidationService'] =
      new CollectionValidationService();
    upgradedServices['ComputationDataObjectFactory'] =
      new ComputationDataObjectFactory();
    upgradedServices['ComputeGraphService'] = new ComputeGraphService();
    upgradedServices['ConstructTranslationIdsService'] =
      new ConstructTranslationIdsService();
    upgradedServices['ContinueRulesService'] = new ContinueRulesService();
    upgradedServices['CountVectorizerService'] = new CountVectorizerService();
    upgradedServices['CreatorExplorationSummaryObjectFactory'] =
      new CreatorExplorationSummaryObjectFactory();
    upgradedServices['CreatorDashboardStatsObjectFactory'] =
      new CreatorDashboardStatsObjectFactory();
    upgradedServices['CsrfTokenService'] = new CsrfTokenService();
    upgradedServices['DateTimeFormatService'] = new DateTimeFormatService();
    upgradedServices['DebouncerService'] = new DebouncerService();
    upgradedServices['DragAndDropSortInputRulesService'] =
      new DragAndDropSortInputRulesService();
    upgradedServices['EditabilityService'] = new EditabilityService();
    upgradedServices['EmailDashboardQueryObjectFactory'] =
      new EmailDashboardQueryObjectFactory();
    upgradedServices['EndExplorationRulesService'] =
      new EndExplorationRulesService();
    upgradedServices['EntityContextObjectFactory'] =
      new EntityContextObjectFactory();
    upgradedServices['ExplorationDiffService'] = new ExplorationDiffService();
    upgradedServices['ExplorationDraftObjectFactory'] =
      new ExplorationDraftObjectFactory();
    upgradedServices['ExplorationFeaturesService'] =
      new ExplorationFeaturesService();
    upgradedServices['ExplorationImprovementsConfigObjectFactory'] =
      new ExplorationImprovementsConfigObjectFactory();
    upgradedServices['ExplorationPermissionsObjectFactory'] =
      new ExplorationPermissionsObjectFactory();
    upgradedServices['ExplorationMetadataObjectFactory'] =
      new ExplorationMetadataObjectFactory();
    upgradedServices['ExplorationOpportunitySummaryObjectFactory'] =
      new ExplorationOpportunitySummaryObjectFactory();
    upgradedServices['ExpressionParserService'] = new ExpressionParserService();
    upgradedServices['ExternalSaveService'] = new ExternalSaveService();
    upgradedServices['FeaturedTranslationLanguageObjectFactory'] =
      new FeaturedTranslationLanguageObjectFactory();
    upgradedServices['FeatureStatusSummaryObjectFactory'] =
      new FeatureStatusSummaryObjectFactory();
    upgradedServices['FeedbackMessageSummaryObjectFactory'] =
      new FeedbackMessageSummaryObjectFactory();
    upgradedServices['FeedbackThreadSummaryObjectFactory'] =
      new FeedbackThreadSummaryObjectFactory();
    upgradedServices['FileDownloadRequestObjectFactory'] =
      new FileDownloadRequestObjectFactory();
    upgradedServices['FractionObjectFactory'] = new FractionObjectFactory();
    upgradedServices['GraphDetailService'] = new GraphDetailService();
    upgradedServices['GraphUtilsService'] = new GraphUtilsService();
    upgradedServices['GuestCollectionProgressObjectFactory'] =
      new GuestCollectionProgressObjectFactory();
    upgradedServices['HighBounceRateTaskObjectFactory'] =
      new HighBounceRateTaskObjectFactory();
    upgradedServices['I18nLanguageCodeService'] = new I18nLanguageCodeService();
    upgradedServices['IdGenerationService'] = new IdGenerationService();
    upgradedServices['ImageClickInputRulesService'] =
      new ImageClickInputRulesService();
    upgradedServices['ImageFileObjectFactory'] = new ImageFileObjectFactory();
    upgradedServices['ImprovementsService'] = new ImprovementsService();
    upgradedServices['IneffectiveFeedbackLoopTaskObjectFactory'] =
      new IneffectiveFeedbackLoopTaskObjectFactory();
    upgradedServices['InteractionDetailsCacheService'] =
      new InteractionDetailsCacheService();
    upgradedServices['InteractiveMapRulesService'] =
      new InteractiveMapRulesService();
    upgradedServices['InteractionSpecsService'] = new InteractionSpecsService();
    upgradedServices['ItemSelectionInputRulesService'] =
      new ItemSelectionInputRulesService();
    upgradedServices['JobDataObjectFactory'] = new JobDataObjectFactory();
    upgradedServices['JobStatusSummaryObjectFactory'] =
      new JobStatusSummaryObjectFactory();
    upgradedServices['LearnerActionObjectFactory'] =
      new LearnerActionObjectFactory();
    upgradedServices['LearnerAnswerDetailsObjectFactory'] =
      new LearnerAnswerDetailsObjectFactory();
    upgradedServices['LearnerAnswerInfoObjectFactory'] =
      new LearnerAnswerInfoObjectFactory();
    upgradedServices['LearnerDashboardActivityIdsObjectFactory'] =
      new LearnerDashboardActivityIdsObjectFactory();
    upgradedServices['LearnerExplorationSummaryObjectFactory'] =
      new LearnerExplorationSummaryObjectFactory();
    upgradedServices['LearnerParamsService'] = new LearnerParamsService();
    upgradedServices['LoaderService'] = new LoaderService();
    upgradedServices['LoggerService'] = new LoggerService();
    upgradedServices['LogicProofRulesService'] = new LogicProofRulesService();
    upgradedServices['LostChangeObjectFactory'] = new LostChangeObjectFactory(
      new UtilsService);
    upgradedServices['MathEquationInputRulesService'] =
      new MathEquationInputRulesService();
    upgradedServices['MisconceptionObjectFactory'] =
      new MisconceptionObjectFactory();
    upgradedServices['MultipleChoiceInputRulesService'] =
      new MultipleChoiceInputRulesService();
    upgradedServices['MusicPhrasePlayerService'] =
      new MusicPhrasePlayerService();
    upgradedServices['NeedsGuidingResponsesTaskObjectFactory'] =
      new NeedsGuidingResponsesTaskObjectFactory();
    upgradedServices['NormalizeWhitespacePunctuationAndCasePipe'] =
      new NormalizeWhitespacePunctuationAndCasePipe();
    upgradedServices['NumberAttemptsService'] = new NumberAttemptsService();
    upgradedServices['NumericExpressionInputRulesService'] =
      new NumericExpressionInputRulesService();
    upgradedServices['NumericInputRulesService'] =
      new NumericInputRulesService();
    upgradedServices['NewlyCreatedTopicObjectFactory'] =
        new NewlyCreatedTopicObjectFactory();
    upgradedServices['NonExistentActivitiesObjectFactory'] =
      new NonExistentActivitiesObjectFactory();
    upgradedServices['ParamChangeObjectFactory'] =
      new ParamChangeObjectFactory();
    upgradedServices['ParamMetadataObjectFactory'] =
      new ParamMetadataObjectFactory();
    upgradedServices['ParamTypeObjectFactory'] = new ParamTypeObjectFactory();
    upgradedServices['PlatformParameterFilterObjectFactory'] =
      new PlatformParameterFilterObjectFactory();
    upgradedServices['PlayerCorrectnessFeedbackEnabledService'] =
      new PlayerCorrectnessFeedbackEnabledService();
    upgradedServices['PlaythroughIssueObjectFactory'] =
      new PlaythroughIssueObjectFactory();
    upgradedServices['PredictionResultObjectFactory'] =
      new PredictionResultObjectFactory();
    upgradedServices['ProfileSummaryObjectFactory'] =
      new ProfileSummaryObjectFactory();
    upgradedServices['QuestionSummaryObjectFactory'] =
      new QuestionSummaryObjectFactory();
    upgradedServices['RatingComputationService'] =
      new RatingComputationService();
    upgradedServices['RatioObjectFactory'] = new RatioObjectFactory();
    upgradedServices['ReviewTestEngineService'] = new ReviewTestEngineService();
    upgradedServices['ReviewTestObjectFactory'] = new ReviewTestObjectFactory();
    upgradedServices['RubricObjectFactory'] =
      new RubricObjectFactory();
    upgradedServices['RuleObjectFactory'] = new RuleObjectFactory();
    upgradedServices['SchemaFormSubmittedService'] =
      new SchemaFormSubmittedService();
    upgradedServices['SchemaUndefinedLastElementService'] =
      new SchemaUndefinedLastElementService();
    upgradedServices['SetInputRulesService'] = new SetInputRulesService();
    upgradedServices['ShortSkillSummaryObjectFactory'] =
      new ShortSkillSummaryObjectFactory();
    upgradedServices['SkillDifficultyObjectFactory'] =
      new SkillDifficultyObjectFactory();
    upgradedServices['SkillMasteryObjectFactory'] =
      new SkillMasteryObjectFactory();
    upgradedServices['SkillOpportunityObjectFactory'] =
      new SkillOpportunityObjectFactory();
    upgradedServices['SkillRightsObjectFactory'] =
      new SkillRightsObjectFactory();
    upgradedServices['SkillSummaryObjectFactory'] =
      new SkillSummaryObjectFactory();
    upgradedServices['SolutionValidityService'] = new SolutionValidityService();
    upgradedServices['StateEditorRefreshService'] =
      new StateEditorRefreshService();
    upgradedServices['StateGraphLayoutService'] = new StateGraphLayoutService();
    upgradedServices['StateNameService'] = new StateNameService();
    upgradedServices['StateStatsObjectFactory'] = new StateStatsObjectFactory();
    upgradedServices['StopwatchObjectFactory'] = new StopwatchObjectFactory();
    upgradedServices['StoryNodeObjectFactory'] = new StoryNodeObjectFactory();
    upgradedServices['StoryContentsObjectFactory'] =
      new StoryContentsObjectFactory(
        upgradedServices['StoryNodeObjectFactory']);
    upgradedServices['StoryObjectFactory'] = new StoryObjectFactory(
      upgradedServices['StoryContentsObjectFactory']);
    upgradedServices['StoryReferenceObjectFactory'] =
      new StoryReferenceObjectFactory();
    upgradedServices['StorySummaryObjectFactory'] =
      new StorySummaryObjectFactory();
    upgradedServices['SubtitledHtmlObjectFactory'] =
      new SubtitledHtmlObjectFactory();
    upgradedServices['SubtitledUnicodeObjectFactory'] =
      new SubtitledUnicodeObjectFactory();
    upgradedServices['SuccessiveIncorrectAnswersTaskObjectFactory'] =
      new SuccessiveIncorrectAnswersTaskObjectFactory();
    upgradedServices['SuggestionModalService'] = new SuggestionModalService();
    upgradedServices['SuggestionsService'] = new SuggestionsService();
    upgradedServices['TaskEntryObjectFactory'] = new TaskEntryObjectFactory();
    upgradedServices['TextInputTokenizer'] = new TextInputTokenizer();
    upgradedServices['ThreadMessageSummaryObjectFactory'] =
      new ThreadMessageSummaryObjectFactory();
    upgradedServices['ThreadStatusDisplayService'] =
      new ThreadStatusDisplayService();
    upgradedServices['Title'] = new Title({});
    upgradedServices['TopicsAndSkillsDashboardFilterObjectFactory'] =
        new TopicsAndSkillsDashboardFilterObjectFactory();
    upgradedServices['TopicsAndSkillsDashboardPageService'] =
        new TopicsAndSkillsDashboardPageService();
    upgradedServices['TopicRightsObjectFactory'] =
      new TopicRightsObjectFactory();
    upgradedServices['TopicSummaryObjectFactory'] =
      new TopicSummaryObjectFactory();
    upgradedServices['UnitsObjectFactory'] = new UnitsObjectFactory();
    upgradedServices['UserInfoObjectFactory'] = new UserInfoObjectFactory();
    upgradedServices['UtilsService'] = new UtilsService();
    upgradedServices['VersionTreeService'] = new VersionTreeService();
    upgradedServices['VoiceoverObjectFactory'] = new VoiceoverObjectFactory();
    upgradedServices['VisualizationInfoObjectFactory'] =
      new VisualizationInfoObjectFactory();
    upgradedServices['WindowRef'] = new WindowRef();
    upgradedServices['WinnowingPreprocessingService'] =
      new WinnowingPreprocessingService();
    upgradedServices['WrittenTranslationObjectFactory'] =
      new WrittenTranslationObjectFactory();
    upgradedServices['baseInteractionValidationService'] =
      new baseInteractionValidationService();
    upgradedServices['ɵangular_packages_common_http_http_d'] =
      new ɵangular_packages_common_http_http_d();

    // Topological level: 1.
    upgradedServices['AlgebraicExpressionInputValidationService'] =
      new AlgebraicExpressionInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['AlertsService'] = new AlertsService(
      upgradedServices['LoggerService']);
    upgradedServices['BrowserCheckerService'] = new BrowserCheckerService(
      upgradedServices['WindowRef']);
    upgradedServices['ClassroomDataObjectFactory'] =
      new ClassroomDataObjectFactory(
        upgradedServices['TopicSummaryObjectFactory']);
    upgradedServices['CodeReplValidationService'] =
      new CodeReplValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['CollectionObjectFactory'] =
      new CollectionObjectFactory(
        upgradedServices['CollectionNodeObjectFactory'],
        upgradedServices['CollectionPlaythroughObjectFactory']);
    upgradedServices['ContinueValidationService'] =
      new ContinueValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['DeviceInfoService'] = new DeviceInfoService(
      upgradedServices['WindowRef']);
    upgradedServices['DocumentAttributeCustomizationService'] =
      new DocumentAttributeCustomizationService(upgradedServices['WindowRef']);
    upgradedServices['EmailDashboardQueryResultsObjectFactory'] =
      new EmailDashboardQueryResultsObjectFactory(
        upgradedServices['EmailDashboardQueryObjectFactory']);
    upgradedServices['DragAndDropSortInputValidationService'] =
      new DragAndDropSortInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['EndExplorationValidationService'] =
      new EndExplorationValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['ExplorationStatsObjectFactory'] =
      new ExplorationStatsObjectFactory(
        upgradedServices['StateStatsObjectFactory']);
    upgradedServices['ExplorationTaskObjectFactory'] =
      new ExplorationTaskObjectFactory(
        upgradedServices['HighBounceRateTaskObjectFactory'],
        upgradedServices['IneffectiveFeedbackLoopTaskObjectFactory'],
        upgradedServices['NeedsGuidingResponsesTaskObjectFactory'],
        upgradedServices['SuccessiveIncorrectAnswersTaskObjectFactory']);
    upgradedServices['ExpressionSyntaxTreeService'] =
      new ExpressionSyntaxTreeService(
        upgradedServices['ExpressionParserService']);
    upgradedServices['FeedbackThreadObjectFactory'] =
      new FeedbackThreadObjectFactory(
        upgradedServices['ThreadMessageSummaryObjectFactory']);
    upgradedServices['FractionInputRulesService'] =
      new FractionInputRulesService(
        upgradedServices['FractionObjectFactory'],
        upgradedServices['UtilsService']);
    upgradedServices['FractionInputValidationService'] =
      new FractionInputValidationService(
        upgradedServices['FractionObjectFactory'],
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['GraphInputRulesService'] =
      new GraphInputRulesService(
        upgradedServices['GraphUtilsService'],
        upgradedServices['UtilsService']);
    upgradedServices['GraphInputValidationService'] =
      new GraphInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['GuestCollectionProgressService'] =
      new GuestCollectionProgressService(
        upgradedServices['GuestCollectionProgressObjectFactory'],
        upgradedServices['WindowRef']);
    upgradedServices['HintObjectFactory'] = new HintObjectFactory(
      upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['HtmlEscaperService'] = new HtmlEscaperService(
      upgradedServices['LoggerService']);
    upgradedServices['HttpXhrBackend'] = new HttpXhrBackend(
      upgradedServices['ɵangular_packages_common_http_http_d']);
    upgradedServices['ImageClickInputValidationService'] =
      new ImageClickInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['InteractiveMapValidationService'] =
      new InteractiveMapValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['ItemSelectionInputValidationService'] =
      new ItemSelectionInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['LocalStorageService'] = new LocalStorageService(
      upgradedServices['ExplorationDraftObjectFactory']);
    upgradedServices['LogicProofValidationService'] =
      new LogicProofValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['MathEquationInputValidationService'] =
      new MathEquationInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['MessengerService'] = new MessengerService(
      upgradedServices['LoggerService'],
      upgradedServices['WindowRef']);
    upgradedServices['MetaTagCustomizationService'] =
      new MetaTagCustomizationService(upgradedServices['WindowRef']);
    upgradedServices['MultipleChoiceInputValidationService'] =
      new MultipleChoiceInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['MusicNotesInputRulesService'] =
      new MusicNotesInputRulesService(
        upgradedServices['UtilsService']);
    upgradedServices['MusicNotesInputValidationService'] =
      new MusicNotesInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['NormalizeWhitespacePipe'] = new NormalizeWhitespacePipe(
      upgradedServices['UtilsService']);
    upgradedServices['NumericInputValidationService'] =
      new NumericInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['NumberWithUnitsObjectFactory'] =
      new NumberWithUnitsObjectFactory(
        upgradedServices['UnitsObjectFactory'],
        upgradedServices['FractionObjectFactory']);
    upgradedServices['NumericExpressionInputValidationService'] =
      new NumericExpressionInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['NumberWithUnitsRulesService'] =
      new NumberWithUnitsRulesService(
        upgradedServices['UnitsObjectFactory'],
        upgradedServices['UtilsService']);
    upgradedServices['OutcomeObjectFactory'] =
      new OutcomeObjectFactory(upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['PageTitleService'] = new PageTitleService(
      upgradedServices['Title']);
    upgradedServices['ParamChangesObjectFactory'] =
      new ParamChangesObjectFactory(
        upgradedServices['ParamChangeObjectFactory']);
    upgradedServices['ParamMetadataObjectFactory'] =
      new ParamMetadataObjectFactory();
    upgradedServices['ParamSpecObjectFactory'] = new ParamSpecObjectFactory(
      upgradedServices['ParamTypeObjectFactory']);
    upgradedServices['PencilCodeEditorValidationService'] =
      new PencilCodeEditorValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['PlatformParameterRuleObjectFactory'] =
      new PlatformParameterRuleObjectFactory(
        upgradedServices['PlatformParameterFilterObjectFactory']);
    upgradedServices['PlayerTranscriptService'] = new PlayerTranscriptService(
      upgradedServices['LoggerService']);
    upgradedServices['PlaythroughObjectFactory'] = new PlaythroughObjectFactory(
      upgradedServices['LearnerActionObjectFactory']);
    upgradedServices['PythonProgramTokenizer'] = new PythonProgramTokenizer(
      upgradedServices['LoggerService']);
    upgradedServices['QuestionSummaryForOneSkillObjectFactory'] =
      new QuestionSummaryForOneSkillObjectFactory(
        upgradedServices['QuestionSummaryObjectFactory']);
    upgradedServices['ReadOnlyStoryNodeObjectFactory'] =
        new ReadOnlyStoryNodeObjectFactory(
          upgradedServices['LearnerExplorationSummaryObjectFactory']);
    upgradedServices['RatioExpressionInputValidationService'] =
          new RatioExpressionInputValidationService(
            upgradedServices['RatioObjectFactory'],
            upgradedServices['baseInteractionValidationService']);
    upgradedServices['RecordedVoiceoversObjectFactory'] =
      new RecordedVoiceoversObjectFactory(
        upgradedServices['VoiceoverObjectFactory']);
    upgradedServices['SetInputValidationService'] =
      new SetInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['SkillCreationBackendApiService'] =
        new SkillCreationBackendApiService(upgradedServices['HttpClient']);
    upgradedServices['StateTopAnswersStatsObjectFactory'] =
        new StateTopAnswersStatsObjectFactory(
          upgradedServices['AnswerStatsObjectFactory']);
    upgradedServices['SpeechSynthesisChunkerService'] =
        new SpeechSynthesisChunkerService(
          upgradedServices['HtmlEscaperService']);
    upgradedServices['SVMPredictionService'] = new SVMPredictionService(
      upgradedServices['PredictionResultObjectFactory']);
    upgradedServices['SchemaDefaultValueService'] =
      new SchemaDefaultValueService(
        upgradedServices['LoggerService'],
        upgradedServices['SubtitledHtmlObjectFactory'],
        upgradedServices['SubtitledUnicodeObjectFactory']);
    upgradedServices['SiteAnalyticsService'] = new SiteAnalyticsService(
      upgradedServices['WindowRef']);
    upgradedServices['StateClassifierMappingService'] =
      new StateClassifierMappingService(
        upgradedServices['ClassifierObjectFactory']);
    upgradedServices['StateEditorService'] = new StateEditorService(
      upgradedServices['SolutionValidityService']);
    upgradedServices['StoryContentsObjectFactory'] =
      new StoryContentsObjectFactory(
        upgradedServices['StoryNodeObjectFactory']);
    upgradedServices['StoryPlaythroughObjectFactory'] =
      new StoryPlaythroughObjectFactory(
        upgradedServices['ReadOnlyStoryNodeObjectFactory']);
    upgradedServices['SubtopicObjectFactory'] = new SubtopicObjectFactory(
      upgradedServices['ShortSkillSummaryObjectFactory']);
    upgradedServices['SuggestionObjectFactory'] = new SuggestionObjectFactory(
      upgradedServices['SuggestionsService']);
    upgradedServices['TextInputValidationService'] =
      new TextInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['ThreadMessageObjectFactory'] =
      new ThreadMessageObjectFactory(
        upgradedServices['ThreadMessageSummaryObjectFactory']);
    upgradedServices['TopicCreationBackendApiService'] =
        new TopicCreationBackendApiService(
          upgradedServices['HttpClient']);
    upgradedServices['UrlService'] = new UrlService(
      upgradedServices['WindowRef']);
    upgradedServices['UserProfileObjectFactory'] =
      new UserProfileObjectFactory(
        upgradedServices['LearnerExplorationSummaryObjectFactory']);
    upgradedServices['WindowDimensionsService'] = new WindowDimensionsService(
      upgradedServices['WindowRef']);
    upgradedServices['WorkedExampleObjectFactory'] =
      new WorkedExampleObjectFactory(
        upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['WrittenTranslationsObjectFactory'] =
      new WrittenTranslationsObjectFactory(
        upgradedServices['WrittenTranslationObjectFactory']);

    // Topological level: 2.
    upgradedServices['AnswerGroupObjectFactory'] = new AnswerGroupObjectFactory(
      upgradedServices['OutcomeObjectFactory'],
      upgradedServices['RuleObjectFactory']);
    upgradedServices['CkEditorCopyContentService'] =
      new CkEditorCopyContentService(
        upgradedServices['HtmlEscaperService'],);
    upgradedServices['AutogeneratedAudioPlayerService'] =
      new AutogeneratedAudioPlayerService(
        upgradedServices['SpeechSynthesisChunkerService']);
    upgradedServices['BottomNavbarStatusService'] = (
      new BottomNavbarStatusService(
        upgradedServices['WindowDimensionsService']));
    upgradedServices['CodeReplPredictionService'] =
      new CodeReplPredictionService(
        upgradedServices['CountVectorizerService'],
        upgradedServices['PythonProgramTokenizer'],
        upgradedServices['SVMPredictionService'],
        upgradedServices['WinnowingPreprocessingService']);
    upgradedServices['CodeReplRulesService'] = new CodeReplRulesService(
      upgradedServices['NormalizeWhitespacePipe'],
      upgradedServices['CodeNormalizerService']);
    upgradedServices['ConceptCardObjectFactory'] = new ConceptCardObjectFactory(
      upgradedServices['SubtitledHtmlObjectFactory'],
      upgradedServices['RecordedVoiceoversObjectFactory'],
      upgradedServices['WorkedExampleObjectFactory']);
    upgradedServices['ContextService'] = new ContextService(
      upgradedServices['UrlService'],
      upgradedServices['EntityContextObjectFactory']);
    upgradedServices['EditorFirstTimeEventsService'] =
      new EditorFirstTimeEventsService(
        upgradedServices['SiteAnalyticsService']);
    upgradedServices['ExplorationImprovementsTaskRegistryService'] =
      new ExplorationImprovementsTaskRegistryService(
        upgradedServices['ExplorationTaskObjectFactory']);
    upgradedServices['ExtensionTagAssemblerService'] =
      new ExtensionTagAssemblerService(
        upgradedServices['HtmlEscaperService'],
        upgradedServices['CamelCaseToHyphensPipe']);
    upgradedServices['ExtractImageFilenamesFromStateService'] =
      new ExtractImageFilenamesFromStateService(
        upgradedServices['HtmlEscaperService']);
    upgradedServices['HttpClient'] = new HttpClient(
      upgradedServices['HttpXhrBackend']);
    upgradedServices['LanguageUtilService'] = new LanguageUtilService(
      upgradedServices['AudioLanguageObjectFactory'],
      upgradedServices['AutogeneratedAudioLanguageObjectFactory'],
      upgradedServices['BrowserCheckerService']);
    upgradedServices['NumberWithUnitsValidationService'] =
      new NumberWithUnitsValidationService(
        upgradedServices['NumberWithUnitsObjectFactory'],
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['ParamSpecsObjectFactory'] = new ParamSpecsObjectFactory(
      upgradedServices['ParamSpecObjectFactory']);
    upgradedServices['PencilCodeEditorRulesService'] =
      new PencilCodeEditorRulesService(
        upgradedServices['NormalizeWhitespacePipe'],
        upgradedServices['NormalizeWhitespacePunctuationAndCasePipe'],
        upgradedServices['CodeNormalizerService']);
    upgradedServices['PlatformParameterObjectFactory'] =
      new PlatformParameterObjectFactory(
        upgradedServices['PlatformParameterRuleObjectFactory']);
    upgradedServices['SidebarStatusService'] = new SidebarStatusService(
      upgradedServices['WindowDimensionsService']);
    upgradedServices['StateContentService'] = new StateContentService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateCustomizationArgsService'] =
      new StateCustomizationArgsService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateHintsService'] = new StateHintsService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateInteractionIdService'] =
      new StateInteractionIdService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateNextContentIdIndexService'] =
      new StateNextContentIdIndexService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StatePropertyService'] = new StatePropertyService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateRecordedVoiceoversService'] =
      new StateRecordedVoiceoversService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateSolicitAnswerDetailsService'] =
      new StateSolicitAnswerDetailsService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateSolutionService'] = new StateSolutionService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateWrittenTranslationsService'] =
      new StateWrittenTranslationsService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StoryEditorNavigationService'] =
        new StoryEditorNavigationService(upgradedServices['WindowRef']);
    upgradedServices['SubtopicPageContentsObjectFactory'] =
      new SubtopicPageContentsObjectFactory(
        upgradedServices['RecordedVoiceoversObjectFactory'],
        upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['SubtopicPageObjectFactory'] =
      new SubtopicPageObjectFactory(
        upgradedServices['SubtopicPageContentsObjectFactory']);
    upgradedServices['StoryObjectFactory'] =
      new StoryObjectFactory(upgradedServices['StoryContentsObjectFactory']);
    upgradedServices['SuggestionThreadObjectFactory'] =
      new SuggestionThreadObjectFactory(
        upgradedServices['SuggestionObjectFactory'],
        upgradedServices['ThreadMessageSummaryObjectFactory']);
    upgradedServices['TextInputRulesService'] = new TextInputRulesService(
      upgradedServices['NormalizeWhitespacePipe']);
    upgradedServices['TopicObjectFactory'] = new TopicObjectFactory(
      upgradedServices['SubtopicObjectFactory'],
      upgradedServices['StoryReferenceObjectFactory'],
      upgradedServices['ShortSkillSummaryObjectFactory']);
    upgradedServices['UrlInterpolationService'] = new UrlInterpolationService(
      upgradedServices['AlertsService'], upgradedServices['UrlService'],
      upgradedServices['UtilsService']);
    upgradedServices['ValidatorsService'] = new ValidatorsService(
      upgradedServices['AlertsService'],
      upgradedServices['NormalizeWhitespacePipe']);

    // Topological level: 3.
    upgradedServices['AdminBackendApiService'] = new AdminBackendApiService(
      upgradedServices['HttpClient'],
      upgradedServices['ComputationDataObjectFactory'],
      upgradedServices['JobDataObjectFactory'],
      upgradedServices['JobStatusSummaryObjectFactory'],
      upgradedServices['TopicSummaryObjectFactory']);
    upgradedServices['AdminDataService'] = new AdminDataService(
      upgradedServices['HttpClient']);
    upgradedServices['EmailDashboardBackendApiService'] =
      new EmailDashboardBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['EmailDashboardQueryResultsObjectFactory'],
        upgradedServices['EmailDashboardQueryObjectFactory']);
    upgradedServices['ExplorationPermissionsBackendApiService'] =
      new ExplorationPermissionsBackendApiService(
        upgradedServices['ContextService'],
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService'],
        upgradedServices['ExplorationPermissionsObjectFactory']);
    upgradedServices['ExplorationRecommendationsBackendApiService'] =
      new ExplorationRecommendationsBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['LearnerExplorationSummaryObjectFactory']);
    upgradedServices['InteractionRulesRegistryService'] =
      new InteractionRulesRegistryService(
        upgradedServices['AlgebraicExpressionInputRulesService'],
        upgradedServices['CodeReplRulesService'],
        upgradedServices['ContinueRulesService'],
        upgradedServices['DragAndDropSortInputRulesService'],
        upgradedServices['EndExplorationRulesService'],
        upgradedServices['FractionInputRulesService'],
        upgradedServices['GraphInputRulesService'],
        upgradedServices['ImageClickInputRulesService'],
        upgradedServices['InteractiveMapRulesService'],
        upgradedServices['ItemSelectionInputRulesService'],
        upgradedServices['LogicProofRulesService'],
        upgradedServices['MathEquationInputRulesService'],
        upgradedServices['MultipleChoiceInputRulesService'],
        upgradedServices['MusicNotesInputRulesService'],
        upgradedServices['NumberWithUnitsRulesService'],
        upgradedServices['NumericExpressionInputRulesService'],
        upgradedServices['NumericInputRulesService'],
        upgradedServices['PencilCodeEditorRulesService'],
        upgradedServices['RatioExpressionInputRulesService'],
        upgradedServices['SetInputRulesService'],
        upgradedServices['TextInputRulesService']);
    upgradedServices['AudioTranslationLanguageService'] =
      new AudioTranslationLanguageService(
        upgradedServices['BrowserCheckerService'],
        upgradedServices['LanguageUtilService']);
    upgradedServices['ConceptCardBackendApiService'] =
      new ConceptCardBackendApiService(
        upgradedServices['ConceptCardObjectFactory'],
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['ClassroomBackendApiService'] =
      new ClassroomBackendApiService(
        upgradedServices['UrlInterpolationService'],
        upgradedServices['HttpClient'],
        upgradedServices['TopicSummaryObjectFactory']);
    upgradedServices['CollectionCreationBackendService'] = (
      new CollectionCreationBackendService(
        upgradedServices['HttpClient']));
    upgradedServices['CollectionRightsBackendApiService'] =
      new CollectionRightsBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['ContributionOpportunitiesBackendApiService'] =
      new ContributionOpportunitiesBackendApiService(
        upgradedServices['UrlInterpolationService'],
        upgradedServices['HttpClient'],
        upgradedServices['FeaturedTranslationLanguageObjectFactory']);
    upgradedServices['CreatorDashboardBackendApiService'] =
      new CreatorDashboardBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['CollectionSummaryObjectFactory'],
        upgradedServices['CreatorDashboardStatsObjectFactory'],
        upgradedServices['CreatorExplorationSummaryObjectFactory'],
        upgradedServices['ProfileSummaryObjectFactory'],
        upgradedServices['FeedbackThreadObjectFactory'],
        upgradedServices['SuggestionObjectFactory'],
        upgradedServices['SuggestionThreadObjectFactory'],
        upgradedServices['SuggestionsService'],
        upgradedServices['TopicSummaryObjectFactory'],
        upgradedServices['LoggerService']);
    upgradedServices['CurrentInteractionService'] =
      new CurrentInteractionService(
        upgradedServices['ContextService'],
        upgradedServices['PlayerPositionService'],
        upgradedServices['PlayerTranscriptService']);
    upgradedServices['EmailDashboardDataService'] =
      new EmailDashboardDataService(upgradedServices['HttpClient']);
    upgradedServices['ExplorationFeaturesBackendApiService'] =
      new ExplorationFeaturesBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['ExplorationHtmlFormatterService'] =
      new ExplorationHtmlFormatterService(
        upgradedServices['CamelCaseToHyphensPipe'],
        upgradedServices['ExtensionTagAssemblerService'],
        upgradedServices['HtmlEscaperService']);
    upgradedServices['ExplorationImprovementsBackendApiService'] =
      new ExplorationImprovementsBackendApiService(
        upgradedServices['ExplorationTaskObjectFactory'],
        upgradedServices['ExplorationImprovementsConfigObjectFactory'],
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['ExplorationStatsBackendApiService'] =
      new ExplorationStatsBackendApiService(
        upgradedServices['ExplorationStatsObjectFactory'],
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['GenerateContentIdService'] =
     new GenerateContentIdService(
       upgradedServices['StateNextContentIdIndexService']);
    upgradedServices['LearnerAnswerDetailsBackendApiService'] =
        new LearnerAnswerDetailsBackendApiService(
          upgradedServices['HttpClient'],
          upgradedServices['UrlInterpolationService']);
    upgradedServices['LearnerDashboardBackendApiService'] =
      new LearnerDashboardBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['CollectionSummaryObjectFactory'],
        upgradedServices['FeedbackThreadSummaryObjectFactory'],
        upgradedServices['LearnerExplorationSummaryObjectFactory'],
        upgradedServices['NonExistentActivitiesObjectFactory'],
        upgradedServices['ProfileSummaryObjectFactory']);
    upgradedServices['LearnerDashboardIdsBackendApiService'] =
        new LearnerDashboardIdsBackendApiService(
          upgradedServices['HttpClient'],
          upgradedServices['LearnerDashboardActivityIdsObjectFactory']);
    upgradedServices['PlayerPositionService'] = new PlayerPositionService(
      upgradedServices['PlayerTranscriptService']);
    upgradedServices['PlaythroughBackendApiService'] =
      new PlaythroughBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['PlaythroughIssuesBackendApiService'] =
      new PlaythroughIssuesBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['PlaythroughIssueObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['PretestQuestionBackendApiService'] =
      new PretestQuestionBackendApiService(
        upgradedServices['UrlInterpolationService'],
        upgradedServices['HttpClient']);
    upgradedServices['ProfilePageBackendApiService'] =
      new ProfilePageBackendApiService(
        upgradedServices['UrlInterpolationService'],
        upgradedServices['HttpClient'],
        upgradedServices['UrlService'],
        upgradedServices['UserProfileObjectFactory']);
    upgradedServices['QuestionBackendApiService'] =
      new QuestionBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['ReadOnlyCollectionBackendApiService'] =
      new ReadOnlyCollectionBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['CollectionObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['ReadOnlySubtopicPageObjectFactory'] =
      new ReadOnlySubtopicPageObjectFactory(
        upgradedServices['SubtopicPageContentsObjectFactory'],
        upgradedServices['SubtopicObjectFactory']);
    upgradedServices['ReadOnlyTopicObjectFactory'] =
      new ReadOnlyTopicObjectFactory(
        upgradedServices['SubtopicObjectFactory'],
        upgradedServices['ShortSkillSummaryObjectFactory']);
    upgradedServices['ReviewTestBackendApiService'] =
      new ReviewTestBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['ReviewTestObjectFactory'],
        upgradedServices['UrlInterpolationService'],
        upgradedServices['UrlService']);
    upgradedServices['SearchExplorationsBackendApiService'] =
      new SearchExplorationsBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['SkillCreationBackendApiService'] =
      new SkillCreationBackendApiService(
        upgradedServices['HttpClient']);
    upgradedServices['SkillMasteryBackendApiService'] =
      new SkillMasteryBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['SkillMasteryObjectFactory']);
    upgradedServices['SkillObjectFactory'] =
      new SkillObjectFactory(
        upgradedServices['ConceptCardObjectFactory'],
        upgradedServices['MisconceptionObjectFactory'],
        upgradedServices['RubricObjectFactory'],
        upgradedServices['ValidatorsService']);
    upgradedServices['SkillRightsBackendApiService'] =
      new SkillRightsBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['SkillRightsObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['StateCardObjectFactory'] =
      new StateCardObjectFactory(
        upgradedServices['AudioTranslationLanguageService']);
    upgradedServices['StateInteractionStatsBackendApiService'] =
      new StateInteractionStatsBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['VisualizationInfoObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['StateParamChangesService'] =
      new StateParamChangesService(
        upgradedServices['AlertsService'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['StateTopAnswersStatsBackendApiService'] =
      new StateTopAnswersStatsBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['StateTopAnswersStatsObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['StatsReportingBackendApiService'] =
      new StatsReportingBackendApiService(
        upgradedServices['ContextService'],
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['StoryViewerBackendApiService'] =
        new StoryViewerBackendApiService(
          upgradedServices['LearnerExplorationSummaryObjectFactory'],
          upgradedServices['HttpClient'],
          upgradedServices['StoryPlaythroughObjectFactory'],
          upgradedServices['UrlInterpolationService']);
    upgradedServices['SubtopicPageContentsObjectFactory'] =
      new SubtopicPageContentsObjectFactory(
        upgradedServices['RecordedVoiceoversObjectFactory'],
        upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['TextInputPredictionService'] =
      new TextInputPredictionService(
        upgradedServices['CountVectorizerService'],
        upgradedServices['SVMPredictionService'],
        upgradedServices['TextInputTokenizer']);
    upgradedServices['TopicObjectFactory'] = new TopicObjectFactory(
      upgradedServices['SubtopicObjectFactory'],
      upgradedServices['StoryReferenceObjectFactory'],
      upgradedServices['ShortSkillSummaryObjectFactory']);
    upgradedServices['TopicCreationBackendApiService'] =
      new TopicCreationBackendApiService(upgradedServices['HttpClient']);
    upgradedServices['TopicsAndSkillsDashboardBackendApiService'] =
      new TopicsAndSkillsDashboardBackendApiService(
        upgradedServices['AssignedSkillObjectFactory'],
        upgradedServices['AugmentedSkillSummaryObjectFactory'],
        upgradedServices['HttpClient'],
        upgradedServices['ShortSkillSummaryObjectFactory'],
        upgradedServices['SkillSummaryObjectFactory'],
        upgradedServices['TopicSummaryObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['TopicViewerBackendApiService'] =
      new TopicViewerBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['TranslationsBackendApiService'] =
      new TranslationsBackendApiService(
        upgradedServices['HttpClient']);

    // Topological level: 4.

    upgradedServices['CollectionCreationService'] =
      new CollectionCreationService(
        upgradedServices['CollectionCreationBackendService'],
        upgradedServices['AlertsService'],
        upgradedServices['SiteAnalyticsService'],
        upgradedServices['UrlInterpolationService'],
        upgradedServices['LoaderService'],
        upgradedServices['WindowRef']);
    upgradedServices['EditableCollectionBackendApiService'] =
      new EditableCollectionBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['ReadOnlyCollectionBackendApiService'],
        upgradedServices['CollectionObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['EmailDashboardDataService'] =
        new EmailDashboardDataService(
          upgradedServices['HttpClient']);
    upgradedServices['EmailDashboardDataService'] =
        new EmailDashboardDataService(
          upgradedServices['EmailDashboardBackendApiService']);
    upgradedServices['ExplorationRecommendationsService'] =
      new ExplorationRecommendationsService(
        upgradedServices['ContextService'],
        upgradedServices['UrlService'],
        upgradedServices['ExplorationRecommendationsBackendApiService']);
    upgradedServices['ExplorationStatsService'] = new ExplorationStatsService(
      upgradedServices['ExplorationStatsBackendApiService']);
    upgradedServices['ExtensionTagAssemblerService'] =
      new ExtensionTagAssemblerService(
        upgradedServices['HtmlEscaperService'],
        upgradedServices['CamelCaseToHyphensPipe']);
    upgradedServices['PredictionAlgorithmRegistryService'] =
      new PredictionAlgorithmRegistryService(
        upgradedServices['CodeReplPredictionService'],
        upgradedServices['TextInputPredictionService']);
    upgradedServices['ProfileLinkImageBackendApiService'] =
      new ProfileLinkImageBackendApiService(
        upgradedServices['HttpClient']);
    upgradedServices['ReadOnlySubtopicPageObjectFactory'] =
      new ReadOnlySubtopicPageObjectFactory(
        upgradedServices['SubtopicPageContentsObjectFactory'],
        upgradedServices['SubtopicObjectFactory']);
    upgradedServices['StateCardObjectFactory'] = new StateCardObjectFactory(
      upgradedServices['AudioTranslationLanguageService']);
    upgradedServices['UserExplorationPermissionsService'] = (
      new UserExplorationPermissionsService(
        upgradedServices['ExplorationPermissionsBackendApiService']));
    upgradedServices['SubtopicViewerBackendApiService'] =
      new SubtopicViewerBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['ReadOnlySubtopicPageObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    upgradedServices['SubtopicPageObjectFactory'] =
      new SubtopicPageObjectFactory(
        upgradedServices['SubtopicPageContentsObjectFactory']);

    // Topological level: 5.
    upgradedServices['AnswerClassificationService'] =
      new AnswerClassificationService(
        upgradedServices['AlertsService'],
        upgradedServices['AnswerClassificationResultObjectFactory'],
        upgradedServices['AppService'],
        upgradedServices['InteractionSpecsService'],
        upgradedServices['PredictionAlgorithmRegistryService'],
        upgradedServices['StateClassifierMappingService']);
    upgradedServices['ExplorationHtmlFormatterService'] =
      new ExplorationHtmlFormatterService(
        upgradedServices['CamelCaseToHyphensPipe'],
        upgradedServices['ExtensionTagAssemblerService'],
        upgradedServices['HtmlEscaperService']);
    upgradedServices['SubtopicViewerBackendApiService'] =
      new SubtopicViewerBackendApiService(
        upgradedServices['HttpClient'],
        upgradedServices['ReadOnlySubtopicPageObjectFactory'],
        upgradedServices['UrlInterpolationService']);

    // Topological level: 6.
    upgradedServices['PlaythroughService'] =
      new PlaythroughService(
        upgradedServices['ExplorationFeaturesService'],
        upgradedServices['LearnerActionObjectFactory'],
        upgradedServices['PlaythroughBackendApiService'],
        upgradedServices['PlaythroughObjectFactory'],
        upgradedServices['StopwatchObjectFactory']);
    upgradedServices['SolutionObjectFactory'] = new SolutionObjectFactory(
      upgradedServices['SubtitledHtmlObjectFactory'],
      upgradedServices['ExplorationHtmlFormatterService']);
    upgradedServices['StateInteractionStatsService'] =
      new StateInteractionStatsService(
        upgradedServices['AnswerClassificationService'],
        upgradedServices['FractionObjectFactory'],
        upgradedServices['InteractionRulesRegistryService'],
        upgradedServices['StateInteractionStatsBackendApiService']);
    upgradedServices['StateTopAnswersStatsService'] =
      new StateTopAnswersStatsService(
        upgradedServices['AnswerClassificationService'],
        upgradedServices['InteractionRulesRegistryService'],
        upgradedServices['StateTopAnswersStatsBackendApiService']);
    upgradedServices['StatsReportingService'] = new StatsReportingService(
      upgradedServices['ContextService'],
      upgradedServices['MessengerService'],
      upgradedServices['PlaythroughService'],
      upgradedServices['SiteAnalyticsService'],
      upgradedServices['StatsReportingBackendApiService'],
      upgradedServices['StopwatchObjectFactory']);

    // Topological level: 7.
    upgradedServices['InteractionObjectFactory'] = new InteractionObjectFactory(
      upgradedServices['AnswerGroupObjectFactory'],
      upgradedServices['HintObjectFactory'],
      upgradedServices['SolutionObjectFactory'],
      upgradedServices['OutcomeObjectFactory'],
      upgradedServices['SubtitledHtmlObjectFactory'],
      upgradedServices['SubtitledUnicodeObjectFactory']);

    // Topological level: 8.
    upgradedServices['InteractionAttributesExtractorService'] =
      new InteractionAttributesExtractorService(
        upgradedServices['HtmlEscaperService'],
        upgradedServices['InteractionObjectFactory']);
    upgradedServices['StateObjectFactory'] = new StateObjectFactory(
      upgradedServices['InteractionObjectFactory'],
      upgradedServices['ParamChangesObjectFactory'],
      upgradedServices['RecordedVoiceoversObjectFactory'],
      upgradedServices['SubtitledHtmlObjectFactory'],
      upgradedServices['WrittenTranslationsObjectFactory']);

    // Topological level: 9.
    upgradedServices['StatesObjectFactory'] = new StatesObjectFactory(
      upgradedServices['StateObjectFactory']);

    // Topological level: 10.
    upgradedServices['ExplorationObjectFactory'] = new ExplorationObjectFactory(
      upgradedServices['LoggerService'],
      upgradedServices['ParamChangesObjectFactory'],
      upgradedServices['ParamSpecsObjectFactory'],
      upgradedServices['StatesObjectFactory'],
      upgradedServices['UrlInterpolationService']);

    /* eslint-enable dot-notation */
    return upgradedServices;
  }
}

angular.module('oppia').factory(
  'UpgradedServices',
  downgradeInjectable(UpgradedServices));
