# Angular

## What is angular?
1. Angular is a javascript framework which allows you to create reactive Single-Page-Applications.
2. The dom is changed and not the whole thing, that's why it is loaded very fast without any round rotating symbol.
3. It loads all the required things in the background.

## Install Node

## Install Angular CLI
1. `npm install -g @angular/cli@latest`

## Create Angular App
1. `ng new app-name@angular-version`

## Webpack
- Webpack is a tool which bundles all the css and js files and adds them to the index.html file.

## Bootstrap
- `npm install --save bootstrap`

## How to import bootstrap 
1. In angular.json, in projects ---> styles ---> add the path of bootstrap.
2. "./node_modules/bootstrap/dist/css/bootstrap.min.css"

## To generate a new component
`ng g c component-name` or `ng generate component component-name`

## Ways for using selector
1. `selector: 'app-server'`    ------>  `<app-server></app-server>`
2. `selector: '[app-server]'`  ------>  `<div  app-server></div>`
3. `selector: '.app-server'`   ------>  `<div  class="app-server"></div>`

## String Interpolation
- {{  }} :- `whatever is in between the 2 curly braces has to return a string in the end or can be converted to string` i.e. **it can be a method which returns string or the variable which can be converted to string**

## What Is Binding?
1. Binding is the process which forms the connection between the application UI and the data which comes from the business logic.
2. In Angular, it can be called the automatic synchronization of the data from template and the view.
    - **{{ }} : String interpolation**
    - **( ) : used for the events which are raised from the elements**
    - **[ ] :  set the value from the component to the HTML element/DOM properties**
3. there are 3 types of bindings:
    - **Property Binding**
    1. **usnig interpolation {{ }}**
        - `<img src="{{imagepath}}" width="300px" height="150px" alt="image not found">`
        - used when you want to print something
    2. **using [ ] bracket** 
        - `<img [src]="imagepath" width="300px" height="150px" alt="image not found">`
        - used when we want to change the property of an element using some condition
    3. **using "bind-" prefix Before Element Property**
        - `<img bind-src="imagepath" width="100px" height="100px" alt="image not found">`
    
    - **Event Binding**
    1. **( ) = methodName()** or **( ) = methodName($event)**
        - bydefault $event contains the data which it has and if you want to pass it to the method pass $event to the methodname
        - `<button (click)="SendData(txtUserName.value,txtpassword.value,txtEmail.value)">SendData</button>`
    2. **appending "on-" before the event**
        - `<button on-click="SendData(txtUserName.value,txtpassword.value,txtEmail.value)">Click to send Data</button>`
    
## ng-template
    -   <h2 *ngIf="isPresent; else notPresent">bala bala</h2>
        <ng-template #notPresent>
            <p>hello bala</p>
        </ng-template>

## ng-style
- it is a style directive used for changing the style dynamically.
- works when used with propertyBinding.
- `<p [ngStyle]="{ backgroundColor: getColor() }"`

## ngClass
- adds the css class if the condition is true
- `<p [ngClass] = "{cssClassName : condition === 'thing_to_be_matched'}">`

## Difference between Structural and Attribute Directive

| **Attribute Directives** | **Structural Directives** |                                                    
| ------------------------ | ------------------------- |                                            
| Attribute directives look like a normal HTML Attribute and mainly **used in databinding and event binding**. | Structural Directives **start with a * symbol** and look different. | 
| Attribute Directives **affect only the element they are added to**. | Structural Directives **affect the whole area in the DOM**. |  
| Attribute Directives doesnot add or remove elements.  | Structural Directives add or remove elements. |                              

