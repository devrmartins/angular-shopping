import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed: boolean = true;
  manageMenuOpened: boolean = false;
  @Output('onFeatureSelected') featureSelected = new EventEmitter<String>();

  onSelect(feature: String) {
    this.featureSelected.emit(feature);
  }
}
