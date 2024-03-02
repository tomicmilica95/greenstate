import { AppDataSource } from '../dataSource';
import { User } from '../model/User';
import { Task } from '../model/Task';
import { DeepPartial } from 'typeorm';
import { PriorityEnum } from '../enums/PriorityEnum';
import { StatusEnum } from '../enums/StatusEnum';
import { HandlerError } from '../helpers/handleError';

export class TaskService {
  static async getTasksForCurrentUser(userId: number): Promise<Task[]> {
    const taskRepository = AppDataSource.getRepository(Task);
    return taskRepository.find({ where: { user: { id: userId } } });
  }

  static async getAllTasks(): Promise<Task[]> {
    const taskRepository = AppDataSource.getRepository(Task);
    return await taskRepository.find();
  }

  static async createTask(
    title: string,
    description: string,
    priority: PriorityEnum,
    status: StatusEnum,
    userId: number
  ): Promise<Task | undefined> {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { id: userId } });

      if (!user) {
        return undefined;
      }

      const taskRepository = AppDataSource.getRepository(Task);

      const newTaskData: DeepPartial<Task> = {
        title,
        description,
        priority,
        status,
        user,
      };

      const newTask = taskRepository.create([newTaskData]);
      await taskRepository.save(newTask);

      return newTask[0];
    } catch (error) {
      throw new HandlerError(500, `Error creating task`);
    }
  }

  static async updateTask(
    taskId: number,
    updatedTask: Partial<Task>
  ): Promise<Task | null> {
    const taskRepository = AppDataSource.getRepository(Task);
    const existingTask = await taskRepository.findOne({
      where: { id: taskId },
    });

    if (!existingTask) {
      throw new HandlerError(404, `Task not found`);
    }

    const updatedTaskEntity = { ...existingTask, ...updatedTask };
    const savedTask = await taskRepository.save(updatedTaskEntity);

    return savedTask;
  }

  static async deleteTask(taskId: number): Promise<void> {
    const taskRepository = AppDataSource.getRepository(Task);
    const task = await taskRepository.findOne({ where: { id: taskId } });

    if (!task) {
      throw new HandlerError(404, `Task not found`);
    }

    await taskRepository.remove(task);
  }
}
