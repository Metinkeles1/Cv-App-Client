import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { SelectEducationImageDialogComponent } from './select-education-image-dialog/select-education-image-dialog.component';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectEducationImageDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule,
    FileUploadModule
  ]
})
export class DialogModule { }
