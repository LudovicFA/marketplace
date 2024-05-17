"use client"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const Header = ({session}: {session: Session | null}) => {
  return (
    <header className="border-b p-4 flex justify-between items-center">
       <Link 
            href={'/'}
            className="text-blue-600 font-bold text-2xl"
        >
            Marketplace
        </Link>
        <nav className="flex gap-4 *:rounded *:py-1 ">
                <Link
                    href={"/new"}
                    className="border border-blue-600 text-blue-600 inline-flex items-center gap-1 px-2 mr-4"
                >
                   <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                   <span>Post a ad</span>
                </Link>
                <span className="border-r "></span>

                {!session?.user && (
                    <>
                    <button className=" border-0 px-2 text-gray-600">
                        Sign up
                    </button>
                    <button 
                        className="bg-blue-600 text-white border-0 px-6"
                        onClick={() => signIn('google')}
                    >
                        Login
                    </button>
                    </>
                )}
                {session?.user && (
                    <>
                        <Link href={'/account'}>
                            <Image 
                                src={session.user.image as string}
                                alt="Profile"
                                width={36}
                                height={36}
                                className="rounded-md"
                            />
                        </Link>
                    </>
                )}

                
        </nav>
    </header>
  )
}

export default Header