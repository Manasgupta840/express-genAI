import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User } from "./user"

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    todo: string

    @Column()
    todo_time: Date

    @Column()
    alert_time: Date

    @Column()
    isCompleted: boolean

    @ManyToOne(() => User, (user) => user.todos)
    user: User

    constructor(todo: string, todo_time: Date, alert_time: Date, isComplete: boolean) {
        this.todo = todo
        this.todo_time = todo_time
        this.isCompleted = isComplete
        this.alert_time = alert_time
    }
}