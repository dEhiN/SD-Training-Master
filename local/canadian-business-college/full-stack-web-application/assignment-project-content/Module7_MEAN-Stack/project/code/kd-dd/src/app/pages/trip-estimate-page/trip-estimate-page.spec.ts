import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripEstimatePage } from './trip-estimate-page';

describe('TripEstimatePage', () => {
  let component: TripEstimatePage;
  let fixture: ComponentFixture<TripEstimatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripEstimatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TripEstimatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
