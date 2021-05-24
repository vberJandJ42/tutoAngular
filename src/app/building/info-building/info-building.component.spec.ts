import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBuildingComponent } from './info-building.component';

describe('InfoBuildingComponent', () => {
  let component: InfoBuildingComponent;
  let fixture: ComponentFixture<InfoBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
