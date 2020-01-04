import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://08976e7c5ea248f78fcdb979d253f9c0@sentry.io/1871601'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}
