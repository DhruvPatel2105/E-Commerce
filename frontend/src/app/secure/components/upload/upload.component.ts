import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Output() uploaded = new EventEmitter<string>();
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  upload(): void {
    if (!this.fileInput || !this.fileInput.nativeElement.files || this.fileInput.nativeElement.files.length === 0) {
      // No file selected, handle accordingly
      return;
    }

    const file = this.fileInput.nativeElement.files[0];

    if (!file) {
      // Invalid file, handle accordingly
      return;
    }

    const data = new FormData();
    data.append('image', file);

    this.http.post(`${environment.api}/upload`, data)
      .subscribe((res: any) => {
        this.uploaded.emit(res.url);
      });
  }
}
