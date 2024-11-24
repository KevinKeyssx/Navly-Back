import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete
} from '@nestjs/common';

import { NavigatorsService }	from './navigators.service';
import { CreateNavigatorDto }	from './dto/create-navigator.dto';
import { UpdateNavigatorDto } 	from './dto/update-navigator.dto';


@Controller( 'navigators' )
export class NavigatorsController {
	constructor(
		private readonly navigatorsService: NavigatorsService
	) {}


	@Post()
	create( @Body() createNavigatorDto: CreateNavigatorDto ) {
		return this.navigatorsService.create( createNavigatorDto );
	}


	@Get()
	findAll() {
		return this.navigatorsService.findAll();
	}


	@Get( ':id' )
	findOne( @Param( 'id' ) id: string ) {
		return this.navigatorsService.findOne( id );
	}


	@Patch( ':id' )
	update(
		@Param( 'id' ) id			: string,
		@Body() updateNavigatorDto	: UpdateNavigatorDto
	) {
		return this.navigatorsService.update( id, updateNavigatorDto );
	}


	@Delete( ':id' )
	remove( @Param( 'id' ) id: string ) {
		return this.navigatorsService.remove( id );
	}

}
