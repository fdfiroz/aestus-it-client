import { Button, Typography } from "@material-tailwind/react"

const MeetingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 justify-center items-center h-96 bg-blue-600 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="">
      <div className="w-28 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full" />
        <Typography className="gradient-to-r from-white to-gray-400 mt-2" variant="h3" color="white">Book A Free Digital <br />Marketing Consultation</Typography>
      </div>
      <div className="flex flex-col gap-6 md:w-4/5">
        <input  placeholder="Your Email" type="email"   className="h-9 placeholder:px-2 px-2 rounded-full placeholder-gray-500 bg-white"/>
        <Button variant="gradient" className="rounded-full"   color="blue">Book my free meeting</Button>
      </div>
    </div>
  )
}

export default MeetingSection