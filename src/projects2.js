const projectMethods = {
  getTitle() {
    return this.title;
  },
  setTitle(input) {
    this.title = input;
    
  },
  createTab() {
    // pushes tabs
    
  },
};

const projectFactory = function () {
  const title = "new project";

  const tabs = [];

  return Object.assign(Object.create(projectMethods), {
    title,
  });
};

const project = projectFactory();
