      var app = {}; //First we define an object. This is also a global variable.

      app.countdown = function (settings) {
          var interval,
              counter = 0,
              //Start and end points.
              startAt = 0,
              endAt = 0;

          if (settings === undefined) {
              console.log("Please provide settings.");
          } else {

              if (settings.startAt === undefined || settings.endAt === undefined) {
                  console.log("Start and end number are required.");
              } else {
                  /*The parseInt() function parses a string and returns an integer.*/
                  startAt = parseInt(settings.startAt, 10);
                  endAt = parseInt(settings.endAt, 10);

                  if (!isNaN(startAt) && !isNaN(endAt)) {
                      counter = startAt;

                      interval = setInterval(function () {

                          if (counter < endAt) {
                              //Not required:
                              counter = 0; //Settings go back to the beginning.
                              startAt = 0;
                              endAt = 0;

                              console.log("Finished");
                              clearInterval(interval);
                          } else {
                              console.log(counter);
                              counter = counter - 1;
                          }
                      }, 1000);
                  }
              }
          }
      };

      /* clearInterval() method to cancel the timer */