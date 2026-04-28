import { Controller, Get } from '@nestjs/common';

@Controller('feature')
export class FeatureController {
  @Get()
  hello() {
    return { message: 'Hello World' };
  }
}
