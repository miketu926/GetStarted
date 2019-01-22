export const createUser = (user) => {
  return $.ajax({
    type: "POST",
    url: "/api/users",
    data: {user}
  });
};
export const createSession = (user) => {
  return $.ajax({
    type: "POST",
    url: "/api/session",
    data: {user}
  });
};
export const deleteSession = () => {
  return $.ajax({
    type: "DELETE",
    url: "/api/session"
  });
};