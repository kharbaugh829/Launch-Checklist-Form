// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      // alert the current value found in the username input
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "")
         {
            alert("All fields are required!");
            event.preventDefault();
         };

      if (pilotNameInput.value === number || copilotNameInput.value === number)
         {
            alert("Number entered when letters were expected for this field, please enter valid information.");
            event.preventDefault();
         }; 
         
      if (fuelLevelInput.value === string || cargoMassInput.value === string)
         {
            alert("Letters entered when numbers were expected for this field, please enter valid information.");
            event.preventDefault();
         } 
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
