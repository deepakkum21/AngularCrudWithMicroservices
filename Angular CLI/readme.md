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

  
![note: If you see a tree structure as shown below, you have Angular CLI installed successfully.](https://github.com/deepakkum21/AngularCrudWithMicroservices/blob/master/Angular%20CLI/images/successfull%20installation%20pic.png)  

#### To verify the version of Angular CLI installed
**ng -v**
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20verify.png)

#### If problems installing Angular CLI
1. Delete "npm" folder from the following path C:\Users\Your_UserName\AppData\Roaming 
    - If you cannot find "AppData" folder, make sure in your windows operating system, you have "Show hidden files, folders, and drives" option is turned on. "AppData" is a hidden folder.
2. Once you have the "npm" folder deleted, uninstall node.js. On a windows machine you can uninstall node.js from Control Panel\All Control Panel Items\Programs and Features. Right click on "Node.js" and select "uninstall" from the context menu. 
3. Reinstall Node.js by downloading the appropriate installer for your operating system from the following link.
https://nodejs.org/en/download/ 
4. Run Command Prompt as an Administrator and try to install Angular CLI again using the following command **npm install -g @angular/cli**


## To create a new Angular Project
- open Command Prompt as an Administrator and execute the following command. 
The below command will perform following task:-
- creates all the required files
- also installs all the required packages
**c:\>ng new MyFirstApp**
- ng is the Angular CLI
- new for creating a new application
- MyFirstApp is the name of your angular application

#### So what did this "ng new" command do
- A new folder with name MyFirstApp is created
- All the required configuration and source files are created.
- All the npm dependencies are installed in node_modules folder
- Unit and end-to-end tests are created
- The Karma unit test runner is configured
- The Protractor end-to-end test framework is configured

Now, go to the folder (MyFirstApp) that contains our angular project, by executing the following command. cd stands for change directory
cd MyFirstApp

![At this point in Visual Studio Code you will see all the Angular project files. node_modules folder, that conatins all the installed packages](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20create%20new%20project.png)
#### To run the project using Angular CLI
**ng serve --open**
the above Command will do following things:-
- builds the application and opens it in our default browser
- The flag --open, launches our default browser and runs the application
- By default the application runs on port 4200

#### To Stop the Server
press CTRL + C while you are on the command prompt and then "Y" and ENTER key.

#### To run all the unit tests, use the following command
**ng test**

#### To run all the end-to-end tests, use the following command
**ng e2e**

## how to customise command prompt window
1. To find help  
ng --help. or ng command_name --help  
2. To redirect the output of ng --help command to the windows clipboard, use the CLIP command as shown below.  
ng --help | clip  
Once you have the output copied in the clipboard you can paste it anywhere you want it. For example in a notepad, word document etc.
3. can also redirect the output directly to a text document using the following command. This command creates a text document with name MyTextDoc.txt  in the folder where you have executed the command. This text documents will have the output of the command ng --help.  
ng --help >MyTextDoc.txt
4. Similarly you can also redirect the output to a word document.   
ng --help >MyWordDoc.doc


## some of the common options that we can use with ng new command. 
The table below shows the common options, their data types, default values, alias and a short description of what they do.    

| **Flag** |	**Type** |	**Default** |	**Alias** |	**Purpose** |
| -------- | ----------- | ------------ | ----------- | ----------- |
| --dry-run |	Boolean |	false |	-d |	Run through without making any changes. Just reports the files that will be created |
| --skip-install |	Boolean |	false |	-si |	Skip installing packages |
| --skip-tests |	Boolean |	false |	-st |	Skip creating tests |
| --inline-style |	Boolean |	false |	-is |	Use inline styles when generating the new application |
| --inline-template |	Boolean |	false |	-it |	Use inline templates when generating the new project |


## Angular CLI configuration file 
1. .angular-cli.json till - V5 
2. .angular.json from V6

![configuration file that the Angular CLI uses](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/Angular%20CLI%20configuration%20file.png)

#### The settings from this file are used when we 
1. Generate angular features likes components, pipes, services etc
2. Run unit and end-to-end tests
3. Build the application etc.

#### The table below shows some of the settings and their purpose. 

