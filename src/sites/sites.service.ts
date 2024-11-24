import { Injectable, NotFoundException } 	from '@nestjs/common';
import { InjectRepository }					from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateSiteDto } 		from './dto/create-site.dto';
import { UpdateSiteDto }		from './dto/update-site.dto';
import { Site }					from './entities/site.entity';
import { NavigatorsService }	from '../navigators/navigators.service';


@Injectable()
export class SitesService {
	constructor(
		@InjectRepository(Site)
		private readonly siteRepository: Repository<Site>,

		private readonly navigatorService: NavigatorsService
	) {}


	async create( createSiteDto: CreateSiteDto ): Promise<Site> {
		const { navigatorId, ...rest } = createSiteDto;

		const navigator = await this.navigatorService.findOne( navigatorId );

		const site = this.siteRepository.create({
			...rest,
			navigator
		});

		return await this.siteRepository.save( site );
	}


	findAll = async (): Promise<Site[]> => await this.siteRepository.find();


	async findOne( id: string ): Promise<Site> {
		const site = await this.siteRepository.findOne({ where: { id }});

		if ( !site ) {
			throw new NotFoundException( `Site with ID ${id} not found` );
		}

		return site;
	}


	async update( id: string, updateSiteDto: UpdateSiteDto ): Promise<Site> {
		const site = await this.siteRepository.preload({
			id,
			...updateSiteDto,
		});

		if ( !site ) throw new NotFoundException( `Site with ID ${id} not found` );

		return await this.siteRepository.save( site );
	}


	async remove( id: string ): Promise<Site> {
		const site = await this.findOne( id );

		return await this.siteRepository.remove( site );
	}
}
