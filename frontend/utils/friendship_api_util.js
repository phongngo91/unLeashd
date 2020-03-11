export const createFriendship = (friendship) =>{
  return $.ajax({
    url: "/api/friendships",
    method: "post",
    data: {friendship}
  });
};