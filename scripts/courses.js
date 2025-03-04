const courses = [
  { code: "CSE 110", name: "Intro to Programming", credits: 3, completed: false, type: "CSE" },
  { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: true, type: "CSE" },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true, type: "WDD" },
  { code: "WDD 210", name: "Web Design", credits: 3, completed: false, type: "WDD" },
  { code: "CSE 210", name: "Data Structures", credits: 3, completed: false, type: "CSE" },
];

const coursesContainer = document.querySelector("#coursesContainer");
const totalCreditsSpan = document.querySelector("#totalCredits");

const allBtn = document.querySelector("#allBtn");
const cseBtn = document.querySelector("#cseBtn");
const wddBtn = document.querySelector("#wddBtn");

function displayCourses(courseArray) {
  coursesContainer.innerHTML = "";
  courseArray.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course-card");
    if (course.completed) div.classList.add("completed");

    div.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} credits</p>
    `;
    coursesContainer.appendChild(div);
  });

  const total = courseArray.reduce((acc, course) => acc + course.credits, 0);
  totalCreditsSpan.textContent = total;
}

allBtn.addEventListener("click", () => displayCourses(courses));
cseBtn.addEventListener("click", () => {
  const filtered = courses.filter((c) => c.type === "CSE");
  displayCourses(filtered);
});
wddBtn.addEventListener("click", () => {
  const filtered = courses.filter((c) => c.type === "WDD");
  displayCourses(filtered);
});

displayCourses(courses);
