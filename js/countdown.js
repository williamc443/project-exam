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

 function countdownTimer(nextLaunch) {
     const nextLaunchTime = nextLaunch.date_utc;
     const countdownDate = new Date(nextLaunchTime).getTime();
     document.querySelector(".countdown");

     setInterval(function () {
         const timeNow = new Date().getTime();
         const timeleft = countdownDate - timeNow;

         // Days, hours, minutes and seconds left
         let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
         let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
         let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

         


     }, 1000)

    }