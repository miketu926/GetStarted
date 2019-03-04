export const fetchProjects = (searchTerm) => {
  debugger
  return $.ajax({
    type: "GET",
    url: "/api/projects",
    data: {searchTerm},
  });
};

export const fetchProject = (id) => {
  return $.ajax({
    type: "GET",
    url: `/api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax({
    type: "POST",
    url: "/api/projects",
    data: project,
    contentType: false,
    processData: false,
  });
};

export const updateProject = (project) => {
  return $.ajax({
    type: "PATCH",
    url: `/api/projects/${project.id}`,
    data: { project }
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `/api/projects/${id}`,
  });
};