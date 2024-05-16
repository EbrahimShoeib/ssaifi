import React from 'react'
import RoutingLink from './components/NavLink'
import { AiFillHome } from 'react-icons/ai'
import { InquiryRoutes, ManagementRoutes, ProfileRoutes, ResourcesRoutes, SalesRoutes } from '@/constants/dashboardRoutes'
import RouteGroup from './components/RouteGroup'
import LogoutButton from './components/LogoutButton'
function SideNav() {


    return (
        <nav className='w-[200px] flex flex-col h-full text-md bg-smokey-white rounded-3xl'>
            <div className='h-[80px] '>
                <img className='w-[100px]  mx-auto aspect-square block' src={'/svgs/logo.svg'} alt="logo" />
            </div>

            <div className='flex-1 overflow-auto'>
                <RoutingLink href='/'>
                    <div className='flex gap-3 px-5 text-xl h-[35px] items-center mb-3'>
                        <AiFillHome className='text-md '/>
                        <span>dashboard</span>
                    </div>
                </RoutingLink>


                <div
                className='gap-5 flex flex-col py-100 text-sm ' >

                    <RouteGroup groupName='resources' routes={ResourcesRoutes}/>
                    <RouteGroup groupName='sales' routes={SalesRoutes}/>
                    <RouteGroup groupName='inquiry' routes={InquiryRoutes}/>
                    <RouteGroup groupName='management' routes={ManagementRoutes}/>
                    <RouteGroup groupName='profile' routes={ProfileRoutes}/>

                </div>
            </div>

            <div className='h-[50px] flex justify-center items-center my-5'>
                <LogoutButton/>
            </div>
        </nav>
    )
}

export default SideNav