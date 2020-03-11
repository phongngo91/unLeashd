import * as APIUtil from "../utils/friendship_api_util";

export const createFriendship = friendship => () => {
  return APIUtil.createFriendship(friendship).then(
    () => "Success"
  );
};

export const destroyFriendship = friendship => () => {
  return APIUtil.destroyFriendship(friendship).then(
    () => "Success at destroying friendship"
  );
};
