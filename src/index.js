function displayAffirmation(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tdo6f727e15d08abb55431a9da8bfa2a";
  let prompt = `User Instructions: Generate one short detailed positive affirmation about ${instructionsInput.value}`;
  let context =
    "You are an expert about positive affirmations and love to write affirmations. Your mission is to generate one short detailed affirmation in basic HTML. Make sure to use the users instructions. At the end, please sign `Repeat this affirmation daily!` in Italics  ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //Make call to Api

  axios.get(apiUrl).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
