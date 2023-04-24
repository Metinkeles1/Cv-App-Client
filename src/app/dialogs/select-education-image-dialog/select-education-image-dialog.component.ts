import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { BaseDialog } from '../base/base-dialog';

@Component({
  selector: 'app-select-education-image-dialog',
  templateUrl: './select-education-image-dialog.component.html',
  styleUrls: ['./select-education-image-dialog.component.css']
})
export class SelectEducationImageDialogComponent extends BaseDialog<SelectEducationImageDialogComponent>{
  constructor(dialogRef: MatDialogRef<SelectEducationImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectEducationImageState | string,
  ) {
    super(dialogRef)
  }

  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg",
    action: "upload",
    controller: "educations",
    explanation: "Ürün Resmini Seçin veya buraya sürükleyin...",
    isAdminPage: true,
    queryString: `id=${this.data}`
  };
}

export enum SelectEducationImageState {
  Close
}
