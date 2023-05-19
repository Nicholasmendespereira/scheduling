const people = [
    {
        name: 'Leslie Alexander',
        role: 'Cliente',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

function Profile() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Este é o seu perfil</h2>

                    {people.map((person) => (
                        <div className="flex items-center gap-x-6 mt-10" key={person.name}>
                            <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt={person.name} />
                            <div>
                                <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Ultima visita:
                </p>
            </div>
        </div>
    );
}
export default Profile;