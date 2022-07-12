/* eslint-disable */
import "bootstrap";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var domain = ["com", "ec", "net"];

  let values = "";

  pronoun.forEach(prons => {
    let pronombre = prons;

    adj.forEach(adje => {
      let adjetivo = adje;

      noun.forEach(nouns => {
        let palabra = nouns;

        domain.forEach(doms => {
          let dominios = doms;

          values =
            values +
            "<li>" +
            pronombre +
            adjetivo +
            palabra +
            "." +
            dominios +
            "</li>";
        });
      });
    });
  });

  document.getElementById("domain-generator").innerHTML = values;
});
