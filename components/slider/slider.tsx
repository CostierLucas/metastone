import { useRef } from 'react'
import styles from './slider.module.scss'

const Slider = () => {
  const ref = useRef(null)

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer} ref={ref}>
        <img src="/img/stones/blue.gif" alt="stone" />
        <img src="./img/stones/pink.gif" alt="stone" />
        <img src="./img/stones/metallic_sand.gif" alt="stone" />
        <img src="./img/stones/zen_garden.gif" alt="stone" />
      </div>
    </div>
    // <div>
    //   <div className={styles.slider}>
    //     <img src="/img/stones/blue.gif" alt="stone" />
    //     <img src="./img/stones/pink.gif" alt="stone" />
    //     <img src="./img/stones/metallic_sand.gif" alt="stone" />
    //     <img src="./img/stones/zen_garden.gif" alt="stone" />
    //     <div className={styles.emptyImg}></div>
    //   </div>
    // </div>
  )
}

export default Slider
