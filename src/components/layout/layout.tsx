import { Outlet } from 'react-router-dom'
import Header from './header'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-neutral-100">
        <div className="container pb-[100px]">
          <Outlet />
        </div>
      </main>
    </>
  )
}
