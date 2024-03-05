import {Router } from "express";
import { CreateUser } from "./Controllers/users/UserCreate";
import { UserAuthenticate } from "./Controllers/users/UserAuthenticate";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { RefreshToken } from "./Controllers/users/UserRefreshToken";
const router = Router();

const createUserController = new CreateUser();
const userAuthenticate = new UserAuthenticate();
const refreshToken = new RefreshToken();

router.post("/users", createUserController.handle,);
router.post("/login", userAuthenticate.handle,);
router.post("/refresh", refreshToken.handle,);

router.get("/cursos", ensureAuthenticated, (req, res) => {
    return res.json(
        [
            {id: 1, name: "NodeJs"},
            {id: 2, name: "ReactJs"},
            {id: 3, name: "React Native"},
            {id: 4, name: "TypeScript"},
            {id: 5, name: "JavaScript"},
            {id: 6, name: "Java"},
            {id: 7, name: "C#"},
            {id: 8, name: "Python"},
            {id: 9, name: "Ruby"},
            {id: 10, name: "PHP"},
            {id: 11, name: "C++"},
            {id: 12, name: "C"},
            {id: 13, name: "Go"},
        ]
        )
});
export {router}