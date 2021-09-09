import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeadTop from '../components/HeadTop'

export default function Layout({ children }) {

    return (
        <div className="flex flex-col bg-offwhite h-screen justify-between">
            <HeadTop />
            <Header className="h-10"/>
            <main className="mb-auto bg-offwhite mx-10">{children}</main>
            <footer className="justify-items-center bg-offwhite h-10">
                <h1 className="font-serif text-center m-3">{ new Date().getFullYear()} Rafee Jenkins</h1>
            </footer>
        </div>
    )
}
