fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json())
  .then((data) => {
    let output = "<h2>Liste des gens</h2>";
    data.results.forEach(function (user) {
      console.log(data);
      output += '<img src="' + user.picture.large + '"/><br/>';
      output += user.name.first + " " + user.name.last + "<br/>";
      output += user.email + "<br/>";
    });
    console.log(output);
    document.getElementById("container").innerHTML = output;
  });
