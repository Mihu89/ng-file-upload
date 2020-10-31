import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard'
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.scss']
})
export class CopyTextComponent implements OnInit {

  randomText="LoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500rem";
  text1: string;
  isCopied1: boolean;

  constructor(private cbService: ClipboardService) { }
  
  ngOnInit(): void {
    this.cbService.copyResponse$.subscribe(res => {
      if(res.isSuccess){
        alert('Copy successifull');
      }
    })
  }

  copyToCBText(){
    this.cbService.copy(this.randomText);
  }

  onCopyFailure(){
    alert('Copy failed');
  }

}
