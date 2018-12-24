# Angular Module

## what are Angular modules ?
1. Angular Module is a class decorated with @NgModule decorator
2. An Angular Module is a mechanism to group components, directives, pipes and services that are related to a feature area of an angular application. 

#### e.g if you are building an application to manage employees, you might have the following features in your application.
| **Application** | **Feature	Description** |
| ------------- | --------------- |
| Employee Feature  | 	Deals with creating, reading, updating and deleting employees  | 
| Login Feature  | 	Deals with login, logout, authenticate and authorize users  | 
| Report Feature  | 	Deals with generating employee reports like total number of employees by department, top 10 best employees etc  | 

### feature modules. 
To group the components, directives, pipes and services related to a specific feature area, we create a module for each feature area.

### Various Angular Modules
In addition to **feature modules**, an Angular application also contains the following modules.  

| **Module Type** |	**Description** |  
| ------------- | --------------- |  
| Root Module |	Every Angular application has at least one module, the root module. By default, this root application module is called AppModule. We bootstrap this root module to launch the application. If the application that you are building is a simple application with a few components, then all you need is the root module. As the application starts to grow and become complex, in addition to the root module, we may add several feature modules. We then import these feature modules into the root module. |
| Core Module |	The most important use of this module is to include the providers of http services. Services in Angular are usually singletons. So to ensure that, only one instance of a given service is created across the entire application, we include all our singleton service providers in the core module. In most cases, a CoreModule is a pure services module with no declarations. The core module is then imported into the root module (AppModule) only. CoreModule should never be imported in any other module. |
| Shared Module | This module contains reusable components, directives, and pipes that we want to use across our application. The Shared module is then imported into specific Feature Modules as needed. The Shared module might also export the commonly used Angular modules like CommonModule, FormsModule etc. so they can be easily used across your application, without importing them in every Feature Module. |
| Routing Modules |	An angular application may also have one or more routing modules for application level routes and feature module routes |

### Advantages Of Angular Modules
there are several benefits of splitting an angular application into multiple Angular Modules  

| **Benefit** |	**Description** |   
| ------------- | --------------- |  
| Organizing Angular Application |	First of all, Modules are a great way to organise an angular application. Every feature area is present in it's own feature module. All Shared pieces (like components, directives & pipes) are present in a Shared module. All Singleton services are present in a core module. As we clearly know what is present in each module, it's easier to understand, find and change code if required |
| Code Reuse |	Modules are great way to reuse code. For example, if you have components, directives or pipes that you want to reuse, you include them in a Shared module and import it into the module where you need them rather than duplicating code. Code duplication is just plain wrong, and results in unmaintainable and error prone code. |
| Code Maintenance |  Since Angular Modules promote code reuse and separation of concerns, they are essential for writing maintainable code in angular projects |
| Performance |	Another great reason to refactor your application into modules is performance. Angular modules can be loaded either eagerly when the application starts or lazily on demand when they are actually needed or in the background. Lazy loading angular modules can significantly boost the application start up time. |


## @NgModule Decorator 
Angular module is a class that is decorated with **@NgModule decorator**. The @NgModule decorator has the following properties. 
- declarations
- bootstrap
- providers
- imports
- exports


## Creating a feature module in Angular:
Command to create a module with making it import in another module:         
**ng g m employee/employee --flat -m app**     
1. Creates the EmployeeModule in a file with name employee.module.ts. 
2. Imports EmployeeModule into the root module - AppModule.

**Let's understand this with an example**                                                               
![ex1](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/feature-module-eg1.PNG)                          
![ex2](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/feature-module-eg2.PNG)                                                              
![ex3](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/feature-module-eg3.PNG)                          
![ex4](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/feature-module-eg4.PNG)                                                              
![ex5](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/feature-module-eg5.PNG)                                

## Creating a separate routing module for a feature module.                                                   
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/routing-separation-employee-routing.PNG)
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/routing-separation-employee-routing1.PNG)
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/routing-separation-employee-routing3%2C4.PNG)
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/routing-separation-employee-routing5.PNG)
![](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/setting%20routing%20manually-Step5.PNG)



## RouterModule forRoot vs forChild  
1. *forRoot()* method **registers the specified routes**. It also **creates an instance of the Router service** and registers it with the angular's dependency injector.

2. *forChild()* method on the other hand **only registers the additional specified routes** and tells angular **to reuse the Router service instance that forRoot has created.**

3. **Angular services are singletons**. So, to ensure that, there is **only one instance of Router service, forRoot() method should be called only once** in the main application routing module. 

4. In all the feature routing modules **forChild() method should be used to register the additional routes**. When the **forChild() method is called, Angular Router knows it has to only register the additional specified routes and not to re-register the Angular Router service**.


## creating a shared module in angular.
1. The shared module **contains all the commonly used directives, pipes, and components** that **we want to share with other modules that import this shared module**.             
2. **Things to consider when creating a shared module**
    - The SharedModule may **re-export other common angular modules, such as CommonModule, FormsModule, ReactiveFormsModule** etc. Instead of writing the same code     in every feature module to import these commonly used Angular modules we can re-export them from a SharedModule, so these commonly used Angular Modules are       available to all the feature modules that import this SharedModule.
    - The **SharedModule should not have providers**. This is because, lazy loaded modules create their own branch on the Dependency Injection tree. As a result of     this,   if a lazy loaded module imports the shared module, we end up with more than one instance of the service provided by the shared module. the                **SharedModule should not import or     re-export modules that have providers.**  
    - The SharedModule is then imported by all the FeatureModules where we need the shared functionality. The **SharedModule can be imported by both - eager loaded     FeatureModules as well as lazy loaded FeatureModules**.  

