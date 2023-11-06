interface User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
}
function showStatus(user: User) : string | undefined{
    if(user.status) {
        return user.status;
    } else {
        return undefined;
    }
    }