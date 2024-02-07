import InfoCard from "@/components/InfoCard";
import info from '@/utils/info.json';

export const metadata = {
  title: 'Información'
}

const page = () => {

  const breastCancerInfo = info; 

  
  return (
    <div>
      {
        breastCancerInfo?.map((obj, i) => <InfoCard id={obj.id} q={obj.question} a={obj.answer} key={i}/>)
      }
    </div>
  )
}

export default page
