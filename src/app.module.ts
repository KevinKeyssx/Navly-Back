import { ConfigModule }		from '@nestjs/config';
import { Module }			from '@nestjs/common';
import { TypeOrmModule }	from '@nestjs/typeorm';

import { NavigatorsModule }		from './navigators/navigators.module';
import { LinksModule } 			from './links/links.module';
import { SitesModule } 			from './sites/sites.module';
import { WebsitesModule }		from './websites/websites.module';


@Module({
	imports: [
		ConfigModule.forRoot(),

		TypeOrmModule.forRoot({
			type              	: 'postgres',
			host              	: process.env.PGHOST,
			port              	: +process.env.PGPORT,
			database			: process.env.PGDATABASE,
			username          	: process.env.PGUSER,
			password          	: process.env.PGPASSWORD,
			autoLoadEntities	: true,
			synchronize       	: true,
		}),

		NavigatorsModule,
		LinksModule,
		SitesModule,
		WebsitesModule,
	],
	controllers	: [],
	providers	: [],
})
export class AppModule {}
