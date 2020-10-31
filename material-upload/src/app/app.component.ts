import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose file';

  uploadFileEvt(imgFile: any){
    if (imgFile.target.files && imgFile.target.files[0]){
      this.fileAttr='';
      Array.from(imgFile.target.files).forEach(
        (file: File) => {
          this.fileAttr += file.name + ' - ';
        });

        // use FileReader Api
        let reader = new FileReader();
        reader.onload = (e: any) => {
          let image = new Image;
          image.src = e.target.result;
          image.onload = rs => {
            let imgBase64Path = e.target.result;
          };
        };

        reader.readAsDataURL(imgFile.target.files[0]);
        // reset when duplicate image is choosen
        this.fileInput.nativeElement.value='';
    }else{
      this.fileAttr = 'Choose file';
    }
  }
}
