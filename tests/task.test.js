const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Task = require('../models/Task');
const User = require('../models/User');

let token;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'password' });
    token = res.body.token;
});

afterAll(async () => {
    await Task.deleteMany();
    await mongoose.connection.close();
});

describe('Task Endpoints', () => {
    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Test Task',
                description: 'Test Description',
                dueDate: '2024-07-20',
                priority: 'High',
                status: 'Pending',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Task');
    });

    it('should get all tasks', async () => {
        const res = await request(app)
            .get('/api/tasks')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
