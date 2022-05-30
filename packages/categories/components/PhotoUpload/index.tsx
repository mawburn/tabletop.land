import { PhotographIcon } from '@heroicons/react/outline'

import Required from '../Required'
import styles from './styles.module.css'

interface PhotoUploadProps {}

const PhotoUpload = ({}: PhotoUploadProps) => (
  <div className={styles.container}>
    <PhotographIcon className="h-10 w-10 opacity-70" />
    <div className="text-xl font-bold">
      Add photos <Required />
    </div>
    <p className="italic opacity-70">
      Upload eye catching photos that show the product from many angles
    </p>
    <p className="italic opacity-70">Minimum size 1080px by 1080px.</p>
  </div>
)

export default PhotoUpload
