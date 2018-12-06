# Routing Module  
## How to implement manually   
**Step: 1**   
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/setting%20routing%20manually-Step1.PNG)    
**Step: 2**   
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/setting%20routing%20manually-Step2.PNG)    
**Step: 3**   
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/setting%20routing%20manually-Step3.PNG)    
**Step: 4**   
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/setting%20routing%20manually-Step4.PNG)    
**Step: 5**   
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/setting%20routing%20manually-Step5.PNG) 

**Important directives provided by the RouterModule:**   

| **Directive** | **Description** |
| ------------- | --------------- |
| routerLink | Tells the router where to navigate when the user clicks the navigation link   
| routerLinkActive |  When a route is active the routerLinkActive directive adds the active CSS class. When a route becomes inactive, the routerLinkActive directive removes the active CSS class. The routerLinkActive directive can be applied on the link element itself or it's parent. In this example, for the active route styling to work correctly, routerLinkActive directive must be applied on the <li> element and not the <a> element. |
| router-outlet | Specifies the location at which the routed component view template should be displayed  |    

![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/routing%20imp%20directive.PNG)


## How routing works in an angular application  
*Step 1* : Set <base href> in index.html.    
*Step 2* : Import the RouterModule into the application root module AppModule.   
*Step 3* : Configure the application routes.    
*Step 4* : Specify where you want the routed component view template to be displayed using the <router-outlet> directive  
*Step 5* : Create a navigation menu and tie the configured routes with the menu using the routerLink directive. Optionally, use the routerLinkActive directive to style the current route that is active, so the user knows the page that he is on, in the application.   

![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/how%20routing%20works.PNG)      

## Implementing routing in a separate routing module.   
It is better to implement routing in a separate module and then import that routing module in the AppModule.  
1. for separation of concerns.
2. for maintainability.
3. easier to find and change routing code if required.

**Moving routing code into it's own module is easy and straight forward** 
 
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/moving%20routing%20to%20dep%20module%20-step1%2C2.PNG)   
*Step: 3*
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/moving%20routing%20to%20dep%20module%20-step3.PNG)  


### here are the steps to implement routing in a separate module. Quick recap
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/quick%20recap%20for%20routing%20in%20separate%20module.PNG)


## To make Angular CLI generate a routing module  
use *--routing* option along with the ng new command when *generating a new Angular project*.   
**ng new ProjectName --routing**  

**Note** 
1. The above command will create a separate module for routing with all the configuration i.e. all above mentioned steps 1,2,3,5,6,7 but *except step 4 i.e. configuring the routes since it has routes where we want to route that has to be configured by user.*



