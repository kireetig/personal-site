import { Component, OnInit } from '@angular/core';
import * as Editor from '../../plugins/ckeditor/ckeditor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public Editor = Editor;
  public model = {
    editorData: ''
};
title = '';

editorConfig = {
  placeholder: 'Type the content here!',
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'codeBlock',
      'code',
      'highlight',
      'CKFinder'
    ]
  },
}



  constructor() { }

  ngOnInit(): void { }

  save() {
    console.log(this.model.editorData, this.title);
  }

}
