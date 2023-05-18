export interface UserProps{
    name: string
    username: string
    email: string
}

export default function User({name,username,email}:UserProps){
    return(
        <article className="flex gap-4">
            <h4>Nome: {name};</h4>
            <h4>User: {username};</h4>
            <h4>Email: {email};</h4>
        </article>
    )
}