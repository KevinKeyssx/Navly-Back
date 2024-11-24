import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";


import { Navigator }    from '../../navigators/entities/navigator.entity'
import { Website }      from "../../websites/entities/website.entity";
import { Site }         from "../../sites/entities/site.entity";


@Entity({ name: 'links' })
export class Link {

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
        type: 'varchar',
    })
    name: string;


    @Column({
        type    : 'boolean',
        default : false
    })
    isFavorite: boolean;


    @Column({
        type    : 'integer',
        default : 0
    })
    stars: number;


    @Column({
        type    : 'integer',
        default : 0
    })
    visits: number;


    @Column({
        name        : 'description',
        type        : 'varchar',
        nullable    : true
    })
    description: string;


    @Column({
        type        : 'integer',
        nullable    : true,
        default     : 0,
    })
    order: number;


    @OneToOne(() => Website, {
        nullable: true,
        onDelete: 'SET NULL' // Si se elimina un Website, el campo se establece como null.
    })
    @JoinColumn({ name: 'website_id' })
    website: Website | null;


    @ManyToOne(() => Site, site => site.links, {
        nullable: true,
        onDelete: 'SET NULL' // Si se elimina un Site, el campo se establecerá como null.
    })
    @JoinColumn({ name: 'site_id' })
    site: Site | null;


    @ManyToOne(() => Navigator, navigator => navigator.links, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'navigator_id' })
    navigator: Navigator;

}