## @Input()
- @Input links a property of a component (which is generally the child component) with a value that was given by another component (the parent).
- eg:-
    - Let’s say that we have a component named ‘parentComponent’ and another component named ‘childComponent’. The parent wants to send a simple message that will be caught and displayed by the child.
    - So first, let’s create a simple string variable in our parent.component.ts file. It will contain the message that we want to give to our child.
    -   `messageToSendP: string = '';`    ----> **Parent**
    - Then, in the child.component.ts file, we will define a simple variable ‘receivedParentMessage’ that will be the displayed message from the parent inside the child. Add the @Input decorator in front of the variable like this:
    - `@Input() receivedParentMessage: string;`    ----> **child**
    - Now that we have our input the parent is able to know where it can give its message. We simply need to pass the parent message when we are calling the child.
    - `<app-child [receivedParentMessage]="messageToSendP"></app-child>`    ------> **Parent**
    - Now you can display the ‘receivedParentMessage’ into your child.component.html file the way you want.
    - **Alias to custom properties**
    - `@Input('aliasPropertyName') receivedParentMessage: string;`    ----> **child**
    - `<app-child [aliasPropertyName]="messageToSendP"></app-child>`    ------> **Parent**


## @Output() decorator
- the @Output decorator is used to link a property of a child component and emit it through the event emitter. So the parent component can call the property and get the data emitted from it.
- eg.
    - Let’s focus on the @Output. We now want our parent to get some data coming from our child. Basically, the child has to emit his message and the parent will receive it.
    - We can simply start by defining another string variable which represents the message given by the child inside our parent.component.ts. Then, in the child component we define our message property that will be sent. This time, we add the @Output decorator and we make it a new EventEmitter (make sure that you have imported the EventEmitter from Angular core!).
    - `receivedChildMessage: string;`   ------> **Parent**
    - `@Output() messageToEmit = new EventEmitter<string>();`    ------>**child**
    - As you can see, when creating a new EventEmitter, we have to specify the type of the element that will be emitted. In our case, we put string.
    - Now, we can emit our message so that our parent can receive it. Let’s create a simple function that can be called by clicking on a button for example.
        - `<button (click)="sendMessageToParent(messageToSendC)">Send to Parent</button>`   ---->**child**
        -       sendMessageToParent(message: string) {              ----> child
                    this.messageToEmit.emit(message)
                }
        -       receivedChildMessage: string;                       ----> parent
                getMessage(message: string) {
                    this.receivedChildMessage = message;
                }
        -       <app-child (messageToEmit)="getMessage($event)"></app-child>   ----> parent


### Summarise: 
1. **@Input**: is used to pass data from parent to child and the opposite, 
2. **@Output**: can be used when you want to pass data from the child to the parent (which can also be done with observables or simple functions).



## View Encapsulation
- **By default `encapsulation: ViewEncapsulation.Emulated`
- This is the property of the angular to give a unique attribute name to each element of the component different from other component
- This attribute name is appended to the element as the attribute name.
- for this reason the css applied to one component does not affect the other component.
- **if doesnot want the view Encapsulation**
    - in @Component `encapsulation: ViewEncapsulation.None`  ===> This would force angular not give unique attibute name and also **the css property defined here will be applied as gobal to the whole project where that css property is used regardless wheather that is using view encapsulation or not**.
- **If want to use shadow DOM**
    - in @Component `encapsulation: ViewEncapsulation.Native`  ===> This would use shadow DOM technique but few browser only support this. SO, not recommended.


## Local References in Angular (template only)
- **Instead of two-way binding, we can easily fetch a value of any input through local references** in Angular.
- eg 

        <input type="text" #serverNameInput>
        <button class="btn btn-primary (click)="onAddServer(serverNameInput)>Add Server</button>

        onAddServer(nameInput: HTMLInputElement){
            console.log(nameInput.value);       ====> value of the input box 
            console.log(nameInput);             ====> <input type="text" #serverNameInput>
        }

## @ViewChild()
- Works for the same component ts and html file.
- it can be used when want to get access of the before the method where the local reference is passed.
- eg 

        <input type="text" #serverContentInput>

        @ViewChild('serverContentInput') serverContentInput: ElementRef;

- and to get the value from serverContentInput **serverContentInput.nativeElement.value**.
- the argument to the viewchild can be the `componentName` like **@viewChild(firstComponent) firstComp: firstComponent** and will refer to the first occurrence of that component.

