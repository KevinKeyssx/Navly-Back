import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    Max,
    MaxLength,
    Min,
    MinLength
} from 'class-validator';


export class CreateLinkDto {

    @ApiProperty({
        description : 'Nombre del link',
        example     : 'Google',
        type        : 'string',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength( 5 )
    @MaxLength( 30 )
    name: string;


    @ApiPropertyOptional({
        description : 'Indica si el link es favorito',
        example     : true,
        default     : false,
    })
    @IsBoolean()
    @IsOptional()
    isFavorite?: boolean;


    @ApiPropertyOptional({
        description : 'Cantidad de estrellas otorgadas al link',
        example     : 5,
        default     : 0,
    })
    @IsInt()
    @Min( 0 )
    @Max( 5 )
    @IsOptional()
    stars?: number;


    @ApiPropertyOptional({
        description : 'Cantidad de visitas al link',
        example     : 120,
        default     : 0,
    })
    @IsInt()
    @Min( 0 )
    @Max( 99999 )
    @IsOptional()
    visits?: number;


    @ApiPropertyOptional({
        description : 'Descripción del link',
        example     : 'Enlace al buscador más popular',
    })
    @IsString()
    @IsOptional()
    @MinLength( 5 )
    @MaxLength( 200 )
    description?: string;


    @ApiPropertyOptional({
        description : 'Orden del link en la lista',
        example     : 1,
        type        : 'integer',
        default     : 0,
    })
    @IsInt()
    @Min( 0 )
    @Max( 50 )
    @IsOptional()
    order?: number;


    @ApiPropertyOptional({
        description : 'ID del Website asociado',
        example     : 'c6d6a8c0-1b23-4f5b-92a8-88888e888888',
    })
    @IsUUID()
    @IsOptional()
    websiteId?: string;


    @ApiPropertyOptional({
        description : 'ID del Site asociado',
        example     : 'c6d6a8c0-1b23-4f5b-92a8-77777e777777',
    })
    @IsUUID()
    @IsOptional()
    siteId?: string;


    @ApiProperty({
        description : 'ID del Navigator asociado',
        example     : 'c6d6a8c0-1b23-4f5b-92a8-66666e666666',
    })
    @IsUUID()
    @IsNotEmpty()
    navigatorId: string;

}