3. CLI command to generate a SharedModule 
    - **ng g m shared/shared --flat -m employee/employee** 
    - In EmployeeModule (employee.module.ts), remove CommonModule and ReactiveFormsModule references as these modules are now provided by the imported SharedModule.

## Grouping routes and creating component less route in angular
1. **lazy loading angular module**
    - All the routes in an angular module that you want to **lazy load should have the same route prefix.**
2. **componentless-route** with same route prefix for lazy load
    - ![component-less route](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/componentless-route.PNG)
    - now we have a parent route with path employees
    - The parent 'employees' route has 3 child routes
    - All the 3 child routes will be pre-fixed with the parent route path - employees
    - now the parent route(employees) does not have a component associated with it. That is why this route is called a component less route.
    - Update the routes in the navigation menu

## lazy loading angular modules                                                                                          
(https://csharp-video-tutorials.blogspot.com/2018/12/lazy-loading-in-angular.html)
- At some point one can reach a tipping point where the application takes a very long time to load.
- Unless, lazy loading is not used, all the modules are eagerly loaded.
- **Eagerly loaded**
    - This means, all the modules in the angular application and their associated components, directives, pipes and services must be downloaded from the server, when the user first visits the application. 
    - Depending on the number of modules in your application and the internet speed, this could take a significant amount of time and may very badly affect the end user experience.
- **asynchronous routing or lazy loading**
    - loads feature modules lazily, on demand.
    - This can significantly reduce the initial load time of your application. 
- **requirements for lazy loading**
    - All the routes in the angular module that you want to lazy load **should have the same route prefix**.
    - The **module should not be referenced in any other module**. If it is referenced, the module loader will eagerly load it instead of lazily loading it.
- **implementation**
    - All our EmployeeModule routes have the same route prefix i.e employees.
    - At the moment, our application does not meet the second requirement.
    - To achieve this, include the following route in app-routing.module.ts file. 
    - This new route, lazily loads the EmployeeModule. 
    - Make sure the below route is before the wild card route in the AppRoutingModule. Otherwise we would not be able to get to any of the EmployeeModule routes.
    - **{ path: 'employees', loadChildren: './employee/employee.module#EmployeeModule' }**
        - loadchildren has two parts:- module_path followed by # and then moduleclassname                                        
        - ![lazyload](https://github.com/deepakkum21/Angular/blob/master/AngularModule/image/lazy-load.PNG)




## Module loading strategies in Angular 
- Eager Loading
- Lazy Loading
- Preloading

1. **Eager loading**
- With Eager Loading **all the modules must be downloaded onto the client machine before the application starts**. 
- by default, the angular modules are eagerly loaded.
- The **root application** module (AppModule) is **always eagerly loaded**.
- Eager loading works fine for small applications because a small application usually has, just a few modules. So eagerly downloading those few modules should not take a long time and hence it is not a performance bottle neck in a small application. But Eager loading all modules before the application starts is not right for a medium or large angular applications. In most cases, in a real world angular application we use a combination of these module loading strategies.
- There is nothing special that we have to do, for an Angular module to be eager loaded. It just needs to be referenced in the application using imports metadata of @NgModule decorator.
- Only the first request to the application takes a long time, but the subsequent requests from that same client will be faster. This is because, with eager loading, all the modules must be loaded before the application starts.

2. **Lazy loading**
- Lazy loaded modules are **loaded on demand when the user navigates to the routes in those respective modules**.
- To lazy load a module, **it should not be referenced in any other module**. If it is referenced, the module loader will eagerly load it instead of lazily loading it.
- Lazy loading can significantly reduce the initial application load time. 
- With lazy loading configured, our **application does not load every module on startup**. Only the **root module and any other essential modules** that the user expects to see when the application first **starts are loaded**.
- **Drawback**:-  When a route in a lazy loaded module is first requested, the user has to wait for that module to be downloaded.

3. **Preloading**
- Preloading is the same as lazy loading but happens slightly differently. 
- First, the module to bootstrap the application and eager loaded modules are downloaded.
- At this point, we have the application up and running and the user is interacting with the application.
- While the application has nothing else to download, **it downloads angular modules configured to preload in the background**.
- So, by the time the user navigates to a route in a lazy loaded module, it is already pre-loaded, so the user does not have to wait, and sees the component associated with that route right away.
- So with preloading modules, we have the best of both the worlds i.e Eager Loading and Lazy Loading.
- Preloading is also often called **Eager Lazy Loading**

### Configuring Preloading in Angular                                                                  
![Configuring Preloading in Angular]()

**The value for preloadingStrategy property can be one of the following**                                                                          
| **Value** |	**Description** |                                                                                                
| --------- | ----------------- |                                                                                                     
| NoPreloading |	This is the default and does not preload any modules |
| PreloadAllModules |	Preloads all modules as quickly as possible in the background |
| Custom Preload Strategy |	We can also specify our own custom preloading strategy. | 



