export interface ResetProps{
    onReset:()=> void
}

export default function Reset ({onReset}:ResetProps){
    return(
            <button onClick={onReset}>
                Clique para resetar
            </button>
    )
}