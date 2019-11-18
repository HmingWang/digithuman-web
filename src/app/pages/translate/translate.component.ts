import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileFeatureService} from '../../services/file-feature.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  textMap: Map<string, string> = new Map<string, string>();

  constructor(private fileFeatureService: FileFeatureService) {
  }

  ngOnInit() {
  }

  selectFile(id: number) {
    this.isSpanning = true;
    this.fileFeatureService.getTranslate(id).subscribe(it => {
      this.textMap = it as Map<string, string>;
      this.isSpanning = false;
    });
  }
}
