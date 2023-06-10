import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeDataContainerComponent } from './horoscope-data-container.component';

describe('HoroscopeDataContainerComponent', () => {
  let component: HoroscopeDataContainerComponent;
  let fixture: ComponentFixture<HoroscopeDataContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoroscopeDataContainerComponent]
    });
    fixture = TestBed.createComponent(HoroscopeDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
