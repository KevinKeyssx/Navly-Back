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

	const document = SwaggerModule.createDocument( app, config );
	SwaggerModule.setup( 'docs', app, document );

	// await app.listen( ENV.LOCAL.PORT_API || 3000 );
	await app.listen( 3000 );
	// logger.log( `Application is running on: ${ ENV.LOCAL.HOST_API }:${ ENV.LOCAL.PORT_API }`);
	// logger.log( `Application connected in : ${ ENV.DATABASE.NAME }:${ ENV.DATABASE.HOST }`);
	logger.log( `Application is running on: ${ 'localhost' }:${ ':3000' }`);
	logger.log( `Application connected in : ${ 'navly' }:${ 'porhay.com' }`);
})();