import request from 'supertest';
import app from '../app';

describe('GET /api/user/:id', () => {
    it('should return 400 for non-numerid IDs', async () => {
        const response = await request(app).get('/api/user/not-a-number');
        expect(response.status).toBe(400);
        expect(response.body).toMatchObject({
            success: false,
            message: 'Invalid user ID'
        })
    })

    it('should return 404 for non-existing user', async () => {
        const response = await request(app).get('/api/user/9999');
        expect(response.status).toBe(404);
        expect(response.body).toMatchObject({
            success: false,
            message: 'User not found'
        })
    })

    it('should return a user for valid ID', async () => {
        const response = await request(app).get('/api/user/1');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            success: true,
            data: {
                id: 1,
                name: expect.any(String),
                email: expect.any(String)
            }
        })
    })
})