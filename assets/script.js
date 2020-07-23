const randomFact = document.getElementById("random-fact"),
  button = document.getElementById("a-btn");

const getFact = () => {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayFact(data);
    });
};

const displayFact = (data) => {
  randomFact.innerText = data.text;
};

button.addEventListener("click", (e) => {
  e.preventDefault;
  getFact();
});

getFact();
