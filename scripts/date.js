const currentYearSpan = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModified = document.lastModified;
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Update: ${lastModified}`;