## ng-content tag:
1. 1. `<component_1> Something which need to be placed or used </component_1>`
1. 2. `<ng-content></ng-content>`  ---> component_1
1. 3. The thing will be placed in the place where the ng-content is palced.
2. The thing can be anything a component or element .

3.  That is the simplest way to explain what ng-content provides. You use the <ng-content></ng-content> tag as a placeholder for that dynamic content, then when the template is parsed Angular will replace that placeholder tag with your content.

4. The technical term for this is **“content projection"** because **you are projecting content from the parent component into the designated child component**.

## Lifecycle

| **methods** | **Description** |                                                                        
| ----------- | --------------- |                                                   
| ngOnChanges | called when a bound input property changes |
| ngOnInit | called once the property is initialized |
| ngDoCheck | called during every change detection run |
| ngAfterContentInit | called after (ng-content) has been projected to the view. Before this a user cannot get or check any value of the <ng-content> in DOM.|
| ngAfterContentChecked | called every time the projected content has been checked |
| ngAfterViewInit | called after the components view (and child view) has been initialized . Before this a user cannot get or check any value of the element in DOM. |
| ngAfterViewChecked | called every time the view (and child view) have been checked |
| ngOnDestroy | called once the component is about to destroy |


## @ContentChild('refName') 
- [Content Child](https://github.com/deepakkum21/Angular/blob/master/Angular7-%208/src/assets/ViewChildren%20%26%20ContentChildren%20%E2%80%A2%20Angular.pdf)


## Custom Atrribute Directive:
-       import {Directive, ElementRef, OnInit } from '@angular/core';

        @Directive({
            selector: '[appbasicHighlight]'
        })

        export class BasicCustomAttributeDirective implements OnInit {
            constructor(private elementRef: ElementRef) {
            }

            ngOnInit(){
                this.elementRef.nativeElement.style.backgroudColor = 'green';
            }
        }


        <p appbasicHighlight> This is the style by custom attribute directive </p>

- **Not a good practise to access the element directly , use renderer**
- Add This in declarations array of module so that angular knows about this.
- Directives doesn't have view so no cannot implement ViewInit interface
- Better approach using Renderer
-       import {Directive, ElementRef, RendererV2, OnInit } from '@angular/core';

        @Directive({
            selector: '[appbasicHighlight]'
        })

        export class BasicCustomAttributeDirective implements OnInit {
            constructor(private elementRef: ElementRef, private renderer: RendererV2) {
            }

            ngOnInit(){
                this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
            }
        }


        <p appbasicHighlight> This is the style by custom attribute directive </p>


## @HostListener to Listen to Events
- **This is a function decorator that accepts an event name as an argument. When that event gets fired on the host element it calls the associated function.**
-       @HostListener('mouseover') onHover() {
            window.alert("hover");
        }
- If want to change on some Events
-       import {Directive, ElementRef, RendererV2, OnInit, HostListener } from '@angular/core';

        @Directive({
            selector: '[appbasicHighlight]'
        })

        export class BasicCustomAttributeDirective implements OnInit {
            constructor(private elementRef: ElementRef, private renderer: RendererV2) {
            }

            ngOnInit(){
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
            }

            @HostListener('mouseenter') mouseOver(eventData: Event) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
            }

            @HostListener('mouseleave') mouseLeave(eventData: Event) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
            }
        }


        <p appbasicHighlight> This is the style by custom attribute directive using HostListener</p>

