import { Injectable, NotFoundException }	from '@nestjs/common';
import { InjectRepository }					from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { Website }			from './entities/website.entity';


@Injectable()
export class WebsitesService {
	constructor(
		@InjectRepository( Website )
		private readonly websiteRepository: Repository<Website>,
	) {}


	async create( createWebsiteDto: CreateWebsiteDto ): Promise<Website> {
		const website = this.websiteRepository.create( createWebsiteDto );
		return await this.websiteRepository.save( website );
	}


	findAll = async (): Promise<Website[]> => await this.websiteRepository.find();


	async findOne( id: string ): Promise<Website> {
		const website = await this.websiteRepository.findOne({
			where		: { id },
		});

		if ( !website ) {
			throw new NotFoundException( `Website with ID ${id} not found` );
		}

		return website;
	}


	async update( id: string, updateWebsiteDto: UpdateWebsiteDto ): Promise<Website> {
		const website = await this.websiteRepository.preload({
			id,
			...updateWebsiteDto,
		});

		if ( !website )
			throw new NotFoundException(`Website with ID ${id} not found`);

		return await this.websiteRepository.save( website );
	}


	async remove( id: string ): Promise<Website> {
		const website = await this.findOne( id );

		return await this.websiteRepository.remove( website );
	}

}
