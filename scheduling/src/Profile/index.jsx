import api from "../../api/index";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
const people = [
  {
    name: "Leslie Alexander",
    role: "Cliente",
    birthday: "12/05/2000",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const lastVisit = [
  {
    process: "Selagem",
    lastvisit: "23/05/2023, ás 21:15",
  },
];

function Profile() {
  const { profile } = useContext(LoginContext);
  console.log({ profile });

  const HandleProfile = async () => {
    try {
      const resp = await api({
        method: "GET",
        url: "/profile",
        data: {
          id: parseInt(profile.id),
        },
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      });
      //   alert("Carregado ultimos agendamentos!");
      console.log("Resposta do Handle Profile: ", resp.data);
    } catch (e) {
      alert("Error: carregamento de agendamento não concluído");
      console.error(e);
    }
  };
  useEffect(() => {
    HandleProfile();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl border-r-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Este é o seu perfil
          </h2>

          {people.map((person) => (
            <div className="flex items-center gap-x-6 mt-10 " key={person.name}>
              <img
                className="h-20 w-22 rounded-full"
                src={person.imageUrl}
                alt={person.name}
              />
              <div>
                <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-600">
                  Aniversário: <br /> {person.birthday}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="mt-2 text-lg leading-8 text-gray-600">Ultima visita:</p>
          <ul role="list" className="divide-y divide-gray-100 mt-5">
            {lastVisit.map((visit) => (
              <li
                key={visit.email}
                className="flex justify-between gap-x-6 py-5 border rounded-full pl-3"
              >
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {visit.process}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {visit.lastvisit}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Profile;
