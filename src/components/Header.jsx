import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPlus } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className='h-32'>
        <div className="container mx-auto">
            <div className="inner-content flex flex-row justify-between">
                <div className="brand text-white font-bold text-3xl mt-12">
                    <Link to={"/"}>İzlenecekler</Link>
                </div>
                <ul className='nav-links flex flex-row gap-x-4'>
                    <li className='text-white font-bold text-3xl mt-12 hidden'>
                        <Link to={"/watched"}>İzlenenler</Link>
                    </li>
                    <Link to={'/add'}>
                        <FontAwesomeIcon className='mt-11 border-blue-400 hover:border-blue-600 text-3xl text-white font-bold border bg-blue-400 hover:bg-blue-600  rounded-lg p-2' icon={faPlus} />
                    </Link>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header