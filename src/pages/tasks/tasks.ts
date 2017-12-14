import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddtodoPage } from '../addtodo/addtodo';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'tasks-about',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  addedToDoList:any[] = [];
  tempTodos:any = '';
  todoPage = AddtodoPage;
  constructor(public navCtrl: NavController,public storage: Storage){
     console.log("Inside constructor");
     this.storage.get('todoDetails').then((val) => {
      console.log("Val in home"+val);
      this.addedToDoList = val;
     });
  }
  testObj = {
    "title":"",
    "description": ""
  }

    
/* This function will always get data from localstorage when 
    this page will load */

    ngOnInit():void{

        this.storage.get('todoDetails').then((val) => {
          console.log("Val in home init"+val);
          this.addedToDoList = val;
        }); 
    }
    
    
/* This function will always get data from localstorage when this page is about to enter 
    and become active page */

    ionViewWillEnter(){
      this.storage.get('todoDetails').then((val) => {
        this.addedToDoList = val;
      });    
    } 
    
    
/* This function will always get data from localstorage when this page is fully entered 
    and now active page */

    ionViewDidEnter() {
      this.storage.get('todoDetails').then((val) => {
        this.addedToDoList = val;
      }); 
    }

  
/* This function will navigate to next page*/

  goToAddTodo():void{
      this.navCtrl.push(AddtodoPage);
  }

  
/* This function will remove selected item */

  removeItem(todo):void{
    let index = this.addedToDoList.indexOf(todo);
    if(index>-1){
      this.addedToDoList.splice(index,1);
      this.storage.set('todoDetails',this.addedToDoList);
    } 
  }

}
