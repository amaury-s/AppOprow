import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PageAffluence } from '../pages/page-affluence/page-affluence';
import { PageAide } from '../pages/page-aide/page-aide';
import { PageMesAdmin } from '../pages/page-mes-admin/page-mes-admin';
import { PageMesDemandes } from '../pages/page-mes-demandes/page-mes-demandes';
import { PageMesInfos } from '../pages/page-mes-infos/page-mes-infos';
import { PageMonCompte } from '../pages/page-mon-compte/page-mon-compte';


@NgModule({
  declarations: [
    MyApp,
    PageAffluence,
    PageAide,
    PageMesAdmin,
    PageMesDemandes,
    PageMesInfos,
    PageMonCompte
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PageAffluence,
    PageAide,
    PageMesAdmin,
    PageMesDemandes,
    PageMesInfos,
    PageMonCompte
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
