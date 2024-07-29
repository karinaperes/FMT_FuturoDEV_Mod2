import './Home.css'
import Hero from "../../components/Hero/Hero"
import Header from "../../components/Header/Header"
import CategoriaProduto from "../../components/CategoriaProduto/CategoriaProduto"
import PopupModal from '../../components/Modal/Modal'

function Home() {
    const CATEGORIAS = [
        {
            id: 1,
            texto: "Ofertas",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75",
        },
        {
            id: 2,
            texto: "Cervejas",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_cervejas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 3,
            texto: "Águas e Gelo",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_gelo_e_agua_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
      
        {
            id: 4,
            texto: "Refrigerantes",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 5,
            texto: "Chopp",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75",
        },
        {
            id: 6,
            texto: "Churrasco",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_churrasco_v2_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 7,
            texto: "Mercearia",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_mercearia_v3.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 8,
            texto: "Beats e Ice",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fdrinks-prontos.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 9,
            texto: "Vinhos",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 10,
            texto: "Petiscos",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_petiscos_v3_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 11,
            texto: "Destilados",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_destilados_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 12,
            texto: "Bomboniere",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_bomboniere_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 13,
            texto: "Conveniência",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_conveniencia_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        },
        {
            id: 14,
            texto: "Novidades",
            imagem:
              "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_novidades_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
        }        
    ]

    return (
        <>  
            <PopupModal/>              
            <Header></Header>

            <div className='flex-column'>
                <Hero></Hero>
                <div className="categorias-container">
                    <div className="lista-categorias gap-10">
                        {CATEGORIAS.map((categoria) => (
                            <CategoriaProduto key={categoria.id} texto={categoria.texto} imagem={categoria.imagem}/>
                        ))}
                    </div>
                </div>
            </div>           
            
            

        </>
    )
}

export default Home
