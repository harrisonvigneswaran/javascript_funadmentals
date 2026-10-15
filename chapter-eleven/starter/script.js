/*
function checkInventory(game, callback) {
  setTimeout(() => {
    const available = true;

    callback(available);
  }, 2000);
}

checkInventory("Cyberpunk 2077", function(available) {
  console.log(available);
});
*/

/*
function checkInventory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const available = false;

      if (available) {
        resolve("Game is available!");
      } else {
        reject("Game is sold out!");
      }
    }, 2000);
  });
}

checkInventory()
  .then(function(message) {
    console.log(message);
  })
  .catch(function(error) {
    console.log(error);
  });
  */