export const createFriendship = friendship => {
  return $.ajax({
    url: "/api/friendships",
    method: "post",
    data: { friendship }
  });
};

// export const destroyFriendship = friendship => {
//   return $.ajax({
//     url: "/api/friendships/1",
//     method: "delete",
//     data: { user_id: friendship.user_id, friend_id: friendship.friend_id }
//   });
// };
