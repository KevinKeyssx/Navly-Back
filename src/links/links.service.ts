import { Injectable, NotFoundException } 	from '@nestjs/common';
import { InjectRepository } 				from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateLinkDto } 		from './dto/create-link.dto';
import { UpdateLinkDto } 		from './dto/update-link.dto';
import { Link }					from './entities/link.entity';
import { NavigatorsService } 	from '../navigators/navigators.service';
import { SitesService } 		from '../sites/sites.service';
import { WebsitesService }		from '../websites/websites.service';


@Injectable()
export class LinksService {
	constructor(
		@InjectRepository( Link )
		private readonly linkRepository: Repository<Link>,

		private readonly navigatorService	: NavigatorsService,
		private readonly siteService		: SitesService,
		private readonly websiteService		: WebsitesService,
	) {}


	async create( createLinkDto: CreateLinkDto ): Promise<Link> {
		const { navigatorId, websiteId, siteId , ...rest } = createLinkDto;

		const navigator = await this.navigatorService.findOne( navigatorId );
		const website	= await this.websiteService.findOne( websiteId );
		const site		= siteId ? await this.siteService.findOne( createLinkDto.siteId ) : null;

		const link = this.linkRepository.create({
			...rest,
			navigator,
			website,
			site
		});

		return await this.linkRepository.save( link );
	}


	async findAll(): Promise<Link[]> {
		return await this.linkRepository.find({
			relations: ['website', 'site', 'navigator'],
		});
	}


	async findOne(id: string): Promise<Link> {
		const link = await this.linkRepository.findOne({
			where		: { id },
			relations	: ['website', 'site', 'navigator'],
		});

		if ( !link ) throw new NotFoundException( `Link with ID ${id} not found` );

		return link;
	}


	async update(id: string, updateLinkDto: UpdateLinkDto): Promise<Link> {
		const link = await this.linkRepository.preload({
			id,
			...updateLinkDto,
		});

		if ( !link ) throw new NotFoundException( `Link with ID ${id} not found` );

		return await this.linkRepository.save( link );
	}


	async remove( id: string ): Promise<Link> {
		const link = await this.findOne( id );

		return await this.linkRepository.remove( link );
	}
}
