import { Module }			from '@nestjs/common';
import { TypeOrmModule }	from '@nestjs/typeorm';

import { WebsitesService }    	from './websites.service';
import { WebsitesController } 	from './websites.controller';
import { Website }				from './entities/website.entity';


@Module({
	controllers	: [ WebsitesController ],
	providers	: [ WebsitesService ],
	exports		: [ WebsitesService, TypeOrmModule ],
	imports		: [
		TypeOrmModule.forFeature([
			Website
		])
	]
})
export class WebsitesModule {}
