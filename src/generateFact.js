import axios from "axios";

function generateMathFact() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios
    .get("http://numbersapi.com/random/math?json", config)
    .then((res) => {
      document.getElementById("year-fact").innerHTML = res.data.text;
    })
    .catch((error) => {
      console.error("Error fetching year fact:", error);
    });
}

export default generateMathFact;