| **Setting** |	**Purpose** |
| ----------- | ----------- |
| project : name |	Name of the project |
| apps: root |	The root directory of the application. Default is **src**. We can change this using the **"source-dir"** option when generating a new angular project using the **"ng new"** command |
| apps: outDir |	The output directory for build results. Default is **dist** |
| apps: assets |	List of application assets that you want to copy when building your project. By default, the **src/assets/** folder and **src/favicon.ico** are copied over |
| apps: index |	The name of the start HTML file which is **index.html** by default |
| apps: main |	The name of the main entry-point file. **main.ts** by default |
| apps: polyfills |	The name of the **polyfills** file. Angular is built on the latest standards of the web platform. Targeting such a wide range of browsers is challenging because not all browsers support all features of modern browsers. This can be compensated by using polyfill scripts that implement missing features in JavaScript |
| apps: styles |	Global styles to be included in the build. Default is **styles.css**. We can also use **less** or **scss**. To change to less or scss, use the **"style"** option when generating a new angular project using the **"ng new"** command |
| apps: prefix |	The selector prefix to apply for the generated components. Default is **"app"**. This can be changed by using the **"prefix"** option when generating a new angular project using the **"ng new"** command |

#### The important point
1. The values in the Angular CLI configuration file depends on the options that you have used with the **"ng new"** command when generating a new angular project.
    - For example, if you do not use the **--prefix option** *with the "ng new" command*, then the **default value "app" is stored in the configuration file** for "prefix" setting. So the root component (AppComponent) that is created at the application generation time has "app" as the selector prefix.

2. Instead if you want **"deepak" as the prefix, use --prefix flag along with "ng new" command**. When you do this several things happen 
    - "deepak" is stored as the "prefix" setting value in .angular-cli.json configuration file
    - "deepak" is used as the selector prefix for the root component that the "ng new" command generates . 
    eg: ng new --prefix deepak or ng new App --skip-install --prefix deepak
    - Any new component that you generate in the future using the following command will also have "deepak" as the selector prefix
      ng generate component componentName
    - If you want to override the prefix setting in the angular cli configuration file, you can use --prefix option with the generate command as shown below. This      will generate the component "xyz" with the prefix "tech" instead of "deepak" 
    e.g: ng generate component compName --prefix tech
    - Some of the options like --prefix can be used with several commands like ng new and ng generate 


## Angular project structure
![project structure](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20create%20new%20project.png)   

The table below shows the purpose of each file/folder.    

| **File / Folder** |	**Purpose** |    
| ----------------- | ------------- |    
| package.json |	This file contains the packages to build and run our application. It contains two sets of packages, dependencies and devDependencies. The dependencies are essential for running the application. The devDependencies are only required to develop the application. These packages are installed into the node_modules folder by the Node Package Manager (npm), when npm install commaned is excuted. You can also add your own custom scripts here. "scripts" property in package.json file contains the useful npm commands. Notice we have "start": "ng serve". This means when we execute npm start it executes ng serve which builds and starts the server. In addition if you also want to launch the browser and open the application. CHANGE **"start": "ng serve" TO "start": "ng serve --open"**  now when you will execute command **npm start** it will execute ng serve --open |  
| node_modules |	The packages specified in package.json file are installed into this folder when we run npm install command |
| e2e Folder |	Contains end-to-end tests and their configuration files. We will discuss end-to-end tests in our upcoming videos |
| .angular-cli.json => till V5 .angular.json => from V6 |	This is the Angular CLI configuration file. We discussed the use of this file in our previous video. |
| .editorconfig |	Configuration file for Visual Studio Code. The settings in this file let you set certain code style guidelines. For example what indent_style do you want - spaces or tabs and what should be the indent size etc. You can share this editorconfig file with other developers to maintain consistent coding styles. To read more about editor configuration please visit http://editorconfig.org |
| .gitignore |	This file is used to determine files and folders you don't want to check in to source control. For example one of the folders we do not want to check in to source control is /dist folder which is auto generated when we build the application. So this folder is listed in this file. So, all the files and folders listed in this file are ignored, when a change set is checked in to source control. |
| karma.conf.js |	Karma is the unit test runner for angular applications. As the name implies, karma.conf.js is the configuration file for Karma. |
| protractor.conf.js |	Protractor is an end-to-end test framework for Angular applications. As the name implies, protractor.conf.js is the configuration file for Protractor. |
| README.md |	This is a README file which contains the commonly used Angular CLI commands out of the box. You may enhance it with your own project documentation so that anyone checking out the repo knows the commands to use to build, run and test your app. |
| tsconfig.json |	This is the TypeScript compiler configuration file. This file has several TypeScript compiler configuration settings. For example, to compile TypeScript to JavaScript on saving a TypeScript file set compileOnSave setting to true. If you do not want .map files to be generated, set sourceMap to false. .map files are used for debugging your application. |
| tslint.json |	Angular has a linting tool that checks our TypeScript code for programmatic and stylistic errors as well as non-adherence to coding standards and conventions. tslint.json is the configuration file for linting. |

## Angular project/src folder structure
![src folder structure](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/src%20folder%20structure.PNG)    

The following table has "src" folder and it's contents. 

| **File / Folder** |	**Purpose** |
| ----------------- | ------------- |
| src folder |	As the name implies, this folder contains all our angular project source code. Components, templates, pipes, services, images, styles etc that our angular application needs are present in this folder. **The rest of the files and folders that are present outside this folder, are there to support building our angular application** |
| assets |	As the name implies, the assets folder contains the assets of your application like images and anything else to be copied when you build your application |
| environments |	This folder contains the environment files. By default we have 2 environment files. environment.ts is for for development environment. Notice production property in this file is set to false. environment.prod.ts is for production. Notice in this file production property is set to true as expected. The build system defaults to the dev environment which uses `environment.ts`, but if we do a production build environment.prod.ts will be used. The file and environment mapping is in Angular CLI configuration file (.angular-cli.json) |
| favicon.ico |	This is the favorite icon for your application which is typically displayed in the browser address bar and next to the page name in a list of bookmarks. Angular CLI provides this favorite icon out of the box. You may replace this favicon with your own company favicon |
| index.html |	The main HTML page that is served when someone visits your site |
| main.ts |	The main entry point for the application. This file contains the code to bootstrap the application root module (AppModule) |
| polyfills.ts |	This is the polyfills file. Angular is built on the latest standards of the web platform. Targeting such a wide range of browsers is challenging because not all browsers support all features of modern browsers. This can be compensated by using polyfill scripts as they implement the missing features in JavaScript. So these polyfills allow us to use an API regardless of whether it is supported by a browser or not |
| styles.css |	This file contains the global styles of our application. Styles that are local and specific to a component are often defined with in the component itself for easier maintenance |
| test.ts |	This file is the main entry point for unit tests and loads all the .spec and framework files |
| tsconfig.app.json |	TypeScript compiler configuration for the Angular app |
| tsconfig.spec.json |	TypeScript compiler configuration for the unit tests |
| typings.d.ts |	This is the TypeScript typings file. Many JavaScript libraries, such as jQuery, Angular etc extend the JavaScript environment with features and syntax that the TypeScript compiler doesn't recognize natively. When the typeScript compiler doesn't recognize something, it throws an error. So, we use TypeScript type definition files to tell the compiler about those libraries. These TypeScript type definition files have the extension d.ts. TypeScript editors leverage these type definition files to display type information. Many libraries include type definition files in their npm packages. Angular is one such library. For example, if you look inside node_modules/@angular/core/ folder in an Angular application, it already contains the type definition files. All the files that have the extenstion d.ts are the type definition files. |
| app.component.{ts,html,css,spec.ts} |	The root component (AppComponent) TypeScript, HTML template, StyleSheet and Spec files |
| app.module.ts |	This is the root application module (AppModule) |


## generating components using Angular CLI with different options. 
1. *must have the npm packages installed* to be able to generate components using Angular CLI
2. Otherwise when we try to generate components using the ng generate command we will get the following error.   
   *node_modules appears empty, you may need to run 'npm install'*
3. The following command creates a new Angular project with name "myProject" but it does not install the npm packages as we have used -si flag. The -si flag as we       know skips installing the npm packages.   
**ng new myProject -si**
4. At this point if we try to generate a new component using the following ng generate command, it reports an error - node_modules appears empty, you may need to run 'npm install'    
**ng generate component abc**
5. To generate a component use the following Angular CLI command     
**ng generate component ComponentName**      
OR the shortcut as shown below. In the following command the letter g stands for generate and the letter c stands for component   
**ng g c ComponentName**

#### When we execute this command (ng g c abc) , several things happen
1. A folder with name abc is created
2. The component files (Component class, View template, CSS file and the spec file ) are created and placed inside the folder "abc"
3. The root module file (app.module.ts) is also updated with our new component i.e the required import statement to import the abc component from the component file is included and the component is also declared in the declarations array of the *@NgModule()* decorator

**When we execute ng g c abc**  
![When we execute ng g c abc](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20generate%20component%20example.png)

#### Generating a new component without a folder : 
To create a component without a folder, use --flat option with the ng generate command    

**ng g c pqr --flat**   
![When we execute ng g c pqr --flat](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20generate%20component%20without%20folder.png)

**ng g c abc/jkl --flat**   
![Placing the flat component files in a different folder other than app ng g c abc/jkl --flat](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20flat%20component%20placing%20in%20another%20component.png)

**Using --dry-run flag with component generation**  
![Using --dry-run flag with component generation](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20generate%20component%20dry%20run.png)

**want an inline template and styles instead of an external template and stylesheet, use -it flag for inline template and -is flag for inline styles**  
![want an inline template and styles instead of an external template and stylesheet, use -it flag for inline template and -is flag for inline styles](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20generate%20component%20without%20spec.png)

**sass instead of CSS with your component, use the --style=scss flag with ng generate command. If you want less use --style=less**    
![sass instead of CSS with your component, use the --style=scss flag with ng generate command. If you want less use --style=less](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20generate%20component%20with%20scss.png)



## Generating services using the Angular CLI

1. To generate a service   
**ng generate service serviceName OR ng g s serviceName**  

2. To *not only generates employee service, it also registers our service witht the AppModule*   
**ng generate service employee -module=app.module**   

3. If you do not want the spec file, simply set *--spec=false *   
**ng g s student -d --spec=false**

4. If you want a folder of it's own for a service that the Angular CLI is generating, *set --flat* option to false     
**ng g s student -d --spec=false --flat=false**

![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20service%20through%20cli.PNG)    
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20service%20through%20cli%20with%20options.PNG)

## Generating Modules using the Angular CLI   

1. To generate a module use    
**ng generate module moduleName** OR **ng g m moduleName**      
  by default it wouldn't create .spec.ts file and will create a dedicated folder for the module with module name

2. To generate a students module with dry run option we could use   
**ng generate module students -d** OR **ng g m students -d**   

3. The following command *not only generates students module, it also imports it into the root module (AppModule)*    
**ng g m students -d -m=app.module**    

4. If you also want a spec file to be generated use the --spec option  
**ng g m students -d -m=app.module --spec=true**    

5. If you *do not want a dedicated folder for the module you are generating, use --flat option*.   
**ng g m students -m=app.module --spec=true --flat=true**    

![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20modules%20using%20cli.PNG)      
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20modules%20using%20cli%20with%20options.PNG)  


## Generating directives, pipes and routing guards using the Angular CLI.   
Generating directives, pipes, routing guards and other angular features is very similar to generating component and services.     

| **Angular Feature** |	**Complete Command** |	**Alias** |   
| ------------------- | -------------------- | ---------- |   
| Directive |	ng generate directive directiveName |	ng g d directiveName |   
| Pipe |	ng generate pipe pipeName |	ng g p pipeName |   
| Routing Guard |	ng generate guard guardName |	ng g g guardName |  

**Please note :** When you try to generate a directive, pipe or a component, and *if you have multiple modules in your angular project you may get the following error*   
*More than one module matches. Use skip-import option to skip importing the component into the closest module*
**Sol:-**   
*The reason we are getting this error is we have more than one module in our angular project*, so Angular CLI does not know with which module the newly generated directive, pipe or component should be registered. So we have 2 options here.  
1. Use --skip-import option to tell Angular CLI not to import and register the generated component, directive or pipe      
**ng g d directiveName --skip-import -d**  
2. Use --module option or it's alias -m to tell Angular CLI the module with which we want our newly generated component, directive or pipe should be registered.    
**ng g d directiveName -m=app.module -d**    

*When genearting certain angular features like services or routing guards*, you **will not get this error**, even when you have multiple modules in your project, **because by default, Angular CLI does not try to import and register these features**.   

| **Option** |	**Purpose** |   
| ---------- | ------------ |     
| flat |	Specifies if a dedicated folder should be created |   
| module |	Specifies the module with which the newly generated angular feature should be rigstered |   
| spec |	Specifies if a spec file should be generated |   

![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20guard%2C%20pipe%2C%20directives%20using%20cli.PNG)    
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20guard%2C%20pipe%2C%20directives%20using%20cli%20with%20option.PNG)


## To generate a class, Interface, Enum :   
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20enum%2C%20class%2C%20interface.PNG)   
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20class.PNG)   
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/generating%20enum%2C%20interface.PNG)    


## Linting TypeScript Code   
*Linting is a tool that checks our TypeScript code for* :-
- programmatic 
- stylistic errors 
- non-adherence to coding standards and conventions  

**tslint.json** is the *configuration file for linting*. This file **contains all the default rules for linting our code**.   
*command to lint the code* 
**ng lint** 

1. If new angular project and all the code in the project is auto-generated, we do not have any linting errors and we get the message    
*- All files pass linting.*  
**Warning: The 'no-use-before-declare' rule requires type checking**  

2. Basically this warning is saying, *if 'no-use-before-declare' rule is enabled* we need to *use --type-check option with the ng lint command*  
**ng lint --type-check**

3. *'no-use-before-declare' rule is enabled out of the box* and **it disallows usage of variables before their declaration**.   
4. At this point, execute ng lint command again with --type-check option    
*ERROR: C:/AngularProject/src/app/app.component.ts[12, 17]: variable 'message' used before declaration*
*ERROR: C:/AngularProject/src/app/app.component.ts[13, 5]: Forbidden 'var' keyword, use 'let' or 'const' instead* 

5. if *no-var-keyword* is set to false then variable can be declared with var keyword.
note:-  
 - only var keyword variable can be accessed without declaring it        
 - variable with let and const are not allowed with this kinf of strategy.    
 - Variables declared with let keyword are not accessible before they are declared. So this rule 'no-use-before-declare' can be safely disabled, if you have 'no-var-keyword' rule enabled.  
 - When 'no-use-before-declare' rule is disabled and when we run ng lint command without --type-check option, we will no longer get the below warning 
*The 'no-use-before-declare' rule requires type checking*   

| **Lint Rules** | **byDefault** | **Description** |    
| -------------- | ------------- | --------------- |     
| no-use-before-declare | true | i.e you cannot use any variable before declaring it.|
| no-var-keyword | true | you cannot use var keyword . can only use const or let | 
| quotemark | true for single | rule specifies whether you want single or double quotes for string |
| no-trailing-whitespace | true |rule disallows trailing whitespace at the end of a line |
| semicolon | true | rule specifies that a line should be terminated with a semicolon |
| comment-format | true | rule specifies that all single-line comments must begin with a space |
| component-class-suffix | true | rule enforces that a component class should end with the suffix Component |
| use-life-cycle-interface | true | rule enforces that you add the implements keyword for every lifecycle hook you use  | 

*note:-*
- *Some of the linting errors support automatic fix*. To have these linting errors fixed automatically, *run ng lint command with the --fix option*.    
**ng lint --fix**

![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/lint%20--help.PNG)   



## How to display linting errors in Visual Studio Code 
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/ts%20lint%20installation.PNG)
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/ts%20lint%20removing%20error%20and%20disabling%20it.PNG)


## Routing Module (What , How to create, Separation from code, Generating by CLI):   
[https://github.com/deepakkum21/Angular/tree/master/AngularModule/Routing%20Module]    


## Running angular app locally   
### What happens when ng serve --open   
**Angular CLI runs Webpack to build and bundle all JavaScript and CSS code**. The following are the bundles.   

| **Bundle File** |	**What it contains** |  
| --------------- | -------------------- |   
| inline.bundle.js |	WebPack runtime. Required for WebPack to do it's job |  
| main.bundle.js |	All our application code that we write |  
| polyfills.bundle.js |	Browser Polyfills |  
| styles.bundle.js |	Styles used by the application |  
| vendor.bundle.js |	Angular and 3rd party vendor files |  


### What is bundling and why is it important for performance??    
1. A typical real world angular application is made up of many components. 
 - Each component code is in it's own .ts file which gets transpiled to JavaScript i.e to a .js file. 
 - Along the same lines, a component may also have it's own .css file for styles. 
 - So our angular application code is in many small files. 
 - In addition to our application code files, we also have vendor code files like Angular, jQuery etc.    

 2. Because of browser limitation, any application may suffer from performance perspective, if it has many JavaScript and CSS files to download.   

 3. *Bundling can solve this problem by combining many small application and library files into a few bundles*  

 ### Various ways to see generated bundle files:-
1. execute the **"ng serve --open"** command in a command prompt window, upon build completion you can see the generated bundles in the command prompt   
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/webpack%20generating%20various%20files.PNG)    

2. When the application is served in the browser you can see the generated *bundles on the "Elements" tab in Browser Developer Tools*. 
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/element%20tab%20to%20see%20generated%20bundles.PNG)    

3. Also can see these bundles on the *"Sources" tab in Browser Developer Tools*.
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/source%20tab%20to%20see%20generated%20bundles.PNG)     

4. Can also *bundles along with their sizes click on the Network tab*. If you don't see the bundles, refresh the browser window by pressing F5. 
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/size%20of%20generated%20bumdle%20-%20network%20tab.PNG)   


### Optimisation techniques to improve performance:  
1. Webpack Bundling
2. Ahead-of-Time (AOT) Compilation
3. Minification
4. Uglification 
5. TreeShaking  

**Notes:  ng serve**
1. Builds and serves the application from memory for a faster development experience.
2. It does not write the build artefacts to the disk, so we cannot use this command if you want to deploy the build to another server. 
3. *For example*, if you want **to deploy your angular application to a test server for testing, or to your production server we cannot use ng serve**
4. **ng build**. This command *writes the build artefacts to the specified output folder, so the application can be deployed elsewhere. *  


## ng serve
1. To see the list of all options that we can use with "ng serve" command use --help option
**ng serve --help** 
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/ng%20serve%20--help.PNG)

https://github.com/angular/angular-cli/wiki/serve
https://angular.io/cli/serve

The following table shows the common options, alias, default value & their purpose   

| **Option** |	**Alia** |	**Default** |	**Purpose** |     
| ---------- | --------- | ------------ | ------------- |   
| --watch |	-w |	true |	Run build when files change |   
| --live-reload |	-lr |	true |	Whether to reload the page on change |   
| --open |	-o |	false |	Opens the url in default browser |   
| --port |	-p |	4200 |	The port on which the server is listening |   
| --extract-css |	-ec |	 |	Extract css from global styles onto css files instead of js ones |   


## Compiling angular applications. 
1. **ng serve** 
 - This command builds and serves the application from memory for faster development experience.
 - does not write the build files to the disk, so we cannot use it for deploying our application on a different server

2. **ng build**
![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/ng%20build%20Vs%20ng%20serve.PNG)     

 - ***ng build --dev***  or ***ng build***   
  -  it creates a folder with name "dist" and copies all the build files into that folder 
        *Why dist folder*  :- becouse in angular.json file has configured with the property *"outDir" : "dist"*
  - does a development build, which is not optimised but prod build is.
  ![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/ng%20build%20--dev%20or%20ng%20build.PNG)

- ***ng build --prod***
 - This build will *have all the performance optimisation techniques* like Ahead-of-time (AOT) compilation, minification, uglification and treeshaking implemented .
 - it creates a folder with name "dist" and copies all the build files into that folder but with optimized techniques implemented. 
 - The *sizes of the bundles that the production build produces will be significantly less* than the sizes of the bundles that a dev build produces.
 ![](https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/ng%20build%20--prod.PNG)  

3. **Difference in --dev build and --prod buid**
 1. *the file sizes* in the production build are significantly less than the file sizes in the development build.
 2. With the production build, *by default, we do not get the source map files* because we usually do not need them on a production server but if want can get with options.
 3. *Production build extracts css from global styles into a css file* instead of js ones.  


### Difference between ng serve and ng build
1. **ng serve**
 - Compiles and serves the application from memory
 - Does not write the build files to the disk
 - Typically used to run the application on local development machine
 - Cannot be used for deploying the build to another server (Ex. Testing, Staging or Production server)  

2. **ng build** 
 - Compiles the application to the "dist" folder
 - Can be used to produce both development & production builds
 - Typically used to deploy the application on another server  























