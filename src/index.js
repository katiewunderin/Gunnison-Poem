function displayTrail(response) {
    const trailContainer = document.querySelector("#trail");

    let formattedResponse = response.data.answer
        .replace(/---/g, "<hr>")  
        .replace(/###\s*/g, "")  
        .replace(/[-–—]\s+/g, "🥾 ");  

    trailContainer.innerHTML = formattedResponse;  

    const typewriter = new Typewriter("#trail", {
        strings: formattedResponse,  
        autoStart: true,  
        delay: 50,        
        cursor: "🐾"      
    });

    typewriter.typeString(formattedResponse).start(); 
}

function generateTrail(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e223321d8eaf8o88a71dtc460e16b347"; 
    let trailPrompt = `User instructions: Generate 2 trails in the world using the context ${instructionsInput.value}`;
    let hikingContext = `Generate 2 hiking trails per location request in the world using the context: ${instructionsInput.value}. Please format each trail in the following manner:

         <br / >
         Trail Name: 
         <br />(No need to include "###" or other symbols before or after the trail name)
            <br />
         City/State/Country: 
         <br />(No need to include "###" or other symbols before or after the city/state/country name)
            <br />
         GPS Coordinates: 
         <br />(No need to include "###" or other symbols before or after the GPS coordinates)
            <br /> 
         Notable Tidbits: 
            <br />(No need to include "###" or other symbols before or after the tidbits name, using "🥾" as the bullet point)
            🥾 (Tidbit 1)
            <br />
            🥾 (Tidbit 2)
            <br />
         Description:
         <br />
         (No need to include "###" or other symbols before or after the description name)
            🥾 (Short description with bullet points, using "🥾" as the bullet point ♿ Include if trail IS or IS NOT good for accessibility `;
    
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(trailPrompt)}&context=${encodeURIComponent(hikingContext)}&key=${apiKey}`;

    console.log(`Prompt: ${poemPrompt}`);
    let trailElement = document.querySelector("#trail");
    trailElement.innerHTML = `<div class="generating">⏳ Generating a hiking trail for... ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayTrail);
}

let trailFormElement = document.querySelector("#trail-generator-form");
trailFormElement.addEventListener("submit", generateTrail);
