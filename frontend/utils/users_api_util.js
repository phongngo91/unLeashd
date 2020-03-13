export const fetchUser = userId => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  });
};

export const searchUsers = name => {
  return $.ajax({
    method: "GET",
    url: `/api/users?first_name=${name.first_name}&last_name=${name.last_name}`
  });
};