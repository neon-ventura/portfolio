import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Neon Ventura</h1>
          <Image src={'/profile-me.jpeg'} height={180} width={180}/>
        <div className={styles.about_me}>
          <div className={styles.text}>
            <p className={styles.p_about}>
              Olá! <br /> Meu nome é <p className={styles.strong}>Neon Ventura</p>, sou um desenvolvedor apaixonado por tecnologia e inovação.
            </p>
            <p className={styles.p_about}>
              Meu objetivo é criar <p className={styles.strong}>soluções criativas</p>, funcionais e eficientes, transformando ideias em projetos reais que possam impactar positivamente o mundo. Acredito que a tecnologia é uma <p className={styles.strong}>ferramenta poderosa</p> para resolver problemas e conectar pessoas, e é isso que me motiva a sempre aprender e evoluir como desenvolvedor.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
