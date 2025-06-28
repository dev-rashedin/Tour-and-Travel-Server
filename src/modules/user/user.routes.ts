import { Router } from 'express';
import { createUser, getAllUser, getSingleUser } from './user.controller';

const userRouter = Router();

userRouter.get('/', getAllUser)
userRouter.get('/:userId', getSingleUser)
userRouter.post('/create-user', createUser);


export default userRouter;