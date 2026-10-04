function getRandomInt(max) {
    // This function is taken from the MDN docs
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    return Math.floor(Math.random() * max);
}

function TaglineTicker() {
    var TaglineText = document.getElementById('taglineticker-tag');
    var NewText = "";
    var Text = getRandomInt(26);

    switch(Text) {
    case 0:
	NewText += "The TGPD Drone of Intrusiveness has Crashed.";
	break;
    case 1:
	NewText += "<i>hhhgreg Panasonic Blu-Ray $99 32-inch LCD TV $299 LG 42\" HD TV $489 Everything's on sale during Xmas in</i>";
	break;
    case 2:
	NewText += "It's a bit like dreaming underwater.";
	break;
    case 3:
	NewText += "Don't look a gifted horse in the mouth or something"
	break;
    case 4:
	NewText += "Here on BBC Two, we've got the little fella's car crash";
	break;
    case 5:
	NewText += "Don't try this at home, because it's a joke";
	break;
    case 6:
	NewText += "It's puff pastry sitting on a puddle of chicken";
	break;
    case 7:
	NewText = "<marquee>Good afternoon. My name is William. I am calling about the XJ6 I have seen for sale in a magazine. I would like to view the car today if possible, but I have a couple of questions. Is the car road legal and available to be driven away today? Where are you? Could you please send us some directions? Thank you very much. Please call me back on... Sorry, I'm just finding the phone number. Please call this number back. Thank you. Goodbye. My name is William.</maruqee>";
	break;
    case 8:
	NewText += "https://cdimage.debian.org/mirror/cdimage/archive/4.0_r9/i386/iso-cd/debian-40r9-i386-netinst.iso";
	break;
    case 9:
	NewText += "The Earth is fairly large<sup>[citation needed]</sup>";
	break;
    case 10:
	NewText += "The MSDN Library is an essential resource for developers using Microsoft tools, products, and technologies";
	break;
    case 11:
	NewText += "Next week on Small People Dealing With Heavy Stuff";
	break;
    case 12:
	NewText += "HAMMOND YOU IDIOT YOU'VE REVERSED INTO THE SPORTS LORRY";
	break;
    case 13:
	NewText += "You can't lose the game of Pong while being killed and shot out of a cannon";
	break;
    case 14:
	NewText += "Why didn't you tell me before I set off that it would be more than the GDP of most European countries?";
	break;
    case 15:
	NewText += "Can I have cod and chips 75 times?";
	break;
    case 16:
	NewText += "This is a car programme. There will be no cushions";
	break;
    case 17:
	NewText += "I can respect a good joke. Except that one, \'cos that was a bad one";
	break;
    case 18:
	NewText += "I speak the language of the millennial. Hammond and May wont be able to do that, cos they're in a Ford and a Toyota. They're bad whips.";
	break;
    case 19:
	NewText += "Ydych chi'n SIŴR bod hynny'n syniad da?";
	break;
    case 20:
	NewText += "Are you ready for Windows Vista?";
	break;
    case 21:
	NewText += "They warned me about people like you [Emacs Users]";
	break;
    case 22:
	NewText += "I lost my 15 minutes on Eurodisco.";
	break;
    case 23:
	NewText += "Hey smokers, Druaga1 here";
	break;
    case 24:
	NewText += "This is the return... of the Space Cowboy";
	break;
    case 25:
	NewText += "I'm not pretending, I am actually <i>this</i> stupid";
	break;
    }

    UpdateText(TaglineText, NewText);
}

function UpdateText(tickerElement, newText) {
    tickerElement.innerHTML = newText;
}
