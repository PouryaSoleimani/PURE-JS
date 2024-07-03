const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    // set lang(language){
    //     this.language= language
    //     return language
    // },
    get langG() {
      return this.language;
    }
  };
  person.lang = 'fa'
  let c  = person.langG
  console.log(c);