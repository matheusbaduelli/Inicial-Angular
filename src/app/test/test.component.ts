import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {


  public stringInterpolation= "esse e um teste" 

  public isDisabled=false;

  public myBindingProperty: string='';

  public disableButton(){
    if(this.isDisabled)this.isDisabled=false;
    else this.isDisabled=true;
  }

  processClick(input:string){

    console.log('botão click ${input}')
  }
}
