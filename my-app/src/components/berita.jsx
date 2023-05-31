import useSWR from 'swr'

const Card = (props) => {
    return (
        <div className="px-[40px] mt-[99px]">
            <div className="">
                <img src={"http://localhost:8000/storage/posts/" +props.img} alt="berita1" className=""/>
            </div>
            <div className="mt-[47px]">
                <p className="text-[#0A093D] text-[32px] font-semibold">{props.title}</p>
                <p className="mt-[32px] text-[18px] text-[#656464]">{props.content}</p>
                <div className="mt-[32px] ">
                    <a href="" className="text-[18px] text-[#1C5067]">Selengkapnya</a>
                </div>
            </div>
        </div>
    )
}

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
const CardPegawai = (props) => {
    return(
        <div className="px-[40px] mt-[99px]">
            <div className="mt-[47px]">
                <p className="text-[#0A093D] text-[32px] font-semibold">{props.name}</p>
                <p className="mt-[32px] text-[18px] text-[#656464]">{props.position}</p>
                <p className="mt-[32px] text-[18px] text-[#656464]">{props.level}</p>
                <div className="mt-[32px] ">
                    <a href="" className="text-[18px] text-[#1C5067]">Selengkapnya</a>
                </div>
            </div>
        </div>
    )
}
const Pegawai = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data , error} = useSWR("http://127.0.0.1:5000/record", fetcher);
    if(error) return <div>failed to load</div>
    if(!data) return <div>Loading....</div>
    const list_data = data.data
    console.log(list_data)
    return (
        <div className="container mx-auto mt-20">
            <p className='text-2xl'>Data Pegawai</p>
            <div className=" mt-5 grid grid-cols-3">
            {list_data.map((val) => {
                return(
                    <CardPegawai
                    name={val.name}
                    position={val.position}
                    level={val.level}
                    />
                )
            })}
            </div>
        </div>
        
    )
}

const Berita = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data , error} = useSWR("http://127.0.0.1:8000/api/posts", fetcher);
    if(error) return <div>failed to load</div>
    if(!data) return <div>Loading....</div>
    const list_data = data.data.data
    console.log(list_data)

    return (
        <div className="container mx-auto">
            <Judul />
            <div className="grid grid-cols-3">
            {list_data.map((val) => {
                return(
                    <Card
                    image={val.image}
                    title={val.title}
                    content={val.contet}
                    />
                )
            })}
            </div>
        </div>
    )
}

const Tes = () => {
    return (
        <div>
            <Berita />
            <Pegawai />
        </div>
    )
}
export default Tes