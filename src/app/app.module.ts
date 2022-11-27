import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './part-1-components/hello-world-component';
import { LifecycleComponent } from './part-2-lifecycle-hooks/lifecycle-component';
import { TextInterpolationComponent } from './part-3-text-interpolation/text-interpolation.component';
import { ParentComponent } from './part-4-components-communication/components/parent/parent.component';
import { ChildComponent } from './part-4-components-communication/components/child/child.component';
import { ParentComponent2 } from './part-4-components-communication/part-4-2/parent/parent.component';
import { ChildComponent2 } from './part-4-components-communication/part-4-2/child/child.component';
import { NgcntentChildComponent } from './part-5-ngcontent/ngcntent-child/ngcntent-child.component';
import { NgcontentRootComponent } from './part-5-ngcontent/ngcontent-root/ngcontent-root.component';
import { TemplateStatementsRootComponent } from './part-6-template-statements/template-statements-root/template-statements-root.component';
import { PipesRootComponent } from './part-7-pipes/pipes-root/pipes-root.component';
import { GreetingsPipePipe } from './part-7-pipes/greetings-pipe/greetings-pipe.pipe';
import { PropertyBindingRootComponent } from './part-8-property-binding/property-binding-root/property-binding-root.component';
import { ClassBindingRootComponent } from './part-9-class-binding/class-binding-root/class-binding-root.component';
import { EventBindingRootComponent } from './part-10-event-binding/event-binding-root/event-binding-root.component';
import { ItemDetailsComponent } from './part-10-event-binding/item-details/item-details.component';
import { AppSizerComponent } from './part-11-two-way-binding/app-sizer/app-sizer.component';
import { TwoWayRootComponent } from './part-11-two-way-binding/two-way-root/two-way-root.component';
import { TVRootComponent } from './part-12-template-variables/t-v-root/t-v-root.component';
import { DirectivesRootComponent } from './part-13-directives/directives-root/directives-root.component';
import { HighlightDirective } from './part-14-attribute-directives/highlight.directive';
import { ADRootComponent } from './part-14-attribute-directives/a-d-root/a-d-root.component';
import { SDRootComponent } from './part-15-structural-directives/s-d-root/s-d-root.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LifecycleComponent,
    TextInterpolationComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    NgcntentChildComponent,
    NgcontentRootComponent,
    TemplateStatementsRootComponent,
    PipesRootComponent,
    GreetingsPipePipe,
    PropertyBindingRootComponent,
    EventBindingRootComponent,
    ItemDetailsComponent,
    AppSizerComponent,
    TwoWayRootComponent,
    TVRootComponent,
    DirectivesRootComponent,
    HighlightDirective,
    ADRootComponent,
    SDRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
