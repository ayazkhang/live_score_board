import { get, create, update, remove } from "../modals/matches";
import { success, failed } from "../response/responseArr";
import { new_match, update_match } from "../types/types";


export const getMatches = async (): Promise<any> => {

  try {

    const matches = await get();
    const responseArr = {
      matches: matches,
    };
    const message = "matches have been fetched successfully";
    return success(message, responseArr);
  } catch (error) {
    const errorMessage = "An error occurred while fetching matches";
    return failed(errorMessage);
  }

};

export const start_new_match = async (new_match: new_match): Promise<any> => {

  try {

    const matches = await create(new_match);
    const responseArr = {
      matches: matches,
    };
    const message = "new match has been started successfully";
    return success(message, responseArr);
  } catch (error) {
    const errorMessage = "An error occurred while starting new match";
    return failed(errorMessage);
  }

};

export const update_current_match = async (update_match:update_match): Promise<any> => {

  try {

    const matches = await update(update_match);
    const responseArr = {
      matches: matches,
    };
    const message = "new match has been updated successfully";
    return success(message, responseArr);
  } catch (error) {
    const errorMessage = "An error occurred while update match";
    return failed(errorMessage);
  }

};

export const delete_match = async (match_id:number | string): Promise<any> => {

  try {

    const matches = await remove(match_id);
    const responseArr = {
      matches: matches,
    };
    const message = "match has been delete successfully";
    return success(message, responseArr);
  } catch (error) {
    const errorMessage = "An error occurred while deleting match";
    return failed(errorMessage);
  }

};
