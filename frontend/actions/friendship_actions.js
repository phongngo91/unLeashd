import * as APIUtil from "../utils/friendship_api_util";

export const createFriendship = friendship => () => {
  return APIUtil.createFriendship(friendship);
};
