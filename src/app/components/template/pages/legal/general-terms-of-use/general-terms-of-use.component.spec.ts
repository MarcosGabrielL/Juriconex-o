import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTermsOfUseComponent } from './general-terms-of-use.component';

describe('GeneralTermsOfUseComponent', () => {
  let component: GeneralTermsOfUseComponent;
  let fixture: ComponentFixture<GeneralTermsOfUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralTermsOfUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
