import { Button, Typography } from '@material-tailwind/react'
import cover from '../../assets/Herocover.svg'
import bgwave from '../../assets/Wave.svg' 

const Hero = () => {
  return (
    <div className="grid grid-row md:grid-cols-2 justify-center items-center bg-transparent bg-repeat-x  bg-top max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4" style={{backgroundImage: `url(${bgwave})`}}>
      
      <div className='md:w-4/5 text-center md:text-left'>
      <Typography variant="h1" className="text-black font-bold">We help you grow your <span className="text-blue-600 ">conversions.</span></Typography>
      <Typography variant="small" className="opacity-80 text-black my-5 leading-3">Featured in leading publications around the world</Typography>
      <Button variant="gradient" color='blue'>Contact Us</Button>
      </div>
      <div className='p-6 '>
        <img className='aspect-square object-cover object-center' src={cover} alt="Cover" />
      </div>
    </div>
  )
}

export default Hero