import { Module }			from '@nestjs/common';
import { TypeOrmModule }	from '@nestjs/typeorm';

import { LinksService }			from './links.service';
import { LinksController }		from './links.controller';
import { Link }					from './entities/link.entity';
import { NavigatorsModule } 	from '../navigators/navigators.module';
import { SitesModule }			from '../sites/sites.module';
import { WebsitesModule } 		from '../websites/websites.module';


@Module({
	controllers	: [ LinksController ],
	providers	: [ LinksService ],
	exports		: [ LinksService, TypeOrmModule ],
	imports		: [
		TypeOrmModule.forFeature([
			Link
		]),

		NavigatorsModule,
		SitesModule,
		WebsitesModule
	]
})
export class LinksModule {}
