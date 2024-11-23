import { Logger, ValidationPipe }			from '@nestjs/common';
import { NestFactory }						from '@nestjs/core';
import { DocumentBuilder, SwaggerModule }	from '@nestjs/swagger';

import { AppModule } from './app.module';


( async () => {
	const app 		= await NestFactory.create( AppModule );
	const logger	= new Logger( 'Main' );

	app.useGlobalPipes( new ValidationPipe({ 
		whitelist               : true,
		forbidNonWhitelisted	: true,
	}));

	app.setGlobalPrefix( 'api' );
	app.enableCors({
		origin			: '*',
		methods			: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		credentials		: true,
	});

	const config = new DocumentBuilder()
		.setTitle( 'Navly' )
		.setDescription( 'Navly Backend API Documentation' )
		.setVersion( '1.0' )
		.build();

	const document 	= SwaggerModule.createDocument( app, config );
	const port		= +process.env.PORT_BACK || 3000;
	const host		= process.env.HOST_BACK;

	SwaggerModule.setup( 'docs', app, document );

	await app.listen( port );

	logger.log( `Application is running on: ${ host }:${ port }`);
	logger.log( `Application connected in : ${ process.env.PGDATABASE }:${ process.env.PGPORT }`);
})();