import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {AppModule} from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule, [disableDeprecatedForms(), provideForms()]);