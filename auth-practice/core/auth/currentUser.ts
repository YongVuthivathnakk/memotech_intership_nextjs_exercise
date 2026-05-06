import { getUserFromSession } from "./session";

export async function getCurrentUser() {
    return await getUserFromSession()
}