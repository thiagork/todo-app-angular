import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // this is what goes into index.html as <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'simple-todo-angular';

  
}
