import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import newsletterRouter from "./newsletter.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(newsletterRouter);

export default router;
