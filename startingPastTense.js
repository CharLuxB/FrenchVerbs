// Program to conjugate French verbs in the past tense, also called "passé composé"


// function 1 of 4: Creates a past participle from a regular infinitive:
function pastParticipleRegular(infinitive) {
    // 1: determine the ending of the infinitive by slicing last 2 characters
    let participle = " "; // empty, to be filled after logic
    let infinitiveEnding = infinitive.slice(-2).toLowerCase();
  
    // 2: logic to replace infinitive ending with the correct participle ending
    if (infinitiveEnding == "er") {
      participle = infinitive.replace("er", "é");
    } else if (infinitiveEnding == "ir") {
      participle = infinitive.replace("ir", "i");
    } else if (infinitiveEnding == "re") {
      participle = infinitive.replace("re", "u");
    }
    let strParticiple = participle.toString(); // turns value into string
    return strParticiple; // return so functions below can use it
  }
  
  
  // function 2 of 4: takes an infinitive from prompt and conjugates it with "avoir":
  function verbConjPastA(infinitive) {
    // list of all the forms of avoir to be looped:
    const avoirList = [
      "j'ai",
      "tu as",
      "il a",
      "elle a",
      "nous avons",
      "vous avez",
      "ils ont",
      "elles ont"
    ];
  
    // list that will contain all the final conjugated forms: avoir + past participle :
    let fullParadigmPastA = [];
  
    // process that loops through the avoir list:
    for (let i = 0; i < avoirList.length; i++) {
      // for each iteration, array item becomes value of avoirForm variable
      let avoirForm = avoirList[i];
      let strAvoirForm = avoirForm.toString(); // turn value into string
  
      // call the pastParticipleRegular function to return a past participle
      let participle = pastParticipleRegular(infinitive);
  
      // adds pronoun + participle
      let message1 = `${strAvoirForm} ${participle}`;
  
      // appends message to the fullParadigm list
      fullParadigmPastA.push(message1);
    }
  
    return fullParadigmPastA.join(" * "); // returns fullparadigm items joined with asterisk
  }
  
  // function 3 of 4: takes an infinitive from prompt and conjugates it with "etre":
  function verbConjPastE(infinitive) {
    // list of all the forms of etre to be looped:
    const etreList = [
      "je suis",
      "tu es",
      "il est",
      "elle est",
      "nous sommes",
      "vous êtes",
      "ils sont",
      "elles sont"
    ];
  
    // list that will contain all the final conjugated forms: etre + past participle :
    let fullParadigmPastE = [];
  
    // process that loops through  the etre list:
    for (let i = 0; i < etreList.length; i++) {
      // for each iteration, item becomes value of etreForm variable
      let etreForm = etreList[i];
      let strEtreForm = etreForm.toString(); // turn value into string
  
      // list of extra endings for past participles with Etre
      const endingPstPrtEtreList = [" ", " ", " ", "e", "s", "s", "s", "es"];
      let strEndingPstPrtEtre = endingPstPrtEtreList[i].toString(); // turn value into string
  
      // call the pastParticipleRegular function to return a past participle
      let participle = pastParticipleRegular(infinitive);
      // adds participle + extra endings
      let participleE = participle + strEndingPstPrtEtre;
      // adds pronoun + participle
      message2 = `${strEtreForm} ${participleE}`;
  
      // appends message to the fullParadigm list
      fullParadigmPastE.push(message2);
    }
  
    return fullParadigmPastE.join(" * "); // returns fullparadigm items joined with asterisk
  }
  
  function conjugationPastTense() {
    let userVerb = prompt(
      "Enter the infinitive of a French verb you'd like to conjugate in the past tense: ",
      "visiter"
    );
    userVerb = userVerb.toLowerCase(); // turns it to lower case
    
    // list of all the verbs that conjugate with the auxiliary etre in the past tense:
    const etreVerbs = [
      "devenir",
      "revenir",
      "mourir",
      "retourner",
      "sortir",
      "venir",
      "arriver",
      "naitre",
      "descendre",
      "entrer",
      "rentrer",
      "tomber",
      "rester",
      "aller",
      "monter",
      "partir",
      "passer"
    ];
    // process to determine if the verb is going to be conjugated with etre or avoir
    if (etreVerbs.includes(userVerb)) {
      let result = verbConjPastE(userVerb);
      console.log(
        `Here is the verb ${userVerb} conjugated in the passé composé with the auxiliary avoir: \n${result}`
      );
    } else {
      let result = verbConjPastA(userVerb);
      console.log(
        `Here is the verb ${userVerb} conjugated in the passé composé with the auxiliary être: \n${result}`
      );
    }
  }
  
  conjugationPastTense();
  