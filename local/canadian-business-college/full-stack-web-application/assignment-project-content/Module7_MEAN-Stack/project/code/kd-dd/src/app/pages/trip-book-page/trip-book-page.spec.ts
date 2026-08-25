import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripBookPage } from './trip-book-page';

describe('TripBookPage', () => {
  let component: TripBookPage;
  let fixture: ComponentFixture<TripBookPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripBookPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TripBookPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
