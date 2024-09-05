document.getElementById("check-button").addEventListener("click", () => {
  // Get input value
  const text = document.getElementById("weather-option").value;

  // Do what you want with the text here
  if (text === "rainy" || text === "Rainy") {
    document.getElementById(
      "result"
    ).innerText = `Check weather conditions in London`;
  } else if (text === "cloudy" || text === "Cloudy") {
    document.getElementById(
      "result"
    ).innerText = `Check weather conditions in Manchester`;
  } else {
    document.getElementById(
      "result"
    ).innerText = `Check weather conditions in Cornwall`;
  }
});

const accordionItems = document.getElementsByClassName("accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  const accordionHeader = accordionItems[i].getElementsByClassName(
    "accordion-header"
  )[0];
  // Getting the accordion-content element within the current accordion-item
  const accordionContent = accordionItems[i].getElementsByClassName(
    "accordion-content"
  )[0];

  // Added a click event listener to the accordion-header elements
  accordionHeader.addEventListener("click", function () {
    //  the accordion-item is closed then we click it
    if (accordionContent.style.display === "none") {
      accordionContent.style.display = "block";

      accordionItems[i].classList.add("open");
    } else {
      //   CLOSING an accordion-item: If visible, hide the content element

      accordionContent.style.display = "none";

      accordionItems[i].classList.remove("open");
    }
  });
}