import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MazeOptions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", { nullable: true })
    serializedOptions: string;
}
