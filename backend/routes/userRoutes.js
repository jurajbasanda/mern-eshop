import express from "express"
import { authUser } from "../controllers/userContorller.js"
const router = express.Router()

router.route('/login').post(authUser)



export default router
