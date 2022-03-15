import styled from 'styled-components'
import { cards } from './components/Card/cards'
import Card from './components/Card/Card.jsx'
import Nav from './components/Nav/Nav.jsx'

function App () {
  return (
    <>
      <div className='bg-[#19EE80] flex flex-col items-center'>
        <Content>
          <Header>
            <Nav />

            <section className='flex justify-between items-center py-10'>
              <div className='w-80'>
                <h1 className='text-5xl font-extrabold'>Recibelo con un QR</h1>
                <p className='my-4'>
                  Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Eligendi voluptatum
                </p>
                <button className='bg-gray-800 w-40 py-2 text-white'>Entra aca</button>
              </div>

              <Image src='/codeQR.svg' alt='codeQR' />
            </section>
          </Header>

        </Content>
      </div>

      <div className='flex flex-col items-center'>
        <Content>
          <h1 className='text-center my-20 font-semilight text-2xl'>Sea cual sea la ocasion, obtenga su regalo!</h1>

          <div className='flex justify-between space-x-20 mb-20'>
            {
              cards.map(element => (
                <Card cards={element} key={element.id} />
              ))
            }
          </div>
        </Content>
      </div>

      <div className='bg-[#1639F8] flex justify-center items-center'>
        <Content className='flex py-20'>

          <div>
            <iframe
              className='rounded'
              width='420'
              height='315'
              src='https://www.youtube.com/embed/s_xiDRRDZYc'
              controls='0'
            />
          </div>
          <div className='p-10 bg-[#1BC36E] text-white'>
            <h2 className='font-extrabold text-2xl mb-10 w-96'>Dé vida a sus regalos y tarjetas con un Regalo! </h2>
            <p className='font-semilight text-lg font-serif'>LiveGift te permite adjuntar mensajes de vídeo a códigos QR, que puedes imprimir y poner en cualquier cosa,
              ya sea una tarjeta de felicitación, una bolsa de café colombiano de tus vacaciones o
              una botella de vino que acabas de comprar en la tienda local. Sea lo que sea, Un regalo le da vida.
            </p>
          </div>
        </Content>
      </div>

      <div className='flex justify-center items-center'>
        <div className='py-20'>
          <h1 className='text-center mt-10 font-bold text-2xl'>Tres sencillos pasos para crear su Regalo</h1>

          <div className='flex my-20 max-w-7xl space-x-10 text-lg'>
            <div>
              <img src='/step1.png' alt='step1' width={400} />
              <p className='w-96 font-semibold text-center mt-10'>1. La App genera un código QR único que puedes pedir como pegatinas o imprimir.</p>
            </div>

            <div>
              <img src='/step2.png' alt='step2' width={400} />
              <p className='w-96 font-semibold text-center mt-10'>2. Sube tu vídeo y completa tu Regalo.</p>
            </div>

            <div>
              <img src='/step3.png' alt='step3' width={400} />
              <p className='w-96 font-semibold text-center mt-10'>3. Adjunta tu código QR a tu tarjeta o regalo y sorprende a tus amigos y seres queridos.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Header = styled.header``

const Content = styled.div`
  width: 80rem;
  max-width: 80rem;
  margin: auto;
`

const Image = styled.img`
  width: 25rem;
`

export default App
