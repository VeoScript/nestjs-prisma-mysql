import { OmitType } from '@nestjs/mapped-types';
import { TodoEntity } from '../entities/todo.entity';

export class CreateTodoDto extends OmitType(TodoEntity, ['id', 'done']) {}
