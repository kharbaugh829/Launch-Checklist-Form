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
         
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value))
         {
            alert("Input Invalid, Please enter Numeric Values Only.");
            event.preventDefault();
         } 
      document.getElementById("pilotStatus").innerHTML =  `Pilot ${pilotNameInput} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput} Ready`;
      
      if(fuelLevelInput.value < 10000){
         document.querySelector("#faultyItems");
         changeVisibility
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
