import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'agenceImmo';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thumbUp.svg'));
    iconRegistry.addSvgIcon('trash', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/trash.svg'));
    iconRegistry.addSvgIcon('pen', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pen.svg'));
    iconRegistry.addSvgIcon('eye', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/eye.svg'));
  }
}
