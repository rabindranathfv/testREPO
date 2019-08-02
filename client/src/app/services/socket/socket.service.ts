import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  constructor() { }
  public conectar() {
    this.socket = io('http://localhost:5000');
    this.socket.on('connect', socket => {
      //console.log(socket);

      this.send();
    });
  }
  public send() {
    this.socket.send('ok', '?');
    // subject emit by event
  }
}
