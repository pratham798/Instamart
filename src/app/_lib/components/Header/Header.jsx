import Image from 'next/image';
import BrandLogo from '@/app/_lib/assets/webp/instapayment.webp'
import styles from './Header.module.css';

export default function Header({HeaderTitle}) {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={BrandLogo} alt="brand_logo" />
      {HeaderTitle}
    </div>
  );
}
