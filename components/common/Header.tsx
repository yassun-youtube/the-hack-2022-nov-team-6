import Link from 'next/link'
import { blogConfig } from '../../blog.config'
import GlobalNav from './GlobalNav'
import MenuButton from './MenuButton'

export default function Header() {
  return (
    <header className='z-50 py-4 bg-zinc-800 relative md:static'>
      <div className='container lg:max-w-5xl flex justify-between px-6 md:px-0'>
        <h1 className='text-xl font-bold tracking-wider' aria-label='Brand'>
          <Link href='/'>{blogConfig.blogTitle}</Link>
        </h1>
        <MenuButton />
        <GlobalNav />
      </div>
    </header>
  )
}
