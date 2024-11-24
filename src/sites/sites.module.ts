import { Module }			from '@nestjs/common';
import { TypeOrmModule }	from '@nestjs/typeorm';

import { SitesService }		from './sites.service';
import { SitesController }	from './sites.controller';
import { Site }				from './entities/site.entity';
import { NavigatorsModule } from '../navigators/navigators.module';


@Module({
	controllers	: [ SitesController ],
	providers	: [ SitesService ],
	exports		: [ SitesService, TypeOrmModule ],
	imports		: [
		TypeOrmModule.forFeature([
			Site
		]),

		NavigatorsModule
	]
})
export class SitesModule {}
