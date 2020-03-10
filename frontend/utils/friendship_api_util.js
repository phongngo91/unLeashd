export const createFriendship = (friendship) =>{
  debugger
  return $.ajax({
    url: "/api/friendships",
    method: "post",
    data: {friendship}
  });
};