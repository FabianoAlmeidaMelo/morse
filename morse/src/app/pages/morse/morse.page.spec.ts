import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MorsePage } from './morse.page';

describe('MorsePage', () => {
  let component: MorsePage;
  let fixture: ComponentFixture<MorsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MorsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
