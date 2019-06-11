import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerbianTransliteratorComponent } from './serbian-transliterator.component';

describe('SerbianTransliteratorComponent', () => {
  let component: SerbianTransliteratorComponent;
  let fixture: ComponentFixture<SerbianTransliteratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerbianTransliteratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerbianTransliteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
