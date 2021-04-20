import {Request, Response} from 'express'
import EmailService from '../services/EmailService'

const users = [
    {name: 'user1', email: 'user1@gtest.com'},
    {name: 'user2', email: 'user2@gtest.com'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();
        emailService.sendMail({
           to: { 
               name: 'user1' , 
            email: 'test@test.com'
            },
           message:  {
               body: 'Welcome', 
               subject: 'Welcome'
            }
        });

        return res.send();
    }
}