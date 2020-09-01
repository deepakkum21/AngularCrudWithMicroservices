import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { TooltipPosition } from "@angular/material/tooltip";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BotServiceService } from "src/app/service/bot-service.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Message } from "src/app/models/message";
import { BotResponse, Button } from "src/app/models/bot-response";
import { start, voiceText } from "../../util/voice-text.js";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  @ViewChild("scrollMe")
  scroll: ElementRef;

  @Input() username: string;

  scrolltop: number = null;
  downloadedFileName = "";

  inpuFieldValue = "";
  positionOptions: TooltipPosition[] = ["below"];
  initializeConversation = false;

  isChatFormVisible = false;
  messageForm: FormGroup;
  messages: Message[] = [];
  botResponse: BotResponse[] = [];
  isLinkClicked = false;
  messageRequest = {
    sender: "Rasa",
    message: "",
    username: "",
    problem: "",
  };
  isWaitingForResponse = false;
  isListening = false;
  problem = "";
  errorMsg = "";

  constructor(
    private _formBuilder: FormBuilder,
    private botService: BotServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.messageForm = this._formBuilder.group({
      messageContent: [""],
    });
    this.startNewConversation();
    if (this.username === null || this.username.trim().length < 1) {
      this.username = "deepak.sivakumar@inspirisys.com";
    }

    // localStorage.setItem(
    //   "username",
    //   encodeURIComponent("deepak.sivakumar@inspirisys.com")
    // );

    setInterval(
      () =>
        (this.scrolltop = this.scroll
          ? this.scroll.nativeElement.scrollHeight
          : 0),
      1000
    );
  }

  private startNewConversation() {
    console.log("new conversation");
    this.messageRequest.message = "hi";
    setTimeout(() => this.handleBotRequest(), 1000);
  }

  sendMessage() {
    //this.isUserMessage = true;
    let usercontent = this.messageForm.controls["messageContent"].value;
    if (usercontent.length > 0) {
      let usercontentRequest = this.mapUserInput(usercontent);
      let userMessage = new Message(null, false, usercontent, false);
      this.messages.push(userMessage);
      ////this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
      this.messageForm.controls["messageContent"].setValue("");
      this.messageRequest.message = usercontentRequest;
      this.isWaitingForResponse = true;
      setTimeout(() => this.handleBotRequest(), 1000);
      //this.handleBotRequest();
    } else {
      this.voiceChat();
    }
  }

  private mapUserInput(userContent: string) {
    if (userContent.toLowerCase().search("outlook") != -1) {
      return "/outlook_category";
    } else if (userContent.toLowerCase().search("printer") != -1) {
      return "/printer_category";
    } else if (userContent.toLowerCase().search("system slow") != -1) {
      return "/system_slow_category";
    } else if (userContent.toLowerCase().search("system") != -1) {
      return "/system_category";
    } else if (userContent.toLowerCase().search("mobility") != -1) {
      return "/mobility_category";
    } else if (userContent.toLowerCase().search("internet explorer") != -1) {
      return "/internet_explorer_category";
    } else {
      return userContent;
    }
  }

  // ngAfterViewChecked() {

  //     //console.log('scroll   ', this.scroll);
  //     this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
  //     console.log('nuber  ', this.scrolltop)

  // }

  private handleBotRequest() {
    this.botResponse = [];
    this.botService.callBot(this.messageRequest).subscribe(
      (data) => {
        if (data.body) {
          this.isWaitingForResponse = false;
          console.log(data.body);
          if (data.body.length === 0) {
            this.botResponse.push({
              text: "Sorry did't understood properly.",
            });
          }
          for (let i = 0; i < data.body.length; i++) {
            if (data.body[i].text) {
              if (data.body[i].text.length > 0) {
                this.botResponse.push({ text: data.body[i].text });
              }
            }
            if (data.body[i].buttons) {
              //console.log("buttons: ");
              this.botResponse.push({ buttons: data.body[i].buttons });
            }
            if (data.body[i].custom) {
              if (data.body[i].custom.dropdowns) {
                // console.log("dropdowns: ", data.body[i].custom.dropdowns);
                // if (data.body[i].custom.dropdowns.link) {
                //   const linkUrl: string = data.body[i].custom.dropdowns.link;
                //   this.downloadedFileName = linkUrl.split("/")[
                //     linkUrl.split("/").length - 1
                //   ];
                //   console.log("filename  ", this.downloadedFileName);
                // }
                this.botResponse.push({
                  dropdowns: data.body[i].custom.dropdowns,
                });
              }
            }
            if (data.body[i].custom) {
              if (data.body[i].custom.link) {
                this.botResponse.push({ link: data.body[i].custom.link });
              }
            }
          }
          this.messages.push(new Message(this.botResponse, true, null, false));
          //console.log('last: ',this.messages);
          //this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
        }
      },
      (error) => {
        this.errorMsg = error;
        this.isWaitingForResponse = false;
      }
    );
  }

  showChatForm() {
    //console.log('isjnj: ',this.isChatFormVisible)
    this.isChatFormVisible = !this.isChatFormVisible;
  }

  buttonAction(button: Button) {
    //console.log(button);
    this.messages.push(new Message(null, false, button.title, false));
    //this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
    this.messageRequest.message = button.payload;
    this.isWaitingForResponse = true;
    setTimeout(() => this.handleBotRequest(), 1000);
  }

  dropdownAction(dropdown: Button, index?: number) {
    //console.log(dropdown);
    if (this.messages.length - 1 === index) {
      this.messages.push(new Message(null, false, dropdown.title, false));
      //this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
      this.messageRequest.message = dropdown.payload;
      this.isWaitingForResponse = true;
      this.problem = dropdown.payload.trim().split("_").join(" ");
      setTimeout(() => this.handleBotRequest(), 1000);
    }
  }

  linkClicked(dropdown: Button, index?: number) {
    //console.log('card cicked');
    this.botResponse = [];
    this.isLinkClicked = true;

    this.problem = dropdown.payload.trim().split("_").join(" ");
    const linkUrl: string = dropdown.link;
    this.downloadedFileName = linkUrl.split("/")[linkUrl.split("/").length - 1];
    //console.log("filename  ", this.downloadedFileName);
    //this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
    if (this.downloadedFileName.length > 0 && this.downloadedFileName !== "") {
      this.botResponse.push({
        text: `EXE file ${this.downloadedFileName} has been downloaded. Please run that file.`,
      });
      this.botResponse.push({ text: "Was I able to solve your issue?" });
      this.messages.push(new Message(this.botResponse, true, null, true));
    }
  }

  yesNoOption(option: boolean) {
    //console.log("isLinkClicked  ", this.isLinkClicked);
    //console.log("initializeConversation  ", this.initializeConversation);
    this.botResponse = [];
    let usercontent = "";
    if (this.initializeConversation) {
      if (option) {
        this.startNewConversation();
        usercontent = "Yes";
      } else {
        usercontent = "No further help needed.";
        // this.botResponse.push({
        //   text:
        //     "You can comeback again to create the ticket anytime. Do need help on other problems?.",
        // });
      }
      let userMessage = new Message(null, false, usercontent, false);
      this.messages.push(userMessage);
      this.initializeConversation = false;
      this.isLinkClicked = false;
      return null;
    }
    if (this.isLinkClicked) {
      if (option) {
        usercontent = "statisfied";
        let userMessage = new Message(null, false, usercontent, false);
        this.messages.push(userMessage);
        this.botResponse.push({
          text:
            "Hope the solution helped you!! Do you need further assistance.",
        });

        this.messages.push(new Message(this.botResponse, true, null, true));
        this.initializeConversation = true;
      } else {
        usercontent = "not statisfied";
        let userMessage = new Message(null, false, usercontent, false);
        this.messages.push(userMessage);
        this.botResponse.push({
          text: "Do you want to create a ticket for the above issue.",
        });
        this.messages.push(new Message(this.botResponse, true, null, true));
      }
      this.isLinkClicked = false;
    } else {
      if (option) {
        usercontent = "create ticket";
        let userMessage = new Message(null, false, usercontent, false);
        this.messages.push(userMessage);
        this.messageRequest.username = this.username;
        this.messageRequest.problem = this.problem.substr(
          1,
          this.problem.length
        );
        this.messageRequest.message =
          userMessage.usercontent +
          " for " +
          this.problem.substr(1, this.problem.length);
        this.isWaitingForResponse = true;
        setTimeout(() => this.handleBotRequest(), 1000);
        this.handleWillCreateTicket();
      } else {
        usercontent = "Don't create ticket";
        this.botResponse.push({
          text:
            "You can comeback again to create the ticket anytime. Do need help on other problems?.",
        });
        this.messages.push(new Message(this.botResponse, true, null, true));
        this.initializeConversation = true;
      }
      this.isLinkClicked = true;
    }
  }

  // willCreateTicket(createTicket: boolean) {
  //   let usercontent = createTicket ? "create ticket" : "Don't create ticket";

  //   let userMessage = new Message(null, false, usercontent, false);
  //   this.messages.push(userMessage);
  //   //this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
  //   this.messageRequest.username = localStorage.getItem("username");
  //   this.messageRequest.problem = this.problem.substr(1, this.problem.length);
  //   if (usercontent === "Don't create ticket") {
  //     this.messageRequest.message = userMessage.usercontent;
  //   } else {
  //     this.messageRequest.message =
  //       userMessage.usercontent +
  //       " " +
  //       this.problem.substr(1, this.problem.length);
  //   }

  //   this.isWaitingForResponse = true;
  //   setTimeout(() => this.handleBotRequest(), 1000);
  //   this.handleWillCreateTicket();
  // }

  handleWillCreateTicket() {
    this.botResponse = [];
    // if (isSatified === "not satisfied") {
    this.botResponse.push({
      text: "Please wait while a ticket related to your issue is being created",
    });
    this.messages.push(new Message(this.botResponse, true, null, false));
    //this.scrolltop = this.scroll ? this.scroll.nativeElement.scrollHeight: 0;
    // }
  }

  voiceChat() {
    //this.placeholder = "listening ..."
    //console.log('jjjkjkjj')
    start();
    this.isListening = true;
    this.isWaitingForResponse = true;
    setTimeout(() => {
      let textOfVoice = voiceText();
      //start().then(() => {console.log('dsfdsfdss');textOfVoice = voiceText()});
      //console.log("speaking--------", textOfVoice);
      if (
        textOfVoice !== undefined &&
        textOfVoice !== null &&
        textOfVoice !== ""
      ) {
        let textOfVoiceRequest = this.mapUserInput(textOfVoice);
        this.messages.push(new Message(null, false, textOfVoice, false));
        this.messageRequest.message = textOfVoiceRequest;
        this.handleBotRequest();
      } else {
        this.botResponse = [];
        this.botResponse.push({ text: "Sorry I didn't heard properly!!" });
        this.messages.push(new Message(this.botResponse, true, null, false));
      }
      textOfVoice = undefined;
      this.isListening = false;
      this.isWaitingForResponse = false;
      //this.placeholder = "Enter your Message";
    }, 5000);
    // let textOfVoice = voiceText();
    // //start().then(() => {console.log('dsfdsfdss');textOfVoice = voiceText()});
    // console.log(textOfVoice + 'bjb');
    // if(textOfVoice !== undefined && textOfVoice.length > 0) {
    //   this.messages.push(new Message(textOfVoice, "assets/img/user.png", new Date()));
    // }
  }
}
