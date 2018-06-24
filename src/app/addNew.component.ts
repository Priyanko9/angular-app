import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector:'add-data',
    templateUrl:'./addNew.component.html',
    styleUrls: ['./addNew.component.css']
    
})
export class AddNewData{
    addDataForm: FormGroup;
    addedData=[];
    
    constructor(){}
    
    ngOnInit(){
        this.addDataForm=new FormGroup({
            'city':new FormControl(null,[Validators.required]),
            'weather':new FormControl(null,[Validators.required]),
            'temprature':new FormControl(null,[Validators.required]),
            'humidity':new FormControl(null,[Validators.required]),
        });
    }
    onSubmit(){
        this.saveFormData();
        this.addDataForm.reset();
    }
    saveFormData(){
        this.formData = this.addDataForm.value;
        
        const formContainer={
           city:this.formData.city as string,
           weather:this.formData.weather as string,
           temprature:this.formData.temprature as string,
           humidity:this.formData.humidity as string,
        }
        
        this.addedData.push(formContainer);
                            
}
}