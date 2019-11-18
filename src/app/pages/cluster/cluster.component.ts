import {Component, OnInit} from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';
import {FileFeatureService} from '../../services/file-feature.service';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})

export class ClusterComponent implements OnInit {
  nCluster = 0;
  dLimit = 0.85;
  cluster: string[][] = [];
  isSpanning = false;
  count = 1;

  constructor(private fileFeatureService: FileFeatureService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.isSpanning = true;
    this.fileFeatureService.getCluster(this.nCluster, this.dLimit).subscribe(obj => {
      this.cluster = obj as string[][];
      this.isSpanning = false;
    });
  }

  setDefault() {
    this.nCluster = 0;
    this.dLimit = 0.8;
  }
}
