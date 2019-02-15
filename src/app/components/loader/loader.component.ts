import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  active = false;
  constructor(private ls: LoaderService) { }

  ngOnInit() {
    this.ls.loaderSubject.subscribe((res: boolean) => this.active = res);
  }

}
