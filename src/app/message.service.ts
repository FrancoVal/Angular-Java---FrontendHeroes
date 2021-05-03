import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) { // Agrega un mensaje al caché.
    this.messages.push(message);
  }

  clear() { // Borra, si apretás el botón, los mensajes del caché.
    this.messages = [];
  }
}