import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import { Link } from "../../links/entities/link.entity";
import { Site } from "../../sites/entities/site.entity";


@Entity({ name: 'navigators' })
export class Navigator {

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


    @Column({
        name        : 'user_id',
        type        : 'varchar',
        nullable    : true
    })
    userId: string;


    @Column({
        type: 'varchar',
    })
    name: string;


    @Column({
        type    : 'boolean',
        default : false
    })
    isFavorite: boolean;


    @Column({
        name: 'bg_url',
        type: 'varchar',
    })
    bgUrl: string;


    @Column({
        type        : 'integer',
        nullable    : true,
        default     : 0,
    })
    order: number;


    @OneToMany( () => Site, site => site.navigator )
    sites: Site[];


    @OneToMany( () => Link, link => link.navigator )
    links: Link[];

}
