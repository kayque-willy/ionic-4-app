import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClientModule } from '@angular/common/http';

// declare var SQL;

// class SQLiteMock {
//   public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
//     var db = new SQL.Database();
//     return new Promise((resolve, reject) => {
//       resolve(new SQLiteObject(db));
//     });
//   }
// }

// class SQLiteObject{
//   _objectInstance: any;

//   constructor(_objectInstance: any){
//       this._objectInstance = _objectInstance;
//   };

//   executeSql(statement: string, params: any): Promise<any>{

//       return new Promise((resolve,reject)=>{
//           try {
//               var st = this._objectInstance.prepare(statement,params);
//               var rows :Array<any> = [] ;
//               while(st.step()) { 
//                   var row = st.getAsObject();
//                   rows.push(row)
//               }
//               var payload = {
//                   rows: {
//                   item: function(i) {
//                       return rows[i];
//                   },
//                   length: rows.length
//                   },
//                   rowsAffected: this._objectInstance.getRowsModified() || 0,
//                   insertId: this._objectInstance.insertId || void 0
//               };  
//               resolve(payload);
//           } catch(e){
//               reject(e);
//           }
//       });
//   };

// }


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    // {provide: SQLite, useClass: SQLiteMock},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLitePorter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


