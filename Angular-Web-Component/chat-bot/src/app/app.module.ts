import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { MatModule } from "./modules/mat/mat.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChatComponent } from "./components/chat/chat.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ThreeDotsBouncingComponent } from "./components/three-dots-bouncing/three-dots-bouncing.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [ChatComponent, ThreeDotsBouncingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BasicInterceptorService,
    //   multi: true
    // }
  ],
  entryComponents: [ChatComponent],
  //bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(ChatComponent, { injector });
    customElements.define("isl-chat", el);
  }

  ngDoBootstrap() {}
}
