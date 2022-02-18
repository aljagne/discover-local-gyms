import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import gymsHub from '../data/gyms-hub.json'

export async function getStaticProps(context) {
    return {
        props: {
            gymsHub,
        }, //will be passed to the page component as props
    };
}

export default function Home(props) {

	const handleOnBannerBtnClick = () => {
		console.log("hi banner Btn");
	}
	return (
		<div className={styles.container}>
			<Head>
				<title>Gym Enthusiast</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner buttonText="View gyms nearby!"
				handleOnClick={handleOnBannerBtnClick}
				/>
				<div className={styles.heroImage}>
				<Image
					src="/static/Hero-Background.png"
					alt="hero Image"
					width={700} height={500}
				/>
				</div>
                {gymsHub.length > 0 && <div> 
                    <h2 className={styles.heading2}>Marrakech Gyms</h2>
					<div className={styles.cardLayout}>
                        {props.gymsHub.map((gymsHub) => {
                            return (
					            <Card
                                    key={gymsHub.id}
						            name={gymsHub.name}
						            imgUrl={gymsHub.imgUrl}
                                    href={`/gyms-hub/${gymsHub.id}`}
						            //className={styles.card}
					            />
                            );
                        })}
				    </div>
                </div>
                }
			</main>

		</div>
	)
}
