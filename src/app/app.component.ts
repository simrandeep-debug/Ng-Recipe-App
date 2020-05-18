import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng-Recipe-App';

  loadedFeature = 'recipe'
  
  onNavigate(feature : string ){
    this.loadedFeature = feature;
  }
}
