import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';

import { NavigatorsService }    from './navigators.service';
import { NavigatorsController } from './navigators.controller';
import { Navigator }            from './entities/navigator.entity';


@Module({
    controllers : [ NavigatorsController ],
    providers   : [ NavigatorsService ],
    exports     : [ NavigatorsService, TypeOrmModule ],
    imports     : [
        TypeOrmModule.forFeature([
            Navigator
        ])
    ]
})
export class NavigatorsModule {}
