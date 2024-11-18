import { Injectable } from '@nestjs/common';
import { CreateNavigatorDto } from './dto/create-navigator.dto';
import { UpdateNavigatorDto } from './dto/update-navigator.dto';

@Injectable()
export class NavigatorsService {
  create(createNavigatorDto: CreateNavigatorDto) {
    return 'This action adds a new navigator';
  }

  findAll() {
    return `This action returns all navigators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} navigator`;
  }

  update(id: number, updateNavigatorDto: UpdateNavigatorDto) {
    return `This action updates a #${id} navigator`;
  }

  remove(id: number) {
    return `This action removes a #${id} navigator`;
  }
}
