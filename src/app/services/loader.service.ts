import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loader:NgxUiLoaderService) { }
  public startLoader() {
  	this.loader.start()
  }

  public stopLoader() {
  	this.loader.stop()
  }
}
