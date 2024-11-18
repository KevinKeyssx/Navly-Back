import { Module } from '@nestjs/common';

import { NavigatorsModule } from './navigators/navigators.module';


@Module({
	imports		: [NavigatorsModule],
	controllers	: [],
	providers	: [],
})
export class AppModule {}
