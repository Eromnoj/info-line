import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: 'return hello world'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  @ApiResponse({status: 200, description: 'Authorized'})
  getHello(): string {
    return this.appService.getHello();
  }
}
