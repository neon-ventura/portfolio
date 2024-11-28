"use client"
import TypingEffect from '@/components/TypingEffect';
import styles from './page.module.css';
import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    })
  },[])

  return (
    <>
      <header>
        <h1 className={styles.title}>
          <TypingEffect />
        </h1>
        <div className={styles.about_me}>
          <Image className={styles.profile_img} src={'/profile-me.jpeg'} height={180} width={180} />
          <div data-aos="fade-right" className={styles.text}>
            <p className={styles.p_about}>
              Olá! <br /> Meu nome é <p className={styles.strong}>Neon Ventura</p>, sou um desenvolvedor apaixonado por tecnologia e inovação.
            </p>
            <p className={styles.p_about}>
              Meu objetivo é criar <p className={styles.strong}>soluções criativas</p>, funcionais e eficientes, transformando ideias em projetos reais que possam impactar positivamente o mundo. Acredito que a tecnologia é uma <p className={styles.strong}>ferramenta poderosa</p> para resolver problemas e conectar pessoas, e é isso que me motiva a sempre aprender e evoluir como desenvolvedor.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className={styles.contact}>
          <h2 className={styles.information_title}>Contato</h2>
          <div className={styles.social_media}>
            <Image src={'/social/social.png'} height={30} width={30} />
            <p className={styles.p_social}>neonventura@gmail.com</p>
            <Image src={'/social/linkedin.png'} height={30} width={30} />
            <p className={styles.p_social}>linkedin.com/in/neon-ventura</p>
            <Image src={'/social/telefone.png'} height={30} width={30} />
            <p className={styles.p_social}>(33)98728-9728</p>
            <Image src={'/social/ig.png'} height={30} width={30} />
            <p className={styles.p_social}>neon_svt</p>
          </div>
        </div>

        <div className={styles.skills}>
          <h2 className={styles.information_title}>Habilidades Técnicas</h2>
          <div data-aos="fade-up" className={styles.technical_img}>
            <div>
              <Image className={styles.skill_img} src={"/skills/react.webp"} height={80} width={80} />
              <Image className={styles.skill_img} src={"/skills/nextjs.svg"} height={80} width={80} />
              <Image className={styles.skill_img} src={"/skills/css.png"} height={80} width={80} />
            </div>
            <div>
              <Image className={styles.skill_img} src={"/skills/node.webp"} height={80} width={80} />
              <Image className={styles.skill_img} src={"/skills/mysql.png"} height={80} width={80} />
              <Image className={styles.skill_img} src={"/skills/java.png"} height={80} width={80} />
            </div>
          </div>

          <div data-aos="fade-up" className={styles.soft_skills}>
            <h2 className={styles.information_title}>Soft Skills</h2>
            <p className={styles.p_soft}>Resolução de Problemas</p>
            <p className={styles.p_soft}>Trabalho em Equipe</p>
            <p className={styles.p_soft}>Comunicação Eficaz</p>
            <p className={styles.p_soft}>Autodidatismo</p>
          </div>

          <div data-aos="fade-up" className={styles.languages}>
            <h2 className={styles.information_title}>Idiomas</h2>
            <p className={styles.p_languages}>Português - Nativo</p>
            <p className={styles.p_languages}>Inglês - Pré Intermediario</p>
          </div>

        </div>
          <div className={styles.projects}>
            <h2 className={styles.information_title}>Projetos</h2>
            <div className={styles.cards_group}>
                <a data-aos="zoom-out" href="https://construcy.vercel.app/">
                  <div className={styles.card}>
                    <Image src={"/projects/construcy.png"} height={460} width={250}/>
                    <p className={styles.p_card}>Construtora Construcy <br />(PC / Mobile)</p>
                  </div>
                </a>
                <a data-aos="zoom-out" href="https://flor-de-jua.vercel.app/">
                  <div className={styles.card}>
                    <Image src={"/projects/flor.png"} height={460} width={250}/>
                    <p className={styles.p_card}>Restaurante Flor de juá <br /> (Mobile)</p>
                  </div>
                </a>
            </div>
          </div>
      </header>
    </>
  );
}
