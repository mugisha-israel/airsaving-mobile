import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'mugisha_israel';
export const verify = token => jwt.decode(token);

export const sign = user => jwt.sign(user, PRIVATE_KEY, {expiresIn: '24h'});

export const token = window.localStorage.getItem('token');