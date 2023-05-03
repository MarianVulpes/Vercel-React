
export default function TodoList() {
    const person = {
        name: "Hedy Lamarr",
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg" 
                alt="Hedy Lamarr"
                className="Photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    )
}