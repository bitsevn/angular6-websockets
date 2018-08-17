import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeAppModule } from './modules/tree-app/tree-app.module';
import { WebSocketsModule as WebSocketsWithoutStompServiceModule } from './modules/websockets/websockets.module';
import { WebSocketsModule as WebSocketsWithStompServiceModule } from './modules/websockets-with-stomp-service/websockets.module';
import { ChatRoomsModule } from './modules/chatrooms/chatrooms.module';
import { ForumsModule } from './modules/forums/forums.module';
import { RouterModule } from '@angular/router';
import { ForumsComponent } from './modules/forums/forums.component';

const withStompService: boolean = true;

const routesConfig = [
  { path: '', redirectTo: 'forums', pathMatch: 'full' },
  { path: 'forums', component: ForumsComponent }
]

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routesConfig),
    TreeAppModule,
    (withStompService ? WebSocketsWithStompServiceModule : WebSocketsWithoutStompServiceModule),
    ChatRoomsModule,
    ForumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
