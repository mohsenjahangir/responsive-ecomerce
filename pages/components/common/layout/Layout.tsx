import { ReactNode } from 'react'
import  Footer  from './Footer'
import  Header  from './Header'
interface LayoutProps {
    children:ReactNode
}
function Layout  ({children}:LayoutProps)  {
  return (
    <div className=' overflow-hidden mx-5 mobile:mt-20 lg:mt-5'>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}


export default Layout
