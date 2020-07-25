var cast = {
  "characters": [
    {
      "name": "Jon Snow",
      "shortCode": "jon-snow",
      "actor": "Kit Harrington",
      "house": "Stark",
      "location": "The Wall"
    },
    {
      "name": "Tyrion Lannister",
      "shortCode": "tyrion",
      "actor": "Peter Dinklage",
      "house": "Lannister",
    },
    {
      "name": "Brienne of Tarth",
      "shortCode": "brienne",
      "actor": "Gwen Chrisitie",
      "house": "Clegane",
      "location": "unknown"
    },
    {
      "name": "Ned Stark",
      "shortCode": "ned-stark",
      "actor": "Sean Bean",
      "house": "Stark",
      "location": "Winterfell"
    },
    {
      "name": "The Hound",
      "shortCode": "clegane",
      "actor": "Rory McCann",
      "house": "Clegane",
      "location": "unknown"
    }
  ]
}

$(document).ready(function(){
  var characterTemplate = $("#character-template").html();

  var compliedCharacterTemplate = Handelbars.compile(characterTemplate);
  console.log(compliedCharacterTemplate);
})