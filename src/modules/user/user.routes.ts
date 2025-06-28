import { Router } from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from './user.controller';

const userRouter = Router();

userRouter.get('/', getAllUser)
userRouter.get('/:userId', getSingleUser)
userRouter.post('/create-user', createUser);
userRouter.put('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)


export default userRouter;