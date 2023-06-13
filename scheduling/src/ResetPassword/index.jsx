import api from "../../api/index";
import { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Navigate, Link } from "react-router-dom";
function ResetPassword() {
    const [Userdata, setUserdata] = useState({});
    const { toggleLogin, toggleProfile } =
        useContext(LoginContext);

    const [resetPassword, setResetPassword] = useState(false);
    const HandResetPassword = async () => {
        try {
            const resp = await api({
                method: "POST",
                url: "/reset-password",
                data: {
                    name: String(Userdata?.name),
                    oldsenha: String(Userdata?.senha),
                    newsenha: String(Userdata?.newsenha)
                },
                headers: {
                    "Content-Type": "application/json",
                },
                json: true,
            });
            alert("Senha redefinida com sucesso!");
            toggleLogin(false);
            toggleProfile(resp.data);
            setResetPassword(true);
            console.log({ Userdata });
        } catch (e) {
            alert("Error: Usuário não cadastrado!");
            console.error(e);
        }
    };

    return (
        <>
            {resetPassword === false ? 
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Redefinir senha
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* <form className="space-y-6" action="#" method="POST"> */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Nome:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={(e) => {
                                        setUserdata({ ...Userdata, name: e.target.value });
                                    }}
                                    autoComplete="email"
                                    required
                                    className="mb-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Antiga senha:
                                </label>
                                <div className="text-sm">
                                </div>
                            </div>
                            <div className="my-3">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        setUserdata({ ...Userdata, senha: e.target.value });
                                    }}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="my-3">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Nova senha:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        setUserdata({ ...Userdata, newsenha: e.target.value });
                                    }}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={HandResetPassword}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Entrar
                            </button>
                        </div>
                        {/* </form> */}

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Já está cadastrad(a)?{" "}
                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Click aqui!
                            </Link>
                        </p>
                    </div>
                </div>
            </>
            :
            <Navigate to="/login" />
            }
        </>
    );
}
export default ResetPassword;