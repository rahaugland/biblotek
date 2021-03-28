
type Semester = {
    id : string,
    name : string,
    year : number,
    
}

type Course = {
    id : string,
    name : string, 
    texts? : string[]
}

export type {Semester, Course}