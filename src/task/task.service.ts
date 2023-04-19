import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, dueDate, completed } = createTaskDto;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.completed = completed;
    return await this.taskRepository.save(task);
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      // Manejar el caso en que no se encuentra la tarea
      throw new Error(`Tarea con id ${id} no encontrada`);
    }
    return task;
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async updateTask(id: string, createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, dueDate, completed } = createTaskDto;
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      // Manejar el caso en que no se encuentra la tarea
      throw new Error(`Tarea con id ${id} no encontrada`);
    }
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.completed = completed;
    return await this.taskRepository.save(task);
  }

  async deleteTask(id: string): Promise<void> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      // Manejar el caso en que no se encuentra la tarea
      throw new Error(`Tarea con id ${id} no encontrada`);
    }
    await this.taskRepository.delete(id);
  }
}
