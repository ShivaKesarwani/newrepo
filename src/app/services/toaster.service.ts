import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  public showSuccess(message) {
  	this.toastr.success(message)
  }

  public showError(error) {
  	this.toastr.error(error)
  }

  public showWarning(warning) {
  	this.toastr.warning(warning)
  }

  public showInfo(info) {
  	this.toastr.info(info)
  }
}
