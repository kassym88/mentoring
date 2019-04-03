import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {User} from '../classes/User';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../app.module';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should return User object', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.user.token = 'abcdefg';
    expect(service.getUser()).isPrototypeOf(User);
  });

  it('should return not null user email', () => {
    const testEmail = 'test@test.com';
    const service: AuthService = TestBed.get(AuthService);
    service.user.email = testEmail;
    expect(service.getUserLogin()).toEqual(testEmail);
  });

  it('should be Authenticated', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.user.email = 'test@test.com';
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
