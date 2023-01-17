interface HabitsProps {
    completed: number
}

export function Habits(props: HabitsProps) {
    return (
        <h1 className="bg-slate-600 w-10 h-7 text-white m-2 rounded flex items-center justify-center">{props.completed}</h1>
    )
}