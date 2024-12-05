

type Person = {
    id: number,
    name: string,
    email: string,
    cityid: number
}

type PersonProps = {
    person: Person
}

const Person = ({ person }: PersonProps) => {
    return (
        <div className="Person">
            <p>{ person.name }</p>
        </div>
    )
}


export default Person;