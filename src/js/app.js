import { left, right } from "@popperjs/core";
import "../style/index.css";

/**  
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
  function variables
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
     
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
console.log(window.variables);
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  const name = variables.name == null ? "Lucy" : variables.name;
  const lastName = variables.lastName == null ? "Lui" : variables.lastName;
  const twitter = variables.twitter == null ? "4geeks" : variables.twitter;
  const linkedin = variables.linkedin == null ? "4geeks" : variables.linkedin;
  const instagram =
    variables.instagram == null ? "4geeks" : variables.instagram;
  const github = variables.github == null ? "4geeksacademy" : variables.github;
  const imagePosition =
    variables.socialMediaPosition == "position-left"
      ? "position-left"
      : "position-right";

  const country = variables.country == null ? null : variables.country;
  const city = variables.city == null ? null : variables.city;
  const role = variables.role == null ? null : variables.role;

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3> ${city}, ${country}</h3>
          <ul class=${imagePosition}>
            <li><a href="https://twitter.com/${twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>

        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
