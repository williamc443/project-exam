 // Fetch API
 fetch("https://api.spacexdata.com/v4/launches/next")
     .then(function (response) {
         return response.json();
     })
     .then(function (json) {
         countdownTimer(json);
         console.log(json);
     })
     .catch(function (error) {
         console.log(error);
         
     });