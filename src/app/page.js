import Feedback from '@/Components/Feedback'
import GetInTouch from '@/Components/GetInTouch'
import GoogleRedesign from '@/Components/GoogleRedesign'
import Header from '@/Components/Header'
import LetestProjects from '@/Components/LetestProjects'
import OurClient from '@/Components/OurClient'
import OurTeam from '@/Components/OurTeam'
import Services from '@/Components/Services'
import SlientSeller from '@/Components/SlientSeller'
import SteepProcess from '@/Components/SteepProcess'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <OurTeam/>
      <SlientSeller/>
      <LetestProjects/>
      <SteepProcess/>
      <GoogleRedesign/>
      <Feedback/>
      <GetInTouch/>
      <OurClient/>
    </div>
  )
}

export default HomePage