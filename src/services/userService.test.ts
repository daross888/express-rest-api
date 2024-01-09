import { UserService } from "./userService";
import { UserRepository } from "../repositories/userRepository";
import {IUser} from "../interfaces/userInterface";

describe('UserService', () => {
    let userService: UserService;
    let mockUserRepository: Partial<UserRepository>;

    beforeEach(() => {
        mockUserRepository = {
            getUserById: jest.fn().mockResolvedValue({
                id: 1,
                name: 'Test',
                email: 'test@user.com',
            }),
        };

        userService = new UserService(mockUserRepository as UserRepository);
    });

    it('should get a user by id', async () => {
        const user = await userService.getUser(1);
        expect(user).toMatchObject({
            id: 1,
            name: 'Test',
            email: 'test@user.com',
        });
        expect(mockUserRepository.getUserById).toHaveBeenCalledWith(1);
    })
})