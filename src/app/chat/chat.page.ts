import { FormControl } from '@angular/forms';
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('newmessage', {static: false}) messageInput;
  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;

  message: string;
  messageForm: FormGroup;
  showSpinnerIcon = false;
  showDates = false;
  chatList: Observable<ChatMessage[]>;
  chatListRef: AngularFireList<ChatMessage>;
  groupNumber = 'G5'; // Bsp. G1
  currentUser = 'Jeremy'; // Bsp. Ralph

  constructor(private afDb: AngularFireDatabase) {
    this.chatListRef = afDb.list('/chats/' + this.groupNumber);
    this.chatList = this.chatListRef.valueChanges();
  }

  ngOnInit() {
    this.messageForm = new FormGroup({
      messagefield: new FormControl('', )
    });
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    // TODO: An das Ende scrollen
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  swipeEvent(swipe) {
    // 2  = Right to left swipe
    // 4  = Left to right swipe
    if (swipe.direction === 2 || swipe.direction === 4) {
      // TODO: Datum ein resp. ausblenden
    }
  }
  sendMessage() {
    this.message = this.messageForm.get('messagefield').value;
    if (this.message !== '') {
      this.showSpinnerIcon = true;
      // TODO: Spinner anzeigen
      const formattedDate = new Date().toLocaleString();
      this.chatListRef.push({username: this.currentUser , text: this.message, date: formattedDate });
      // TODO: Cleanup: Nachricht löschen und Spinner ausblenden
      this.showSpinnerIcon = false;
      // TODO: Cleanup: Nachricht löschen und Spinner ausblenden
    }
  }
}
interface ChatMessage {
  username: string;
  text: string;
  date: any;
}
