function Header(){
    return (
        <header className="w-full h-20 bg-black flex-box justify-start gap-5 p-5">
            <img src="./src/assets/icons/Logo-Black-White.svg" className="size-10 object-cover" alt="Logo"/>
            <h1 className="text-3xl text-white">Melodic</h1>
        </header>
    )
}

export default Header