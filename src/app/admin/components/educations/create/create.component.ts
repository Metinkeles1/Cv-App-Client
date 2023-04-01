import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Education } from 'src/app/contracts/create_education';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { EducationService } from 'src/app/services/common/models/education.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent {

  constructor(spiner: NgxSpinnerService, private educationService: EducationService, private alertify: AlertifyService) {
    super(spiner);
  }

  create(Title: HTMLInputElement, SubTitle: HTMLInputElement, subTitle2: HTMLInputElement, Gpa: HTMLInputElement, Date: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallAtom);
    const create_education: Create_Education = new Create_Education();
    create_education.Title = Title.value;
    create_education.SubTitle = SubTitle.value;
    create_education.SubTitle2 = subTitle2.value;
    create_education.GPA = Gpa.value;
    create_education.Date = Date.value;

    this.educationService.create(create_education, () => {
      this.hideSpinner(SpinnerType.BallAtom)
      this.alertify.message("Education Başarıyla eklenmiştir.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      })
    }, errorMessage => {
      this.alertify.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      })
    });
  }
}
