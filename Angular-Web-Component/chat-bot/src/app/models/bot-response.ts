export class BotResponse {
  text?: string;
  image?: string;
  buttons?: Button[];
  link?: Custom;
  dropdowns?: Button[];
  text_buttons?: string[];
  text_dropdowns?: string[];
  isLinkClicked?: boolean;
}

export class Button {
  title: string;
  payload: string;
  link?: string;
}

export class Custom {
  video?: string;
  file?: string;
}
