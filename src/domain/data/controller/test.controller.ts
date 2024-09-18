import { Controller, Get,  Middlewares,Path,Route } from 'tsoa';
import { authMiddleware } from '../../../middleware/testMiddleWare';

@Route("test")
export class TestController extends Controller {
  @Get("/{id}")
  @Middlewares( authMiddleware )
   async getTest(@Path() id : number) : Promise<number> {
    console.info('getTest');
    return id;
  }
}