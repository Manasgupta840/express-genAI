import { Entity, ObjectId, ObjectIdColumn, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"

@Entity()
export class Notes {
    @ObjectIdColumn()
    id: number
    
    @Column()
    title: string

    @Column()
    description: string

    @Column()
    notes_time: Date

    @ManyToOne(() => User, (user) => user.notes)
    user: User
    
    constructor(title: string, description: string, notes_time: Date) {
        this.title = title
        this.description = description
        this.notes_time = notes_time
    }
}