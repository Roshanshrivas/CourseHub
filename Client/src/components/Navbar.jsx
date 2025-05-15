import { GraduationCap } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
    // let user = false;
    const {user} = useSelector((store) => store.auth);

  return (
    <div className='bg-gray-900 z-50 w-full fixed top-0 py-2'>
        <div className='max-w-7xl mx-auto flex justify-between'>
            {/* logo section */}
            <Link to={"/"}>
               <div className='flex gap-1'>
                 <GraduationCap className='text-gray-300 w-10 h-10'/>
                 <h1 className='text-gray-300 text-3xl font-bold'>CourseHub</h1>
               </div>
            </Link>
            {/* menu section */}
            <nav className=''>
                <ul className='flex gap-7 text-xl items-center font-bold text-white'>
                    <Link to={"/"}><li className='cursor-pointer'>Home</li></Link>
                    <Link to={"/courses"}><li className='cursor-pointer'>Courses</li></Link>
                    {
                        !user ? (
                            <div className='flex gap-3'>
                                <Link to={"/login"}><Button className="bg-blue-500 hover:bg-blue-600">Login</Button></Link>
                                <Link to={"/signup"}><Button className="bg-gray-700 hover:bg-gray-800">Signup</Button></Link>
                            </div>
                        ) : (
                            <div className='flex items-center gap-7'>
                                <Link to="/profile">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                                    <AvatarFallback>RS</AvatarFallback>
                                </Avatar>
                                </Link>
                                <Button>Logout</Button>
                            </div>
                        )
                    }
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar