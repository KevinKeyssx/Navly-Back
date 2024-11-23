import { ApiProperty } from "@nestjs/swagger";

import {
    IsBoolean,
    IsInt,
    IsOptional,
    IsString,
    IsUUID,
    Max,
    MaxLength,
    Min,
    MinLength
} from "class-validator";


export class CreateSiteDto {

    @ApiProperty({
        description : 'Nombre del sitio',
        type        : 'string',
        example     : 'Mi Sitio Favorito',
    })
    @IsString()
    @MinLength( 5 )
    @MaxLength( 20 )
    name: string;


    @ApiProperty({
        description : 'Orden del sitio para priorización',
        type        : 'integer',
        example     : 1,
    })
    @IsInt()
    @Min( 0 )
    @Max( 50 )
    @IsOptional()
    order?: number;


    @ApiProperty({
        description : 'Indica si el sitio es favorito',
        type        : 'boolean',
        example     : true,
        required    : false
    })
    @IsBoolean()
    @IsOptional()
    isFavorite?: boolean;


    @ApiProperty({
        description : 'ID del navegador al que pertenece el sitio',
        type        : 'string',
        format      : 'uuid',
        example     : 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    })
    @IsUUID()
    navigatorId: string;

}
