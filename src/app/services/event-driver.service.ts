import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent, QueryEvent} from '../state/product.state';

@Injectable({
  providedIn: 'root'
})

/**
 * Ce service a pour but de gerer la communication entre les differents components.
 */
export class EventDriverService {

  /** sourceEventSubject permet de surveiller les events de type ActionEvent*/
  sourceActionEventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceActionEventSubjectObservable = this.sourceActionEventSubject.asObservable();

  /** sourceEventSubject permet de surveiller les events de type QueryEvent*/
  sourceQueryEventSubject: Subject<QueryEvent> = new Subject<QueryEvent>();
  sourceQueryEventSubjectObservable = this.sourceQueryEventSubject.asObservable();

  constructor() { }

  /**
   * Publish action event
   * @param event
   */
  publishActionEvent(event: ActionEvent){
    this.sourceActionEventSubject.next(event);
  }

  /**
   * Publish query event
   * @param query
   */
  publishQueryEvent(event: QueryEvent){
    this.sourceQueryEventSubject.next(event);
  }
}
