import { ApiProperty } from "@nestjs/swagger";

import {
    IsBoolean,
    IsInt,
    IsOptional,
    IsString,
    IsUrl,
    Max,
    MaxLength,
    Min,
    MinLength
} from "class-validator";


export class CreateNavigatorDto {

    @ApiProperty({
        description : 'ID del usuario asociado al navegador',
        type        : 'string',
        example     : '12345',
        required    : false,
    })
    @IsString()
    @IsOptional()
    userId?: string;


    @ApiProperty({
        description : 'Nombre del navegador',
        type        : 'string',
        example     : 'Mi navegador favorito',
    })
    @IsString()
    @Min( 5 )
    @Max( 20 )
    name: string;


    @ApiProperty({
        description : 'Indica si este navegador es favorito',
        type        : 'boolean',
        example     : true,
        required    : false
    })
    @IsBoolean()
    @IsOptional()
    isFavorite?: boolean;


    @ApiProperty({
        description : 'URL de fondo del navegador',
        type        : 'string',
        example     : 'https://example.com/background.avif',
    })
    @IsString()
    @IsUrl()
    @MinLength( 13 )
    @MaxLength( 255 )
    bgUrl: string;


    @ApiProperty({
        description : 'Orden del navegador para priorización',
        type        : 'integer',
        example     : 1,
    })
    @IsInt()
    @Min( 0 )
    @Max( 50 )
    @IsOptional()
    order?: number;

}
