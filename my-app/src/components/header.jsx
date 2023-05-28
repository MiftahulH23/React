const Navbar = ({props}) => {
    return(
        <div>
            <nav className="flex justify-between px-10 items-center border-b-2 py-2 h-[64px] mt-[22px]">
                <div className="flex">
                    <div className="w-[180px] h-[29px] overflow-hidden mb-[29px] mt-[10px]">
                        <img src="/images/logo.png" alt="logo" className="object-cover"/>
                    </div>
                    <ul className="pl-12 flex gap-4 mb-[39px] mt-[15px]">
                        <li> <a href="">Beranda</a></li>
                        <li><a href="">Program Studi</a></li>
                        <li><a href="">Berita</a></li>
                        <li><a href="">Fasilitas</a></li>
                    </ul>
                </div>
                <div className="w-[123px] h-[50px] bg-[#1C5067]
                rounded-[14px] flex mb-[18px]">
                    <button className="text-white text-[12px] font-bold m-auto">Daftar</button>
                </div>
            </nav>
        </div>
    )
}

const JudulCaption = () => {
    return (
        <div className="grid grid-cols-2 px-[50px]">
            {/* Kiri */}
            <div className="mt-[92px]">
                <div className="w-[140px] h-[36px] bg-[#e9eef0] rounded-[8px] flex items-center justify-center">
                    <p className="text-[#1C5067]">Hi, PCR Squad</p>
                </div>
                <div className="mt-[17px] -mr-10">
                    <h1 className="text-[60px] text-[#0A093D] font-bold">Selamat Datang di</h1>
                    <h1 className="text-[60px] text-[#1C5067] font-bold -mt-8">PCR University</h1>
                </div>
                <div className="w-[491px] h-[56px]">
                    <p className="text-[18px] text-[#656464]">Politeknik swasta terbaik nasional dengan fasilitas kampus yang lengkap dan lingkungan kampus yang asri</p>
                </div>
                <div className="flex gap-[18px] mt-[73px]">
                    <div className="w-[162px] h-[62px] bg-[#1C5067] flex justify-center items-center rounded-[14px]">
                        <button className="text-white text-[14px]">Tentang PCR</button>
                    </div>
                    <div className="w-[162px] h-[62px] border-2 border-[#1C5067] flex justify-center items-center rounded-[14px]">
                        <button className="text-[#1C5067] text-[14px]">Virtual Tour</button>
                    </div>
                </div>
            </div>
            {/* Kanan */}
            <div className="mt-[53px] w-[630px] h-[475px] overflow-hidden">
                <img src="/images/foto.png" alt="profil" className="object-cover"/>
            </div>
        </div>
    )
}

const Header = () =>{
    return (
        <div>
            <Navbar />
            <JudulCaption />
        </div>
    )
}

export default Header