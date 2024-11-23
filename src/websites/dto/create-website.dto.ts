import { ApiProperty } from "@nestjs/swagger";

import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    MaxLength,
    MinLength
} from "class-validator";


export class CreateWebsiteDto {

    @ApiProperty({
        example     : 'https://www.navly.link',
        description : 'Url principal',
    })
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    @MinLength( 13 )
    @MaxLength( 100 )
    url: string;


    @ApiProperty({
        example     : '/username/endpath.avif',
        description : 'Endpoint de la url de la img',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength( 10 )
    @MaxLength( 100 )
    imgUrl: string;


    @ApiProperty({
        example     : 'Nombre',
        description : 'Nombre de del sitio web',
        required    : false
    })
    @IsString()
    @IsOptional()
    @MinLength( 5 )
    @MaxLength( 50 )
    title?: string;


    @ApiProperty({
        example     : 'Navly',
        description : 'Nombre del sitio web',
        required    : false
    })
    @IsString()
    @IsOptional()
    @MinLength( 5 )
    @MaxLength( 50 )
    name?: string;


    @ApiProperty({
        example     : 'https://www.favicon.svg',
        description : 'Url del favicon',
        required    : false
    })
    @IsString()
    @IsUrl()
    @IsOptional()
    @MinLength( 5 )
    @MaxLength( 50 )
    favicon?: string;


    @ApiProperty({
        example     : 'Description',
        description : 'Detalle de lo que hace la página web',
        required    : false
    })
    @IsString()
    @IsOptional()
    @MinLength( 5 )
    @MaxLength( 50 )
    description?: string;

}
