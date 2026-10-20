import { HttpInterceptorFn } from '@angular/common/http';

export const transactionIdInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.headers.has('X-Transaction-ID')
    ? req
    : req.clone({ setHeaders: { 'X-Transaction-ID': crypto.randomUUID() } });
  return next(request);
};
