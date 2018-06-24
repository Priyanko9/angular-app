import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[autoComplete]'
    
})
export class autocompleteDirective{
    
    @Input() citiesArray: any[];
    @Input() countriesArray: any[];
    timeout;
    
    constructor(private el: ElementRef){
      
    }
    
   @HostListener('input') change(eventData : Event,input:HTMLInputElement) {
   
       
        console.log("clicked");
        let containerDiv=this.el.nativeElement.nextSibling;
        containerDiv.innerHTML="";
        let inputValue=this.el.nativeElement.value;
        let allData=[];
        if(this.citiesArray!==undefined){
            allData=this.citiesArray;
        }
        if(this.countriesArray!==undefined){
            allData=this.countriesArray;
        }
        
        console.log("timeout:"+this.timeout);
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        this.timeout=setTimeout(()=>{
            console.log("entered");
            containerDiv.classList.remove("hide");
            containerDiv.classList.add("show");
            allData.map((data)=>{
                if(inputValue!==""){
                    if(data.toUpperCase().indexOf(inputValue.toUpperCase())>-1){
                        let totalLength=containerDiv.childNodes.length;
                        console.log(data);
                        if(totalLength<20){

                            let div=document.createElement("div");
                            let childDiv=document.createTextNode(data);
                            div.appendChild(childDiv);
                            containerDiv.appendChild(div);
                        }


                    }
                }
            });
        },1000);
        
        
    }

    
}