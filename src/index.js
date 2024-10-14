import "./styles.css";
import { Item } from "./Item.js";
import { Project } from "./Project.js";
import { initApp } from "./ProjectList.js";

const app = initApp();
const inbox = Project("Inbox", "Nice to have a description");
app.addToProjectList(inbox);

const mapProjects = (arr) => {
  let DOMprojectList =
    document.querySelector("#Project-list").firstElementChild;

  DOMprojectList.replaceChildren("");
  arr.forEach((project) => {
    let DOMprojectElement = document.createElement("button");
    DOMprojectElement.setAttribute("data-id", project.getProjectTitle());
    DOMprojectElement.setAttribute("class", "project-button");
    DOMprojectElement.addEventListener("click", () =>
      loadSelectedProject(project)
    );

    DOMprojectElement.innerText = project.getProjectTitle();
    DOMprojectList.appendChild(DOMprojectElement);
  });
};

const mapProjectItems = (project) => {
  let DOMitemList =
    document.querySelector("#Project-item-list").firstElementChild;

  DOMitemList.replaceChildren("");

  project.forEach((item) => {
    let ITEMDATA = item.getItemData();
    console.log(ITEMDATA);
    let DOMitemElement = document.createElement("div");
    DOMitemElement.setAttribute("data-id", ITEMDATA.title);
    DOMitemElement.setAttribute("class", "Item-button");
    // add item details
    let DOMitemDetailsElement = document.createElement("div");
    DOMitemDetailsElement.setAttribute("class", "Item-details");
    let DOMitemConfigElement = document.createElement("div");
    DOMitemConfigElement.setAttribute("class", "Item-config");
    let DOMitemDescription = document.createElement("p");
    DOMitemDescription.innerText = ITEMDATA.description;
    let DOMitemDueDate = document.createElement("p");
    DOMitemDueDate.innerText = `Due Date: ${ITEMDATA.dueDate}`;
    let DOMitemPriority = document.createElement("button");
    DOMitemPriority.innerText = `Priority: ${ITEMDATA.priority}`;
    DOMitemPriority.addEventListener("click", () => {
      item.setPriority(prompt("Change the priority"));
      DOMitemPriority.innerText = `Priority: ${ITEMDATA.priority}`;
    });
    let DOMitemStatus = document.createElement("p");
    DOMitemStatus.innerText = `Status: ${ITEMDATA.status}`;

    DOMitemDetailsElement.addEventListener("click", () =>
      showHideItemDetails(DOMitemConfigElement)
    );
    DOMitemElement.innerText = ITEMDATA.title;
    DOMitemDetailsElement.appendChild(DOMitemDescription);
    DOMitemConfigElement.appendChild(DOMitemPriority);
    DOMitemConfigElement.appendChild(DOMitemDueDate);
    DOMitemConfigElement.appendChild(DOMitemStatus);

    DOMitemDetailsElement.appendChild(DOMitemConfigElement);
    DOMitemElement.appendChild(DOMitemDetailsElement);
    DOMitemList.appendChild(DOMitemElement);
  });
};

const showHideItemDetails = (ev) => {
  console.log(ev);
  if (ev.style.display == "none") {
    ev.style.display = "flex";
  } else {
    ev.style.display = "none";
  }
};

const updateProjectView = (project) => {
  let DOMprojectTitle = document.querySelector("#Content-title");
  let DOMprojectDescription = document.querySelector("#Content-description");
  DOMprojectTitle.innerText = project.getProjectTitle();
  DOMprojectDescription.innerText = project.getProjectDescription();
};

const loadDefaultProject = () => {
  const first = Item("First Todo");
  inbox.addItemToProject(first);
  first.setDescription("What an amazing description");
  first.setDueDate("2024/11/02");

  app.setCurrentProject(inbox);
  mapProjects(app.getProjectList());
  updateProjectView(inbox);
  mapProjectItems(inbox.getProjectItems());
  DOMAddItemButton.removeEventListener("click", addNewItem);
  DOMAddItemButton.addEventListener("click", addNewItem);
};

const addProjectBtn = document.body.querySelector("#Add-project");

const addNewProject = () => {
  let projectName = prompt("Give a name for the project:");
  let projectDescription = prompt("Give a description for the project:");

  let newProject = Project(projectName, projectDescription);
  app.addToProjectList(newProject);
  mapProjects(app.getProjectList());
};

const addNewItem = () => {
  let currentProject = app.getCurrentProject();
  let newItem = Item(prompt("Enter Todo:"));
  currentProject.addItemToProject(newItem);
  mapProjectItems(currentProject.getProjectItems());
};

addProjectBtn.addEventListener("click", addNewProject);

let DOMAddItemButton = document.querySelector("#Content-add-item");

const loadSelectedProject = (project) => {
  app.setCurrentProject(project);
  updateProjectView(project);
  mapProjectItems(project.getProjectItems());
  DOMAddItemButton.removeEventListener("click", addNewItem);
  DOMAddItemButton.addEventListener("click", addNewItem);
};

loadDefaultProject();

export { app };

// Small box in the middle of the screen, left hand side will contain "Inbox" and "Projects (section)"
// Inbox will be loaded by default, upon clicking on a project the relevant to dos will be loaded
// set active project (on the clicked one) so it's passed as a param where to store the to-do.
// Central "New To-do" button at the botton (like on Things) with a form to fill in
// Each item will contain several icons :/ to edit the item, with alerts and shit