## @HostBinding can be used instead of Renderer
- As well as listening to output events from the host element a **directive can also bind to input properties in the host element with @HostBinding.**
- This directive can change the properties of the host element, such as the list of classes that are set on the host element as well as a number of other properties.
- Using the **@HostBinding decorator a directive can link an internal property to an input property on the host element**. **So if the internal property changed the input property on the host element would also change**.
- We **first need something, a property on our directive which we can use as a source for binding**.
-       import {Directive, ElementRef, RendererV2, OnInit, HostListener } from '@angular/core';

        @Directive({
            selector: '[appbasicHighlight]'
        })

        export class BasicCustomAttributeDirective implements OnInit {

            @HostBinding('style:backgroundColor') backgroundColor: string = 'transparent';

            constructor(private elementRef: ElementRef, private renderer: RendererV2) {
            }

            ngOnInit(){
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
            }

            @HostListener('mouseenter') mouseOver(eventData: Event) {
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
                this.backgroundColor = 'blue';
            }

            @HostListener('mouseleave') mouseLeave(eventData: Event) {
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
                this.backgroundColor = 'transparent';
            }
        }


        <p appbasicHighlight> This is the style by custom attribute directive with HostBinding</p>

- If we want the **property to be passed to the directive**.
-       import {Directive, ElementRef, RendererV2, OnInit, HostListener } from '@angular/core';

        @Directive({
            selector: '[appbasicHighlight]'
        })

        export class BasicCustomAttributeDirective implements OnInit {

            @Input() defaultColor: string = 'transparent';
            @Input() highlightColor: string = 'blue';

            @HostBinding('style:backgroundColor') backgroundColor: string;

            constructor(private elementRef: ElementRef, private renderer: RendererV2) {
            }

            ngOnInit(){
                this.backgroundColor = this.defaultColor;
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
            }

            @HostListener('mouseenter') mouseOver(eventData: Event) {
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
                this.backgroundColor = 'blue';
            }

            @HostListener('mouseleave') mouseLeave(eventData: Event) {
                // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
                this.backgroundColor = 'transparent';
            }
        }


        <p appbasicHighlight [defaultColor] = "'yellow'" highlightColor="red"> This is the style by custom attribute directive with HostBinding and property passing</p>


## Role of * in the ng Structural directive
- **'*'** gets transformed to different code by angular as there is nothing * in angular.
-       <div *ngIf="!onlyOdd">
            <li
                [ngClass]="{odd: even % 2 !==0}"
                [ngStyle] = "{backgroudColor: even % 2 !== 0 ? 'yellow' : 'transparent'}"
                *ngFor = "let even of evenNumbers">
            </li>
        </div>
- The above code is transformed in 
-       <ng-template [ngIf]="!onlyOdd">
            <div>
                <li
                    [ngClass]="{odd: even % 2 !==0}"
                    [ngStyle] = "{backgroudColor: even % 2 !== 0 ? 'yellow' : 'transparent'}"
                    *ngFor = "let even of evenNumbers">
                </li>
            </div>
        </ng-template>     

## Building A Structural directive
- ViewContainerRef = where we want to palce this directive in the document.
-       import {Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

        @Directive({
            selector: '[unlessStructDir]'
        })

        export class UnlessCustomStructuralDirective {
            @Input() set unlessStructDir(condition: boolean) {
                if(!condition) {
                    this.vcRef.createEmbeddedView(this.tempRef);
                } else {
                    this.vcRef.clear();
                }
            }

            constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

            }
        }


        <div *unlessStructDir="!onlyOdd">
            <li
                [ngClass]="{odd: even % 2 !==0}"
                [ngStyle] = "{backgroudColor: even % 2 !== 0 ? 'yellow' : 'transparent'}"
                *ngFor = "let even of evenNumbers">
            </li>
        </div>


- Add this in declarations array of module so that angular knows about this.

## ngSwitch
-       <div [ngSwitch]="value">
            <p *ngSwitchCase = "5">Value is 5 </p>
            <p *ngSwitchCase = "10">Value is 10 </p>
            <p *ngSwitchCase = "15">Value is 15 </p>
            <p *ngSwitchCase = "20">Value is 20 </p>
            <p *ngSwitchCase = "25">Value is 25 </p>
            <p *ngSwitchDefault> Default Value </p>
        </div>


        value = 5;


### Notes:
- Whenever returning a array from the method of get return by slice(), since when returning the array,the reference also gets return which might result in updation of the original array, and slice gives a new array.


        






