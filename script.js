// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   let submit = document.getElementById("formSubmit");
   form.addEventListener("submit", function (event) {
      event.preventDefault();

      submit.addEventListener("click", function () {


         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");

         // alert the current value found in the username input
         if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");

         };
          
         if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            alert("Input Invalid");

         };
         const pilotStatus = document.getElementById("pilotStatus");
         const copilotStatus = document.getElementById("copilotStatus");
         const changeVisibility = document.getElementById("faultyItems");
         const fuelStatus = document.getElementById("fuelStatus");
         const cargoStatus = document.getElementById("cargoStatus");
         const launchStatus = document.getElementById("launchStatus");

         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;

         if (fuelLevelInput.value < 10000) {
            changeVisibility.style.visibility = "visible";
            fuelStatus.innerHTML = "There is not enough fuel for the journey";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
         }

         if (cargoMassInput.value > 10000) {
            changeVisibility.style.visibility = "visible";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
         }

         if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
         }
      });
   });
});




