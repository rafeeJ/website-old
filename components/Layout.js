import Header from '../components/Header'
import HeadTop from '../components/HeadTop'

export default function Layout({ children, header }) {
    return (
        <div className="flex flex-col bg-offwhite min-h-screen justify-between">
            {header ? header : <HeadTop />}
            <Header className="h-10" />
            <main className="mb-auto bg-offwhite mx-10">{children}</main>
            <footer className="justify-items-center bg-offwhite h-10 flex justify-center">
                <p className="font-merri text-center m-3">{new Date().getFullYear()} Rafee Jenkins</p>
                <p className="font-merri text-center m-3">-</p>
                <p className="font-merri text-center m-3 underline" onClick={() => { window.location.href = 'mailto:rafeejenkins@gmail.com' }}>Get in Touch</p>
            </footer>
        </div>
    )
}
