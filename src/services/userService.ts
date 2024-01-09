import {UserRepository} from "../repositories/userRepository";

export class UserService {
    private userRepository = new UserRepository();

    async getUser(id: number) {
        return this.userRepository.getUserById(id);
    }
}