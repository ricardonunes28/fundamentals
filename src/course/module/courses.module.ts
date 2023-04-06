import { Module } from '@nestjs/common';
import { CoursesController } from 'src/course/controllers/courses.controller';
import { CoursesService } from 'src/course/service/courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
