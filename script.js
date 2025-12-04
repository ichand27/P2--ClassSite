
const classes = [
  { id: 1, name: "Algebra 1", teacher: "Ms. Rivera", color: "#D9534F" },
  { id: 2, name: "World History", teacher: "Mr. Chen", color: "#F0AD4E" },
  { id: 3, name: "English Literature", teacher: "Mrs. Thompson", color: "#C39C46" }
];


function createClassCard(classObj) {
  return `
    <div class="class-card" style="border-top: 10px solid ${classObj.color}">
      <h2>${classObj.name}</h2>
      <p>Teacher: ${classObj.teacher}</p>
    </div>
  `;
}


function showClasses() {
  const mainPg = document.getElementById("mainPg");

  const layout = `
    <section id="classContainer">
      <h2>Your Classes</h2>
      <div id="classGrid"></div>
      <button id="addClassBtn">Add New Class</button>
    </section>
  `;

  mainPg.insertAdjacentHTML("beforeend", layout);

  const grid = document.getElementById("classGrid");

  classes.forEach(function(classObj) {
    grid.insertAdjacentHTML("beforeend", createClassCard(classObj));
  });

  const addBtn = document.getElementById("addClassBtn");
  addBtn.addEventListener("click", showAddClassForm);
}

// Shows the form to make a new class
function showAddClassForm() {
  if (document.getElementById("addClassForm")) return;

  const form = `
    <div id="addClassForm" class="class-form">
      <h3>Create a New Class</h3>
      <input id="newClassName" type="text" placeholder="Class Name">
      <input id="newTeacherName" type="text" placeholder="Teacher">

      <label>Pick a Color:</label>
      <input id="newClassColor" type="color" value="#D9534F">

      <button id="saveClassBtn">Save Class</button>
    </div>
  `;

  document.getElementById("mainPg").insertAdjacentHTML("beforeend", form);

  const saveBtn = document.getElementById("saveClassBtn");
  saveBtn.addEventListener("click", saveNewClass);
}

function saveNewClass() {
  const name = document.getElementById("newClassName").value;
  const teacher = document.getElementById("newTeacherName").value;
  const color = document.getElementById("newClassColor").value;

  if (name === "" || teacher === "") return;

  const newClass = {
    id: classes.length + 1,
    name: name,
    teacher: teacher,
    color: color
  };

  classes.push(newClass);

  const grid = document.getElementById("classGrid");
  grid.insertAdjacentHTML("beforeend", createClassCard(newClass));

  document.getElementById("addClassForm").remove();
}

window.add