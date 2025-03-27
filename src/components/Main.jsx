function Main(){
    return (
        <main className="w-full h-[150vh] bg-gradient-to-t from-black to-primary from-50% flex-box">
            <section className="w-2/4 h-[90%] bg-gradient-to-t from-neutral-900 to-black rounded-xl">
                <section className="w-full h-2/5 flex-box flex-col gap-3">
                    <header className="w-full h-36 flex-box flex-col">
                        <img className="size-12 object-cover" src="./src/assets/icons/Logo-Black-White.svg" alt="logo-Melodic"/>
                        <h1 className="text-3xl text-white ">Entre para a Melodic</h1>
                    </header>
                    <div className="w-full h-auto flex-box flex-col gap-3">
                        <div className="login-option">
                            <img className="size-8" src="./src/assets/icons/icon-google.png" alt="icon-login"/>
                            <h1 className="text-white text-xl">Entrar com Google</h1>
                        </div>
                        <div className="login-option">
                            <img className="size-8" src="./src/assets/icons/icon-apple.png" alt="icon-login"/>
                            <h1 className="text-white text-xl">Entrar com Apple</h1>
                        </div>
                        <div className="login-option">
                            <img className="size-8" src="./src/assets/icons/icon-facebook.png" alt="icon-login"/>
                            <h1 className="text-white text-xl">Entrar com Facebook</h1>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Main