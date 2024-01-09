import { Request, Response } from 'express';
import {UserService} from "../services/userService";

const userService = new UserService();

export async function find(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user ID'
            });
        }

        const user = await userService.getUser(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.json({
            success: true,
            data: user,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.json({
                success: false,
                message: error.message
            });
        } else {
            return res.json({
                success: false,
                message: 'Unexpected error'
            });
        }
    }
}