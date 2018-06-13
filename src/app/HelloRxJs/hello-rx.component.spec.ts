import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRxComponent } from './hello-rx.component';

describe('HelloRxComponent', () => {
  let component: HelloRxComponent;
  let fixture: ComponentFixture<HelloRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
