const Judul = () => {
    return(
        <div className="mt-[112px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#0A093D] text-[48px] font-bold">Berita <span className="text-[#1C5067]">Terbaru</span> </h1>
                <p className="text-[18px] text-[#656464]">Berita terbaru berhubungan dengan civitas</p>
                <p className="text-[18px] text-[#656464]">akademika di PCR University</p>
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="px-[40px] mt-[99px]">
            <div className="">
                <img src="/images/berita1.png" alt="berita1" className=""/>
            </div>
            <div className="mt-[47px]">
                <p className="text-[#0A093D] text-[32px] font-semibold">{props.title}</p>
                <p className="mt-[32px] text-[18px] text-[#656464]">PCR University mengadakan workshop tentang Fraework dalam mengembangkan sistem. Harapannya mahasiswa bisa belajar lebih giat sehingga bisa menjadi developer</p>
                <div className="mt-[32px] ">
                    <a href="" className="text-[18px] text-[#1C5067]">Selengkapnya</a>
                </div>
            </div>
        </div>
    )
}

const Content = () => {
    return(
        <div>
            <Judul />
            <div className="grid grid-cols-3">
                <Card title = "Politeknik Caltex Laksanakan Kegiatan Workshop" />
                <Card title = "Pengumuman Penerima Beasiswa Provinsi Riau" />
                <Card title = "Prof.Hendriko menjadi Guru Besar Pertama di PCR University" />
            </div>
        </div>
    )
}

export default Content;