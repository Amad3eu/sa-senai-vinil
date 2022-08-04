import Link from 'next/link'

function NavHeader() {
    return (
        <>
            <div className="grid grid-cols-2 text-white font-semibold bg-black">
                <div className="flex items-center justify-start p-12">
                    <img src='' alt='amogus'></img>
                </div>
                <div className="flex items-center justify-end p-12">
                    <nav className="flex list-none space-x-10 text-2xl">
                    <li>Produtos</li>
                    <li>História</li>
                    <li>Sobre</li>
                    </nav>
                    <div className="pl-20 pr-4 text-2xl ">
                        <Link href='/login'>
                        <a className="border border-white p-2 rounded-lg decoration-none">Login</a>
                        </Link>
                    </div>
                    <div className="pl-4 text-2xl">
                        <Link href='/cadastro'>
                        <button className="border border-white p-2 rounded-lg decoration-none">Cadastro</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavHeader