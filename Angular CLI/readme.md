## why should we use Angular CLI?
1. manually setting up an Angular application from scratch is a laborious and time consuming process. We have to
    - Create a separate application folder and add the package definition file **( ie. package.json)** and other configuration files.
    - Install the packages using NPM
    - Create the **root application component (i.e AppComponent)** as every angular application should have atleast one component which is the root component. This root component bootstraps the angular application. 
    - Create the **root application module (AppModule)** as every angular application should have atleast one module which is the root module
    - Create **main.ts** file which is the entry point to the application. The code in this file, loads the angular root module - AppModule
    - Create **index.html** which hosts our application.

2. have to manually write all the boilerplate code yourself, which is not only monotonous but also time consuming.

3. In a real world application, we will have many components.:- 
    - Just imagine the amount of time we have to spend to create these different component files and the same boilerplate code. 
    - In an Angular application, in addition to components, we also have **directives, pipes, services** etc. 
    - Again imagine the amount of time it takes to create that same boilerplate code for all these.

4. In a real world, usually have more than one developer working on a given angular project. 
    - While all these developers are creating these different files and writing the required boiler plate code, are they following the angular teams best practices and conventions. 
    - What if the developers are not following them. How do we enforce them. 
    - Well, one way to enforce these is by manual code reviews. Code reviews are not only time consuming but also error prone. 

## What is Angular CLI ?
1. CLI stands for Command Line Interface. So Angular CLI is command line tool the help us 
2. Create Angular applications faster and with great consistency
3. Create the boiler plate code for angular features like components, directives, pipes, services etc.
4. Create boiler plate code for TypeScript features like classes, interfaces, enums etc.
5. It follows angular best practices and conventions out of the box
6. Run Unit and End-to-End (e2e) tests
7. Create optimised builds for deployment to production   

source:- http://csharp-video-tutorials.blogspot.com/2017/09/what-is-angular-cli.html

## how to install Angular CLI ?
#### Prerequisites for installing Angular CLI:-
To install Angular CLI you should have installed 
- **Node 6.9.0**  or higher, 
- **and NPM 3** or higher

####  Download latest version of Node and NPM from the following website
https://nodejs.org/en/download/ 

#### check the versions  
- node -v 
- npm -v

#### Install CLI
Run Command Prompt as an administrator and execute the following command. 
1. Install Globablly   
**npm install -g @angular/cli**  or **npm i -g @angular/cli**   
2. Install Locally   
**npm i @angular/cli**   
3. Install Specific Version (Example: 6.1.1)  
    **npm install -g @angular/cli@6.1.1**

  
![note: If you see a tree structure as shown below, you have Angular CLI installed successfully.](https://github.com/deepakkum21/AngularCrudWithMicroservices/tree/master/Angular%20CLI/images)