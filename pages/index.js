import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'

export default function Home() {
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
					<div className={styles.cardLayout}>
					<Card
						name="Fit4U Gym"
						imgUrl="/static/background-1.jpg"
						href="/gyms-hub/fit4u-gym"
						className={styles.card}
					/>
					<Card
						name="Fit4U Gym"
						imgUrl="/static/background-1.jpg"
						href="/gyms-hub/fit4u-gym"
						className={styles.card}
					/>
					<Card
						name="Fit4U Gym"
						imgUrl="/static/background-1.jpg"
						href="/gyms-hub/fit4u-gym"
						className={styles.card}
					/>
					<Card
						name="Fit4U Gym"
						imgUrl="/static/background-1.jpg"
						href="/gyms-hub/fit4u-gym"
						className={styles.card}
					/>
				</div>
			</main>

		</div>
	)
}
