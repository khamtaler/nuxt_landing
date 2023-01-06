<template>
	<main class="mainContainer">
		<section class="intro">
			<Navbar />
			<div class="container intro__inner">
				<div class="intro__inner--left">
					<h1>Product Design Course</h1>
					<h2 :style="{ backgroundImage: `url(${productDesignSectionImg})` }">Product Factory</h2>
					<p>
						Learn how design thinking, user research, <br />
						business vision and marketing, and finally designing and creating real digital products
						for real users.
					</p>
					<button class="button button__register">Start Register</button>
				</div>
				<div class="intro__inner--right">
					<img src="../assets/images/kia ux course.png" />
				</div>
			</div>
		</section>
		<section class="courseExperience">
			<div class="container courseExperience__inner">
				<h3 :style="{ backgroundImage: `url(${courseExperience})` }">Course Experience</h3>
				<Tabs :tabList="tabList" class="tabs">
					<template v-slot:tabPanel-1>
						<div class="tabs__content">
							<img src="../assets/images/Group 468.png" />
							<div>
								<p>
									This course has been attempted by zero people who are eager to learn product
									design, especially user experience and user interface, so it is not a
									prerequisite, but due to the limited capacity of the priority course with early
									enrolled people, others can participate in future courses. .<br />
									 Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as
									well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,
								</p>
							</div>
						</div></template
					>
					<template v-slot:tabPanel-2>
						<div class="tabs__content">
							<div>
								<p>
									This course has been attempted by zero people who are eager to learn product
									design, especially user experience and user interface, so it is not a
									prerequisite, but due to the limited capacity of the priority course with early
									enrolled people, others can participate in future courses. . <br /> Obviously, the
									ability to use tools like Adobe Photoshop and Adobe Illustrator as well as
									Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,
								</p>
							</div>
							<img src="../assets/images/Group 468.png" /></div
					></template>
					<template v-slot:tabPanel-3>
						<div class="tabs__content">
							<img src="../assets/images/Group 468.png" />
							<div>
								<p>
									This course has been attempted by zero people who are eager to learn product
									design, especially user experience and user interface, so it is not a
									prerequisite, but due to the limited capacity of the priority course with early
									enrolled people, others can participate in future courses. .<br />
									 Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as
									well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,
								</p>
							</div>
						</div>
					</template>
				</Tabs>
			</div>
		</section>
	</main>
</template>

<script>
import productDesignSectionImg from '~/assets/images/UIUX.png';
import courseExperience from '~/assets/images/Experience.png';
import Tabs from '../components/Tabs';

export default {
	components: {
		Tabs,
	},

	data() {
		return {
			productDesignSectionImg,
			courseExperience,
			tabList: ['After attending the course', 'During the period', 'Before attending the course'],
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	max-width: 1460px;
	margin: auto;
	background: #fff;
	width: 100%;
	border-radius: 30px;
}
.intro {
	height: 780px;
	margin: auto;
	position: relative;
	background: #111111;

	&__inner {
		height: 788px;
		position: absolute;
		top: 159px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #fff;

		div {
			width: 42%;
		}
		img {
			width: 100%;
		}
	}

	h1 {
		font-size: 50px;
		line-height: 67px;
		font-family: 'Product Sans';
	}
	h2 {
		font-size: 38px;
		line-height: 51px;
		color: #8d8d8d;
		padding: 20px 0px 80px 0px;
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	p {
		font-size: 23px;
		line-height: 55px;
	}
}

.button__register {
	width: 390px;
	height: 72px;
	margin-top: 50px;
	color: #fff;
	text-align: center;
	font-size: 24px;
	font-weight: 700;
	line-height: 32px;
	background: $orange;
	border: none;
	border-radius: 16px;
}

.courseExperience {
	padding-top: 200px;
	background: #fafafa;
	&__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 20px;
	}
	h3 {
		display: inline-block;
		text-align: center;
		font-size: 32px;
		line-height: 43px;
		padding: 70px 169px 44px;
		font-weight: 700px;
		color: #000;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.tabs {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin-top: 50px;
		&__content {
			display: flex;
			width: 85%;
			gap: 3%;
			align-items: center;
			justify-content: space-around;
			margin: 50px auto;

			img {
				width: 100%;
				max-width: 26%;
				height: auto;
			}
			div {
				width: 60%;
			}
			p {
				font-size: 20px;
				line-height: 48px;
			}
		}
	}
}

@media only screen and (max-width: 1200px) {
	.introContainer__inner {
		max-width: 1000px;
	}
}
</style>
