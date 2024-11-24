import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    Max,
    MaxLength,
    Min,
    MinLength
} from "class-validator";


export class CreateNavigatorDto {

    @ApiPropertyOptional({
        description : 'ID del usuario asociado al navegador',
        type        : 'string',
        example     : '12345',
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
    @IsNotEmpty()
    @MinLength( 5 )
    @MaxLength( 30 )
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


    @ApiPropertyOptional({
        description : 'Orden del navegador para priorización',
        example     : 1,
        type        : 'integer',
        default     : 0,
    })
    @IsInt()
    @Min( 0 )
    @Max( 50 )
    @IsOptional()
    order?: number;

}
