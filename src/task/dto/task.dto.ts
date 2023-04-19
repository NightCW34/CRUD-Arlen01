import { IsNotEmpty, IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDate()
  dueDate: Date;

  @IsBoolean()
  completed: boolean;
}
