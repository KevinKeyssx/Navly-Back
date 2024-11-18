import { Module } from '@nestjs/common';
import { NavigatorsService } from './navigators.service';
import { NavigatorsController } from './navigators.controller';

@Module({
  controllers: [NavigatorsController],
  providers: [NavigatorsService]
})
export class NavigatorsModule {}
