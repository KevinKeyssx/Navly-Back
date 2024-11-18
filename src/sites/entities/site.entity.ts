import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import { Navigator } from '../../navigators/entities/navigator.entity'
import { Link } from "src/links/entities/link.entity";


@Entity({ name: 'sites' })
export class Site {

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
        type        : 'varchar',
        nullable    : true
    })
    name: string;


    @Column({
        type        : 'integer',
        nullable    : true,
        default     : 0,
    })
    order: number;


    @ManyToOne(() => Navigator, navigator => navigator.sites, {
        nullable    : false,
        onDelete    : 'CASCADE'
    })
    @JoinColumn({ name: 'navigator_id' })
    navigator: Navigator;


    @OneToMany(() => Link, link => link.site)
    links: Link[];

}
