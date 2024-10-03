
function displayPoem(response) {
    console.log("poem-generated");

    const poemContainer = document.querySelector("#poem");
    const rawResponse = response.data.answer;


    poemContainer.innerHTML = formattedResponse;
     
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 50,
        cursor: "", 
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e223321d8eaf8o88a71dtc460e16b347"; 
    let poemPrompt = `User instructions: Generate 2 trails in the world using the context ${instructionsInput.value}`;
    
    let hikingContext = `Generate a couple hiking trails in the world using the context: ${instructionsInput.value}. Please format each trail in the following manner:

        1. Trail Name:
        2. City/State/Country:
        3. GPS Coordinates:
        4. Notable Tidbits:(using "🥾" as the bullet point)
            🥾 (Tidbit 1)
            🥾 (Tidbit 2)
        5. Description:(No need to include "###" or other symbols before or after the description name)
            🥾 (Short description with bullet points, using "🥾" as the bullet point)
        6.♿ Include if trail IS or IS NOT good for accessibility (describe why in a few words why it is or is not)
        
        Ensure each trail is separated by a line or section break for easy reading. Use headings to distinguish each location (Location: City/State/Country). Format the response in a clean, easy-to-read structure using lists and headings.`;
    
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(poemPrompt)}&context=${encodeURIComponent(hikingContext)}&key=${apiKey}`;

    console.log("Generating Poem");
    console.log(`Prompt: ${poemPrompt}`);
    console.log(`Context: ${hikingContext}`);

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
