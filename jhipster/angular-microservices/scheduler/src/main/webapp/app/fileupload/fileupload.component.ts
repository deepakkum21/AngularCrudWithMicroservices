import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileuploadService } from './fileupload.service';

@Component({
  selector: 'jhi-fileupload',
  templateUrl: './fileupload.component.html',
  styles: []
})
export class FileuploadComponent implements OnInit {
  fileUpload = { status: '', message: '', filePath: '' };
  fileUploadForm: FormGroup;
  error: string;
  isCsvFile: boolean = false;
  delimeter:string;

  constructor(private fb: FormBuilder, private fileUploadService: FileuploadService) { }

  ngOnInit() {
    this.fileUploadForm = this.fb.group({
      name: [''],
      fileUploaded: ['', Validators.required],
      delimeter: ['', [Validators.maxLength(1), Validators.minLength(1)]]
    });
  }

  onSelectedFile(event) {
    console.log(event.target.files);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.fileUploadForm.get('name').setValue(file.name);
      this.fileUploadForm.get('fileUploaded').setValue(file);
      //const fileName: string =this.fileUploadForm.get('name').value;
      const fileSplit: string[] = this.fileUploadForm.get('name').value.split('.');
      if('csv' === fileSplit[fileSplit.length-1]){
        console.log('got csv file');
        this.isCsvFile =true;
        if(this.fileUploadForm.get('delimeter').value == undefined || this.fileUploadForm.get('delimeter').value ==''){
          this.delimeter = ',';
          console.log("======",this.delimeter);
        }else{
          this.delimeter =this.fileUploadForm.get('delimeter').value;
          console.log("======",this.delimeter);
        }
        
      }else {
        this.isCsvFile =false;
        this.delimeter = '';
        console.log("======",this.delimeter);
      }
      
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.fileUploadForm.get('name').value);
    formData.append('fileUploaded', this.fileUploadForm.get('fileUploaded').value);
    if(this.isCsvFile) {
      if(this.fileUploadForm.get('delimeter').value){
        formData.append('delimeter', this.fileUploadForm.get('delimeter').value);
      }else{
        formData.append('delimeter', this.delimeter);
      }
    }
    // formData.append('delimeter', ',');
    console.log(formData);
    this.fileUploadService.upload(formData).subscribe(
      (data) => {
        console.log(data);
        if(data!=null){
        console.log(data.status);
        this.fileUpload.status = data.status;
        this.fileUpload.message=data.message;
        this.fileUploadForm.get('fileUploaded').setValue('');
        }
      }
    )
  }


}
