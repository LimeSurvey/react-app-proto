/**
 * Persistable constructors
 *
 * Browser persistence for Javascript (localStorage, sessionStorage, indexDB etc)
 * do not support persistence of type-information / object constructors.
 * So by default you can only persist object data and not the methods that go along with it.
 *
 * In order to allow persistence of type-information we use a library called JsonTyped
 * which converts objects to a data structure which captures the constructor function name
 * along with the object data allowing the constructor function to be re-applied to the data
 * when re-hydrating from persistence.
 *
 * The JsonTyped library needs to be given an array of constructors at run time so it can
 * match constructor data in persisted data back to the actual constructor in memory.
 *
 * This file defines all of the constructors available to JsonTyped. Any time you
 * add a new object type to the data model its constructor must be included here
 * or persistence will fail during re-hydration.
 */


import Site from './site/Site'
import SideBarLeft from './../page/editor/model/SideBarLeft'
import Survey from './../page/editor/model/survey/Survey'
import QuestionGroup from './../page/editor/model/survey/QuestionGroup'
import Question from './../page/editor/model/survey/Question'
import AnswerOption from './../page/editor/model/survey/AnswerOption'

// eslint-disable-next-line
export default [
    SideBarLeft,
    Site,
    Survey,
    QuestionGroup,
    Question,
    AnswerOption
];