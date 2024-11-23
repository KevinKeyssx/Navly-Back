import { Module }			from '@nestjs/common';
import { TypeOrmModule }	from '@nestjs/typeorm';

import { LinksService }		from './links.service';
import { LinksController }	from './links.controller';
import { Link }				from './entities/link.entity';


@Module({
	controllers	: [ LinksController ],
	providers	: [ LinksService ],
	exports		: [ LinksService, TypeOrmModule ],
	imports		: [
		TypeOrmModule.forFeature([
			Link
		]),
	]
})
export class LinksModule {}
