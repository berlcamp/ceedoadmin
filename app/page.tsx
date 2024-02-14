import { createServerClient } from '@/utils/supabase-server'
import { MainMenu, MainSideBar, Sidebar, TopBar } from '@/components'

export default async function Page() {
  const supabase = createServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isActive = session?.user.user_metadata.status !== 'active' // returns true or false

  return (
    <>
      <Sidebar>
        <MainSideBar />
      </Sidebar>
      <div className="app__main">
        <TopBar />
        <div className="flex justify-center mt-10 text-lg">
          {!isActive ? (
            <div>
              Your account is now queued for approval from the administrator.
              Please come back later.
            </div>
          ) : (
            <MainMenu />
          )}
        </div>
      </div>
    </>
  )
}
