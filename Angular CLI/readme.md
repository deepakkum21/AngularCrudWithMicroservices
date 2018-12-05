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

![At this point in Visual Studio Code you will see all the Angular project files. node_modules folder, that conatins all the installed packages]
(https://github.com/deepakkum21/Angular/blob/master/Angular%20CLI/images/angular%20cli%20create%20new%20project.png)
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
| --dry-run |	Boolean |	false |	-d	Run through without making any changes. Just reports the files that will be created |
| --skip-install |	Boolean |	false |	-si |	Skip installing packages |
| --skip-tests |	Boolean |	false |	-st |	Skip creating tests |
| --inline-style |	Boolean |	false |	-is |	Use inline styles when generating the new application |
| --inline-template |	Boolean |	false |	-it |	Use inline templates when generating the new project |
