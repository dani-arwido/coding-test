const request = require('supertest');
const register = require('../../controllers/register');
const app = require('../../app');

describe('Register endpoint', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '+62812345678',
      fName: 'A',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test1.com',
    });
    expect(res.statusCode).toEqual(200);
  });
});

describe('Register endpoint', () => {
  it('should error because duplicate phone number', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '+62812345678',
      fName: 'A',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test2.com',
    });
    expect(res.statusCode).toEqual(400);
  });
});

describe('Register endpoint', () => {
  it('should error because duplicate email', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '+628123456787',
      fName: 'A',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test1.com',
    });
    expect(res.statusCode).toEqual(400);
  });
});

describe('Register endpoint', () => {
  it('should error because invalid phone number format', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '12345678712',
      fName: 'A',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test3.com',
    });
    expect(res.statusCode).toEqual(500);
  });
});

describe('Register endpoint', () => {
  it('should error because invalid email format', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '+62812345678711',
      fName: 'A',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test3',
    });
    expect(res.statusCode).toEqual(500);
  });
});

describe('Register endpoint', () => {
  it('should error because empty first name', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '+6281122345678711',
      fName: '',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test4',
    });
    expect(res.statusCode).toEqual(500);
  });
});

describe('Register endpoint', () => {
  it('should error because empty last name', async () => {
    const res = await request(app).post('/register').send({
      pNumber: '+628112678711',
      fName: '',
      lName: 'B',
      dobDay: '12',
      dobMonth: '10',
      dobYear: '1995',
      gender: 'm',
      email: 'test@test5',
    });
    expect(res.statusCode).toEqual(500);
  });
});
