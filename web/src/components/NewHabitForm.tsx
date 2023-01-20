import { Check } from "phosphor-react";


export function NewHabitForm() {
    return (
        <form action="" className="w-full flex flex-col mt-6">
            <label htmlFor="title" className=" leading-tight">
                Qual seu comprometimento?
            </label>

            <input 
                type="text" 
                id="title"
                placeholder="ex.: Exercícios, dormir bem, etc... "
                className="p-4 round-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
            />
            <label htmlFor="title" className=" leading-tight mt-4">
                Qual a recorrência?
            </label>

            <button
                type="submit"
                className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3  bg-green-600 hover:bg-green-500"
            >
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}