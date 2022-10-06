import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private myContent: string = "";


  constructor() {
    console.log("Shared service being initialised");
  }
  setContent(content: string) {
    this.myContent=content;
  }

  public get content() {
    return this.myContent;
  }


  smartyTest(): string {
    return "i am smart";
  }
}
