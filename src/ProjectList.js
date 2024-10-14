function initApp() {
  const projectList = [];
  let currentProject = {};

  const getProjectList = () => {
    return projectList;
  };

  const getCurrentProject = () => {
    return currentProject;
  };

  const setCurrentProject = (project) => {
    currentProject = project;
  };

  const addToProjectList = (project) => {
    projectList.push(project);
  };

  return {
    addToProjectList,
    getProjectList,
    getCurrentProject,
    setCurrentProject,
  };
}

export { initApp };
