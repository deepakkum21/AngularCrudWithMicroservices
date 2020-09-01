import { BotResponse } from './bot-response';

export class Message {
  botcontent: BotResponse[];
  isBot: boolean;
  usercontent: string;
  linkClicked: boolean;

  constructor(botcontent: BotResponse[], isBot: boolean, usercontent: string, linkClicked: boolean) {
    this.botcontent = botcontent;
    this.isBot = isBot;
    this.usercontent= usercontent;
    this.linkClicked = linkClicked;
  }
}

// export class Message {
//   //botcontent: BotResponse[];
//   isBot: boolean;
//   content: string;

//   constructor(isBot: boolean, content: string) {
//     //this.botcontent = botcontent;
//     this.isBot = isBot;
//     this.content= content;
//   }
// }