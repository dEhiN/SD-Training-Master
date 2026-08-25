import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountLoginPage } from './account-login-page';

describe('AccountLoginPage', () => {
  let component: AccountLoginPage;
  let fixture: ComponentFixture<AccountLoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountLoginPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountLoginPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
