import { Entity, ObjectId, ObjectIdColumn, Column, OneToMany, Index } from "typeorm"
import { Todo } from "./todo"
import { Notes } from "./notes"

export interface userDetails {
    userName: string,
    password: string
}

@Entity()
export class User {
    @ObjectIdColumn()
    id: string

    @Index({ unique: true })
    @Column()
    userName: string

    @Column()
    password: string

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[]

    @OneToMany(() => Notes, (note) => note.user)
    notes: Notes[]

    constructor(userName: string, password: string) {
        this.userName = userName
        this.password = password
    }

}