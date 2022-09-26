import { burgerService } from '../services/burgerService.js'
import BaseController from '../utils/BaseController'

export class burgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getburgers)
      .get('/:id', this.getburger)
  }

  async getburgers(req, res, next) {
    try {
      const burgers = await burgerService.findburgers(req.query.name, req.query.offset)
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getburger(req, res, next) {
    try {
      const burger = await burgerService.getburgerById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}