import { Button, Typography } from '@material-tailwind/react'
import cover from '../assets/Herocover.svg'
import bgwave from '../assets/Wave.svg' 
import Container from '../components/Containar/Container'
const Home = () => {
  return (

    <div  style={{backgroundImage: `url(${bgwave})`}} >
      <Container>
      <div className="grid grid-row md:grid-cols-2 justify-items-center items-center h-screen">
      <div>
      <Typography variant="h1" className="text-black font-bold">We help you grow<br/>your <span className="text-blue-600 ">conversions.</span></Typography>
      <Typography variant="small" className="opacity-80 text-black my-5 leading-3">Featured in leading publications around the world</Typography>
      <Button color='blue'>Contact Us</Button>
      </div>
      <div className=' hidden md:block'>
        <img className='h-[32rem] -mt-28' src={cover} alt="Cover" />
      </div>
      </div>
      </Container>
    </div>
    

  )
}

export default Home