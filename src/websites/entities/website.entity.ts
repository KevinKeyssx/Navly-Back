import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";


@Entity({ name: 'websites' })
export class Website {

    @PrimaryGeneratedColumn( 'uuid' )
    id: string;


    @CreateDateColumn({
        name    : 'created_at',
        type    : 'timestamptz',
        default : () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;


    @UpdateDateColumn({
        name        : 'updated_at',
        type        : 'timestamp',
        nullable    : true
    })
    updatedAt: Date;


    //! Principal
    @Column({
        name    : 'site_url',
        type    : 'varchar',
    })
    url: string; // requestUrl si no existe ogUrl


    @Column({
        name    : 'img_url',
        type    : 'varchar',
    })
    imgUrl: string; // ogImage position [0]


    @Column({
        type        : 'varchar',
        nullable    : true
    })
    title: string;


    @Column({
        name    : 'site_name',
        type    : 'varchar',
        nullable    : true
    }) 
    name: string; //OgSiteName || alAndroidAppName || Sacarla por www.SITE


    @Column({
        type        : 'varchar',
        nullable    : true
    })
    favicon: string;


    @Column({
        type        : 'varchar',
        nullable    : true
    })
    description: string; // ogDescription

}
