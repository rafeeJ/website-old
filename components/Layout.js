import Header from '../components/Header'
import HeadTop from '../components/HeadTop'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col bg-offwhite h-screen justify-between">
            <HeadTop />
            <Header className="h-10"/>
            <main className="mb-auto bg-offwhite mx-10">{children}</main>
            <footer className="justify-items-center bg-offwhite h-10 flex justify-center">
                <h1 className="font-serif text-center m-3">{ new Date().getFullYear()} Rafee Jenkins</h1>
                <h1 className="font-serif text-center m-3">-</h1>
                <h1 className="font-serif text-center m-3 underline" onClick={() => {window.location.href = 'mailto:rafee@sewthis.co.uk'}}>Get in Touch</h1>
            </footer>
        </div>
    )
}
