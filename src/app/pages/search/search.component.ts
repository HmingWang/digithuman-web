import {Component, OnInit} from '@angular/core';
import {FileFeatureService} from '../../services/file-feature.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isSpinning = false;
  listOfData: any = [];
  cols: any = [];
  fileName = '';
  content = '';


  constructor(private fileFeatureService: FileFeatureService) {
  }

  ngOnInit() {
  }

  search() {
    this.isSpinning = true;
    this.fileFeatureService.getSearch(this.content).subscribe(
      item => {
        this.listOfData = item as { filename: string, sentence: string, index: string }[];
        console.log(this.listOfData);
        this.isSpinning = false;
      }, error => {
        console.log(error);
      }
    );
  }
}
