import { Component,OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-test'; 
  @ViewChild('addQuestionModal') addQuestionModal:ModalDirective 
  questionObj:any=[];
  constructor( private toastr: ToastrService)
  {

  }
  addQuestion(){
      this.addQuestionModal.show()
  }
  submitAddQuestion()
  {
    console.log(this.questionObj);
  }
}
