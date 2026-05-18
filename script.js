const name = document.getElementById("name")
const desctext = document.getElementById("desctext")
const changeimage = document.getElementById("changeimage")
const next = document.getElementById("next")

let projectNames = ["Peacock", "Geoguesser", "Blank Space"] 

let displayState = 0;

function changeProject(){
  let cs = (displayState % 2).toString()
  name.textContent = projectNames[cs]
  desctext.textContent = `This is the description for project${cs}`
  changeimage.src = `project${cs}.png`
  displayState += 1
};

next.addEventListener("click", changeProject);

