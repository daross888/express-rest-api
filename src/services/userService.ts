import {UserRepository} from "../repositories/userRepository";

export class UserService {
    private userRepository = new UserRepository();

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async getUser(id: number) {
        return this.userRepository.getUserById(id);
    }
}