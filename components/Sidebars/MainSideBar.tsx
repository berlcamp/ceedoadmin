'use client'

import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useFilter } from '@/context/FilterContext'
import { useSupabase } from '@/context/SupabaseProvider'
import { superAdmins } from '@/constants'
import { UserIcon, UsersIcon } from '@heroicons/react/20/solid'

const MainSideBar = () => {
  const currentRoute = usePathname()
  const { session } = useSupabase()

  return (
    <>
      <ul className="pt-8 mt-4 space-y-2 border-gray-700">
        <li>
          <div className="flex items-center text-gray-500 items-centers space-x-1 px-2">
            <UserIcon className="w-4 h-4" />
            <span>Sales</span>
          </div>
        </li>
        <li>
          <Link
            href="/"
            className={`app__menu_link ${
              currentRoute === '/asdf' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">Collections</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`app__menu_link ${
              currentRoute === '/asdf' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">
              Invoice Templates
            </span>
          </Link>
        </li>
      </ul>
      <ul className="mt-6 space-y-2 border-gray-700">
        <li>
          <div className="flex items-center text-gray-500 items-centers space-x-1 px-2">
            <UsersIcon className="w-4 h-4" />
            <span>Customers</span>
          </div>
        </li>
        <li>
          <Link
            href="/"
            className={`app__menu_link ${
              currentRoute === '/asdf' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">
              Walk-In Customers
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`app__menu_link ${
              currentRoute === '/asdf' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">Renters</span>
          </Link>
        </li>
      </ul>
      <ul className="mt-6 space-y-2 border-gray-700">
        <li>
          <div className="flex items-center text-gray-500 items-centers space-x-1 px-2">
            <Cog6ToothIcon className="w-4 h-4" />
            <span>Settings</span>
          </div>
        </li>
        <li>
          <Link
            href="/locations"
            className={`app__menu_link ${
              currentRoute === '/locations' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">Locations</span>
          </Link>
        </li>
        <li>
          <Link
            href="/sections"
            className={`app__menu_link ${
              currentRoute === '/sections' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">Sections</span>
          </Link>
        </li>
        <li>
          <Link
            href="/stalls"
            className={`app__menu_link ${
              currentRoute === '/stalls' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">Stalls</span>
          </Link>
        </li>
        <li>
          <Link
            href="/accounts"
            className={`app__menu_link ${
              currentRoute === '/accounts' ? 'app_menu_link_active' : ''
            }`}>
            <span className="flex-1 ml-3 whitespace-nowrap">User Accounts</span>
          </Link>
        </li>
      </ul>

      {/* Only Berl can see the menu below */}
      {superAdmins.includes(session.user.email) && (
        <ul className="mt-6 space-y-2 border-gray-700">
          <li>
            <div className="flex items-center text-gray-500 items-centers space-x-1 px-2">
              <Cog6ToothIcon className="w-4 h-4" />
              <span>Permissions</span>
            </div>
          </li>
          <li>
            <Link
              href="/settings/system"
              className={`app__menu_link ${
                currentRoute === '/settings/system'
                  ? 'app_menu_link_active'
                  : ''
              }`}>
              <span className="flex-1 ml-3 whitespace-nowrap">
                System Access
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings/errorlogs"
              className={`app__menu_link ${
                currentRoute === '/settings/errorlogs'
                  ? 'app_menu_link_active'
                  : ''
              }`}>
              <span className="flex-1 ml-3 whitespace-nowrap">Error Logs</span>
            </Link>
          </li>
        </ul>
      )}
    </>
  )
}

export default MainSideBar
