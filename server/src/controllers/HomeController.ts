import { Request, Response } from 'express';

class HomeController {
    async index(req: Request, res: Response) {
        return res.json({
            Author: 'Roger Lima',
            Project: 'RockekSeat - Next Level Week',
            Version: '1.0.0'
        });
    }
}

export default HomeController;