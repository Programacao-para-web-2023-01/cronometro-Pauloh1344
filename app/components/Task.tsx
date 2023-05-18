export interface TaskProps{
    title: string
    completed: boolean
}

export default function Task ({completed,title}:TaskProps){
    return(
        <article className="flex gap-4">
            <h4>{title}</h4>
            <input type={"checkbox"} checked={completed}></input>
        </article>
    )
}