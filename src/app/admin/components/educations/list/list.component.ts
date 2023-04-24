import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { list_education } from 'src/app/contracts/list_education';
import { SelectEducationImageDialogComponent } from 'src/app/dialogs/select-education-image-dialog/select-education-image-dialog.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { DialogService } from 'src/app/services/common/dialog.service';
import { EducationService } from 'src/app/services/common/models/education.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService,
    private educationService: EducationService,
    private alertifyService: AlertifyService,
    private dialogservice: DialogService) {
    super(spinner)
  }

  displayedColumns: string[] = ['Title', 'Subtitle', 'GPA', 'Date', 'Photos', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<list_education> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getEducations() {
    this.showSpinner(SpinnerType.BallAtom);
    const allEducations: { totalCount: number; educations: list_education[] } = await this.educationService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 8, () => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<list_education>(allEducations.educations);
    this.paginator.length = allEducations.totalCount;
  }

  addEducationImages(id: string) {
    debugger;
    this.dialogservice.openDialog({
      componentType: SelectEducationImageDialogComponent,
      data: id,
      options: {
        width: "1400px"
      }
    })
  }

  async pageChanged() {
    await this.getEducations();
  }

  async ngOnInit() {
    await this.getEducations();
  }


}
