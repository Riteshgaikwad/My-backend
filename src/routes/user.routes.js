import { Router } from "express"
import {loggoutUser, loginUser, registerUser,refreshAccessToken} from '../controllers/user.controller.js'
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";



const router=Router();

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)
// router.route("/login").post(login)

router.route("/login").post(loginUser)

//seecured routes
router.route("/logout").post(verifyJWT, loggoutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router 