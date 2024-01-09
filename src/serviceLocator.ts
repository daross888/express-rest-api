import {UserRepository} from "./repositories/userRepository";
import {UserService} from "./services/userService";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export {
    userService,
    userRepository,
}