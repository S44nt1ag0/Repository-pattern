import { Request, Response } from "express";

class HomeController {
    async index(req: Request, res: Response) {
        res.json({
            api: "Books",
            version: "1.0.0"
        });
    }
}

export default new HomeController();