import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSolicitacoesComponent } from './info-solicitacoes.component';

describe('InfoSolicitacoesComponent', () => {
  let component: InfoSolicitacoesComponent;
  let fixture: ComponentFixture<InfoSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSolicitacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
