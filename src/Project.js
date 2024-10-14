import { app } from "./index.js";

function Project(title, description = "") {
  const itemList = [];

  // make this list smarter by turning into an object with more data (number of items)

  const getProjectItems = () => {
    return itemList;
  };

  const addItemToProject = (item) => itemList.push(item);

  const getProjectTitle = () => {
    return title;
  };

  const getProjectDescription = () => {
    return description;
  };

  // app.addToProjectList(title);

  return {
    addItemToProject,
    getProjectItems,
    getProjectTitle,
    getProjectDescription,
  };
}

export { Project };
