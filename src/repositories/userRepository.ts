import {IUser} from "../interfaces/userInterface";

export class UserRepository {
    private users: IUser[];

    constructor() {
        this.users = [
            {
                id: 1,
                name: 'Test',
                email: 'test@test.com'
            }
        ];
    }

    async getUserById(id: number): Promise<IUser | null> {
        const user = this.users.find(user => user.id === id);

        return user || null;
    }
}