import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieInterceptor } from './cookie-interceptor';

export const HttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CookieInterceptor,
    multi: true
  }
];
