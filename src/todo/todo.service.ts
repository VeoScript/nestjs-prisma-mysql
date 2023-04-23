import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.prismaService.todo.create({
      data: createTodoDto,
    });
  }

  async findAll() {
    return await this.prismaService.todo.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.todo.findFirst({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.prismaService.todo.update({
      where: {
        id: id
      },
      data: updateTodoDto
    });
  }

  async remove(id: string) {
    return await this.prismaService.todo.delete({
      where: {
        id: id
      }
    });
  }
}
