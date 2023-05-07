import "./index.css";
import * as React from "react";
import api from "../api/index";
import moment from "moment";
import { formatProcess } from "../../Utils/FormatProcess";
import { Fragment, useRef, useState, useEffect } from "react";
import {
  Disclosure,
  Menu,
  Transition,
  Dialog,
  Listbox,
} from "@headlessui/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function App() {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const Items = [
    {
      id: 1,
      name: "Progressiva",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      value: "progressive",
    },
    {
      id: 2,
      name: "Selagem",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      value: "sealing",
    },
    {
      id: 3,
      name: "Corte",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      value: "cut",
    },
    {
      id: 4,
      name: "Mechas",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      value: "locks",
    },
    {
      id: 5,
      name: "Pintar",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      value: "paint",
    },
  ];
  const [selected, setSelected] = useState(Items[0]);
  const LoadData = async () => {
    try {
      const resp = await api({
        method: "GET",
        url: "/list-users",
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      });
      setUsers(resp?.data);
      console.log({ users });
    } catch (e) {
      console.error(e);
    }
  };
  const HandleSvheduling = async () => {
    try {
      const resp = await api({
        method: "POST",
        url: "/create-user",
        data: {
          name: formData?.name,
          email: formData?.email,
          process: selected?.value,
          hour: formData?.hour,
          day: formData?.day,
          shift: "morning",
        },
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      });
      LoadData();
      const message = `https://api.whatsapp.com/send?phone=5534996442120&text=Olá! Gostaria de marcar um horário. Meu nome é: *${
        formData?.name
      }*,quero fazer: *${formatProcess(selected?.value)?.label}*, as: *${
        formData?.hour
      }*, no dia: *${formData?.day}*, telefone: ${formData?.email}!`;
      window.open(message, "_blank");
    } catch (e) {
      console.error(e);
    }
  };
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <>
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex-wrap flex justify-between items-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Gerenciamento de Agenda
              </h1>
              <button
                onClick={() => setOpen(true)}
                className="text-sn bg-indigo-700 hover:bg-blue-600 px-4 py-1 rounded-full text-white shadow mt-6	"
              >
                Agendar
              </button>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
              <ul role="list" className="divide-y divide-gray-100">
                {users?.map((person) => (
                  <li
                    key={person?.email}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex gap-x-4">
                      <img
                        src={people[0].imageUrl}
                        alt="image test"
                        className="rounded-full w-20"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {person?.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {person?.email}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-base leading-6 text-gray-900 font-semibold	">
                        {formatProcess(person?.process)?.label.toUpperCase()}
                      </p>
                      <p className="text-base leading-6 text-gray-900 font-semibold	">
                        {person?.day}, ás {person?.hour} da {person?.shift}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {moment(person.created_at).format("DD/MM/YYYY")}
                      </p>
                      <Transition.Root show={open} as={Fragment}>
                        <Dialog
                          as="div"
                          className="relative z-10"
                          initialFocus={cancelButtonRef}
                          onClose={setOpen}
                        >
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                          </Transition.Child>

                          <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <Dialog.Panel className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg h-screen w-screen		">
                                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 sm:mx-0 sm:h-10 sm:w-10">
                                        <CalendarDaysIcon
                                          className="h-6 w-6 text-indigo-500"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title
                                          as="h3"
                                          className="text-base font-semibold leading-6 text-gray-900"
                                        >
                                          Faça seu Agendamento
                                        </Dialog.Title>
                                        <div className="mt-2">
                                          <p className="text-sm text-gray-500">
                                            Preencha abaixo os campos:
                                          </p>
                                          <div className="my-3">
                                            <p className="block text-sm font-medium leading-6 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-500">
                                              Nome:
                                            </p>
                                            <input
                                              type="text"
                                              name="price"
                                              id="price"
                                              className="block w-full rounded-md border-2 border-neutral-300 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6  focus:outline-none focus:ring focus:ring-indigo-500"
                                              placeholder="Mária de fatima"
                                              onChange={(e) =>
                                                setFormData({
                                                  ...formData,
                                                  name: e.target.value,
                                                })
                                              }
                                            />
                                          </div>
                                          <div className="my-3">
                                            <p className="block text-sm font-medium leading-6 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-500">
                                              Telefone:
                                            </p>
                                            <input
                                              type="number"
                                              name="price"
                                              id="price"
                                              className="block w-full rounded-md border-2 border-neutral-300 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6  focus:outline-none focus:ring focus:ring-indigo-500"
                                              placeholder="(34) 9 9644-2120"
                                              onChange={(e) =>
                                                setFormData({
                                                  ...formData,
                                                  email: e.target.value,
                                                })
                                              }
                                            />
                                          </div>
                                          <Listbox
                                            value={selected}
                                            onChange={setSelected}
                                          >
                                            {({ open }) => (
                                              <>
                                                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                                                  Procedimento:
                                                </Listbox.Label>
                                                <div className="relative mt-2">
                                                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                    <span className="flex items-center">
                                                      <img
                                                        src={selected?.avatar}
                                                        alt=""
                                                        className="h-5 w-5 flex-shrink-0 rounded-full"
                                                      />
                                                      <span className="ml-3 block truncate">
                                                        {selected?.name}
                                                      </span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                      <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                      />
                                                    </span>
                                                  </Listbox.Button>

                                                  <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                  >
                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-y-scroll	">
                                                      {Items.map((person) => (
                                                        <Listbox.Option
                                                          key={person.id}
                                                          className={({
                                                            active,
                                                          }) =>
                                                            classNames(
                                                              active
                                                                ? "bg-indigo-600 text-white"
                                                                : "text-gray-900",
                                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                                            )
                                                          }
                                                          value={person}
                                                        >
                                                          {({
                                                            selected,
                                                            active,
                                                          }) => (
                                                            <>
                                                              <div className="flex items-center">
                                                                <img
                                                                  src={
                                                                    person.avatar
                                                                  }
                                                                  alt=""
                                                                  className="h-5 w-5 flex-shrink-0 rounded-full"
                                                                />
                                                                <span
                                                                  className={classNames(
                                                                    selected
                                                                      ? "font-semibold"
                                                                      : "font-normal",
                                                                    "ml-3 block truncate"
                                                                  )}
                                                                >
                                                                  {person.name}
                                                                </span>
                                                              </div>

                                                              {selected ? (
                                                                <span
                                                                  className={classNames(
                                                                    active
                                                                      ? "text-white"
                                                                      : "text-indigo-600",
                                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                  )}
                                                                >
                                                                  <CheckIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                  />
                                                                </span>
                                                              ) : null}
                                                            </>
                                                          )}
                                                        </Listbox.Option>
                                                      ))}
                                                    </Listbox.Options>
                                                  </Transition>
                                                </div>
                                              </>
                                            )}
                                          </Listbox>
                                          <div className="mt-3">
                                            <p className="block text-sm font-medium leading-6 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-500">
                                              Dia:
                                            </p>
                                            <LocalizationProvider
                                              dateAdapter={AdapterDayjs}
                                            >
                                              <DatePicker
                                                className="w-full focus:outline-none focus:ring focus:ring-indigo-500"
                                                format="DD/MM/YYYY"
                                                onChange={(e) =>
                                                  setFormData({
                                                    ...formData,
                                                    day: e.format("DD/MM/YYYY"),
                                                  })
                                                }
                                              />
                                            </LocalizationProvider>
                                          </div>
                                        </div>
                                        <div className="mt-2.5">
                                          <p className="block text-sm font-medium leading-6 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-500">
                                            Horário:
                                          </p>
                                          <input
                                            type="time"
                                            name="price"
                                            id="price"
                                            className="block w-full rounded-md border-2 border-neutral-300 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6  focus:outline-none focus:ring focus:ring-indigo-500"
                                            placeholder="15:30"
                                            onChange={(e) =>
                                              setFormData({
                                                ...formData,
                                                hour: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                      type="button"
                                      className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                      onClick={() => HandleSvheduling()}
                                    >
                                      Agendar
                                    </button>
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                      onClick={() => setOpen(false)}
                                      ref={cancelButtonRef}
                                    >
                                      Cancelar
                                    </button>
                                  </div>
                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition.Root>
                      {/* {person.lastSeen ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Last seen{" "}
                          <time dateTime={person.lastSeenDateTime}>
                            {person.lastSeen}
                          </time>
                        </p>
                      ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs leading-5 text-gray-500">
                            Online
                          </p>
                        </div>
                      )} */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </>
    </>
  );
}

export default App;
