import { Module } from '@nestjs/common';
import { ParticiparController } from './participar.controller';
import { ParticiparService } from './participar.service';

@Module({
  controllers: [ParticiparController],
  providers: [ParticiparService]
})
export class ParticiparModule {}
