import InfoCard from "@/components/InfoCard";
import info from '@/utils/info.json';
import styles from '@/styles/infoCard.module.css'

export const metadata = {
  title: 'Información'
}

const page = () => {

  const breastCancerInfo = info; 

  
  return (
    <div className={styles.InfoCardMainContainer}>
      {
        breastCancerInfo?.map((obj, i) => <InfoCard id={obj.id} q={obj.question} a={obj.answer} key={i}/>)
      }
    </div>
  )
}

export default page
