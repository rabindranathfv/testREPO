import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file-area',
  templateUrl: './upload-file-area.component.html',
  styleUrls: ['./upload-file-area.component.scss']
})
export class UploadFileAreaComponent implements OnInit {

  //Source https://github.com/MariemChaabeni/angular7-upload-file
files: any = [];

  constructor() { }

  ngOnInit() {
  }



uploadFile(event) {
  for (let index = 0; index < event.length; index++) {
    const element = event[index];
    this.files.push(element.name)
  }  
}
deleteAttachment(index) {
  this.files.splice(index, 1)
}
}
