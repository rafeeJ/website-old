import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeadTop from '../components/HeadTop'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col flex-wrap bg-offwhite h-screen">
            <HeadTop />
            <Header />
            <main>{children}</main>
            <footer className="justify-items-center bg-offwhite flex-shrink">
                <h1 className="font-serif text-center m-3">2021 Jenkins Company</h1>
            </footer>
        </div>
    )
}
