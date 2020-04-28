import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir em uma aplicação real
// (não se lista usuarios em uma aplicação, falha de segurança)
router.get('/', userController.index); // Lista Usuarios
// router.get('/:id', userController.show); // Lista Usuario

router.post('/', userController.store); // para novos usuarios criarem contas
router.put('/', loginRequired, userController.update); // update
router.delete('/', loginRequired, userController.delete); // delete


export default router;
