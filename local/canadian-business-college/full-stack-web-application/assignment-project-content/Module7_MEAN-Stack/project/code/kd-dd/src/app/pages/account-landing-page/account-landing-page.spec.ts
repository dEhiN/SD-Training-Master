import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountLandingPage } from './account-landing-page';

describe('AccountLandingPage', () => {
  let component: AccountLandingPage;
  let fixture: ComponentFixture<AccountLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
