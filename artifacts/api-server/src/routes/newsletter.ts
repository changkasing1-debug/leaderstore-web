import { Router, type IRouter } from "express";
import { z } from "zod";

const router: IRouter = Router();

const NewsletterSubscribeBody = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

router.post("/newsletter/subscribe", (req, res) => {
  const parsed = NewsletterSubscribeBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  const { email, name } = parsed.data;

  req.log.info({ email, name }, "Newsletter subscription received");

  res.json({
    success: true,
    message: "Successfully subscribed to newsletter",
  });
});

export default router;
