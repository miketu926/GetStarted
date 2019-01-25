export const createProject = (project) => {
  return $.ajax({
    type: "POST",
    url: "/api/projects",
    data: { project }
  });
};