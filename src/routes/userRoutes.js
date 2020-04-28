import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


// router.get('/', userController.index);


router.post('/', loginRequired, userController.store); // para novos usuarios criarem contas
router.put('/', loginRequired, userController.update); // update
router.delete('/', loginRequired, userController.delete); // delete


export default router;
