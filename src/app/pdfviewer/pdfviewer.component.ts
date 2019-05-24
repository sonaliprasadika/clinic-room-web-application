import { Component,  OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'ej-app',
  templateUrl: './pdfviewer.component.html',
  
})
export class PdfviewerComponent {

  service: string;
  toolbarSettings: object;
  constructor() { 
      this.service = 'https://js.syncfusion.com/ejServices/api/PdfViewer';	
      this.toolbarSettings = { toolbarItem: ej.PdfViewer.ToolbarItems.TextMarkupAnnotationTools };
      this.service = 'http://js.syncfusion.com/demos/ejservices/api/PdfViewer';
  
  }
  
  
}
