import { Injectable, NotFoundException }	from '@nestjs/common';
import { InjectRepository } 				from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Navigator }			from './entities/navigator.entity';
import { CreateNavigatorDto }	from './dto/create-navigator.dto';
import { UpdateNavigatorDto }	from './dto/update-navigator.dto';


@Injectable()
export class NavigatorsService {
	constructor(
		@InjectRepository( Navigator )
		private readonly navigatorRepository: Repository<Navigator>,
	) {}


	#relations = (): string[] => ['sites', 'links'];


	async create( createNavigatorDto: CreateNavigatorDto ): Promise<Navigator> {
		const navigator = this.navigatorRepository.create( createNavigatorDto );
		return await this.navigatorRepository.save(navigator);
	}


	async findAll(): Promise<Navigator[]> {
		return await this.navigatorRepository.find({
		relations: this.#relations(),
		});
	}


	async findOne( id: string ): Promise<Navigator> {
		const navigator = await this.navigatorRepository.findOne({
			where		: { id },
			relations	: this.#relations(),
		});

		if ( !navigator )
			throw new NotFoundException( `Navigator with ID ${id} not found` );

		return navigator;
	}


	async update(
		id					: string,
		updateNavigatorDto	: UpdateNavigatorDto,
	): Promise<Navigator> {
		const navigator = await this.navigatorRepository.preload({
			id,
			...updateNavigatorDto,
		});

		if ( !navigator )
			throw new NotFoundException(`Navigator with ID ${id} not found`);

		return await this.navigatorRepository.save( navigator );
	}


	async remove( id: string ): Promise<Navigator> {
		const navigator = await this.findOne( id );

		return await this.navigatorRepository.remove( navigator );
	}
}
