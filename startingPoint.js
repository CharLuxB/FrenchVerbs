// function 1 of 3: Present Tense: takes infinitive from prompt:
function erVerbConjPresent(infinitive) {
    // list of pronouns:
    const pronounListPresent = ["je", "tu", "il", "nous", "vous", "ils"];
    
    // list that will contain all the conjugated verbs in the Present Tense:
    let fullParadigmPresent = [];
    
    // process that loops through the pronoun list
    for (let i = 0; i < pronounListPresent.length; i++) {
      // for each iteration, item becomes value of pronounPresent variable
      let pronounPresent = pronounListPresent[i];
      let strPronounPresent = pronounPresent.toString(); // turn value into string
      
      // list of ER verb endings
      const endingERPresentList = ["e", "es", "e", "ons", "ez", "ent"];
      
      // takes infinitive from prompt and removes last 2 characters
      let stem = infinitive.slice(0, infinitive.length - 2);
      let strStem = stem.toString().toLowerCase(); // turn value into string + lowercase
      
      // matches the index of pronounList item to the index of endingList:
      let endingERPresent = endingERPresentList[i];
      let strEndingERPresent = endingERPresent.toString(); // turn value into string
      
      // adds pronoun and stem+ending
      message1 = `${strPronounPresent} ${strStem + strEndingERPresent}`; 
      // appends message to the fullParadigm list
      fullParadigmPresent.push(message1); 
    }
    
    return fullParadigmPresent.join(" * ") // returns fullparadigm items joined with asterisk
  };
  
  // function 2 of 3: Past Tense: takes infinitive from prompt:
  function verbConjPast(infinitive) {
    // list of the verb avoir conjugated for all pronouns:
    const avoirListPresent = [
      "j'ai", 
      "tu as", 
      "il a", 
      "nous avons", 
      "vous avez", 
      "ils ont",
    ];
    
      // list that will contain all the conjugated verbs in the Past Tense:
    let fullParadigmPast = [];
    const infinitiveLower = infinitive.toLowerCase() // turn to lower case 
    
    // process that loops through the the avoir list:
    for (let i = 0; i < avoirListPresent.length; i++) {
      // for each iteration, item becomes value of avoirPresent variable
      let avoirPresent = avoirListPresent[i];
      let strAvoirPresent = avoirPresent.toString(); // turn value into string
      
      // process to create past participle
      // 1: determine the ending of the infinitive by slicing last 2 characters
      let participle = " " // empty as depends on ending
      let inputEnding = infinitiveLower.slice(-2).toLowerCase()
      
      // 2: logic to replace ending with 1 of 3 option
      if (inputEnding == "er") {
        participle = infinitiveLower.replace("er", "é");
      } else if (inputEnding == "ir") {
        participle = infinitiveLower.replace("ir", "i");
      } else if (inputEnding == "re") {
        participle = infinitiveLower.replace("re", "u");
      }
      let strParticiple = participle.toString(); // turn value into string
      
      // adds pronoun + participle
      message2 = `${strAvoirPresent} ${participle}`;
      
      // appends message to the fullParadigm list
      fullParadigmPast.push(message2); 
    }
    
    return fullParadigmPast.join(" * ") // returns fullparadigm items joined with asterisk
  };
  
  // function 3 of 3: Future Tense: takes infinitive from prompt:
  function verbConjFut(infinitive) {
    // list of the verb aller conjugated for all pronouns:
    const allerListPresent = [
      "je vais", 
      "tu vas", 
      "il va", 
      "nous allons", 
      "vous allez", 
      "ils vont",
    ];
    
    // list that will contain all the conjugated verbs in the Future Tense:
    let fullParadigmFut = [];
    
    // process that loops through the the aller list:
    for (let i = 0; i < allerListPresent.length; i++) {
      // for each iteration, item becomes value of allerPresent variable
      let allerPresent = allerListPresent[i];
      let strAllerPresent = allerPresent.toString(); // turn value into string
      let strInfinitive = infinitive.toString().toLowerCase(); // turn value into string + lowercase
      
      // adds pronoun + infinitive
      message3 = `${strAllerPresent} ${strInfinitive}`;
      
      // appends message to the fullParadigm list:
      fullParadigmFut.push(message3); 
    }
    
    return fullParadigmFut.join(" * ") // returns fullparadigm items joined with asterisk
  };
  
  // test present: jouer, REGARDER, trouvER -- only regular ER verbs for the moment
  // test future: ATTENDRE, reussir, mangER -- works with any regular & irregular verbs
  // test past: continuer, VENDRE, finIR -- only works with regular ER IR RE verbs
  
  // welcome message + user input
  window.alert("Welcome to French Conjugation".toUpperCase()) 
  const userTense = prompt("Choose the tense: present, past, future")
  const userVerb = prompt("Enter the infinitive of a regular verb", "visiter");
  
  // logic:
  
  if (userTense == "past" || userTense == "Past") {
    let result = verbConjPast(userVerb);
    console.log(result)
  } else if (userTense == "future" || userTense == "Future") {
    let result = verbConjFut(userVerb);
    console.log(result)
  } else if (userTense == "present" || userTense == "Present") {
    let result = erVerbConjPresent(userVerb);
    console.log(result)
  } else {
    window.alert("Sorry, I didn't get that...")
  }