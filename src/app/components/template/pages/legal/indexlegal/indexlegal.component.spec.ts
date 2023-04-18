import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexlegalComponent } from './indexlegal.component';

describe('IndexlegalComponent', () => {
  let component: IndexlegalComponent;
  let fixture: ComponentFixture<IndexlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexlegalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
