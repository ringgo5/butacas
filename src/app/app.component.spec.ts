import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async () => {
    app = new AppComponent();
  });

 

 it('la suma debe dar 4' async(()=>{

  expect(app.add(2,2)).toEqual(4);


 }))

  
});
