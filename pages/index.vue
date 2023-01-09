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
					<button type="button" class="button button__register">Start Register</button>
				</div>
				<div class="intro__inner--right">
					<img src="../assets/images/kiauxcourse.png" />
				</div>
			</div>
		</section>
		<section class="courseExperience">
			<div class="container courseExperience__inner">
				<h3 :style="{ backgroundImage: `url(${courseExperienceImg})` }">Course Experience</h3>
				<Tabs :tabList="tabList" class="tabs">
					<template v-slot:tabPanel-1>
						<div class="tabs__content">
							<img src="../assets/images/productFactory.png" />
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
							<img src="../assets/images/productFactory.png" /></div
					></template>
					<template v-slot:tabPanel-3>
						<div class="tabs__content">
							<img src="../assets/images/productFactory.png" />
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
		<section :style="{ backgroundImage: `url(${requestHeadingsImg})` }" class="requestHeadings">
			<div class="container requestHeadings__inner">
				<div>
					<h3>Request a list of headings</h3>
					<p>
						Please enter your email address to receive course titles, the topics will be emailed to
						you.
					</p>
					<input id="NewsletterInput" type="email" placeholder="email" />
				</div>
				<p class="gray">
					<img src="../assets/images/acceptanceIcon.svg" alt="" /> Your email has been successfully
					registered, headlines will be sent to you soon.
				</p>
			</div>
		</section>
	</main>
</template>

<script>
import productDesignSectionImg from '~/assets/images/UIUX.png';
import courseExperienceImg from '~/assets/images/Experience.png';
import requestHeadingsImg from '~/assets/images/NewsletterBg.png';
import Tabs from '../components/Tabs';

export default {
	components: {
		Tabs,
	},

	data() {
		return {
			productDesignSectionImg,
			courseExperienceImg,
			requestHeadingsImg,
			tabList: ['After attending the course', 'During the period', 'Before attending the course'],
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
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
		background: #fff;
		gap: 5%;
		div {
			width: 40%;
		}
		img {
			width: 100%;
		}
	}

	h1 {
		font-size: 50px;
		line-height: 61px;
	}
	h2 {
		font-size: 38px;
		line-height: 51px;
		font-weight: 400;
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
	line-height: 32px;
	font-weight: 700;
	background: $orange;
	border: none;
	border-radius: 16px;
	&:hover {
		cursor: pointer;
	}
}

.courseExperience {
	padding-top: 200px;
	padding-bottom: 50px;
	background: #fafafa;
	&__inner {
		flex-direction: column;
		padding-top: 20px;
	}
	h3 {
		display: inline-block;
		text-align: center;
		font-size: 32px;
		line-height: 43px;
		padding: 82px 183px 48px;
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
			align-items: center;
			justify-content: space-around;
			width: 85%;
			gap: 3%;

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

.requestHeadings {
	background-color: #000;
	background: #000;
	background-position: 90%;
	background-repeat: no-repeat;
	background-size: 40%;
	margin-top: 100px;
	padding: 130px 0px;
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: left;
		background: unset;
		color: #fff;
	}
	&__inner div {
		width: 557.5px;
	}
	h3 {
		font-size: 34px;
		line-height: 46px;
	}
	p {
		font-size: 20px;
		line-height: 40px;
		margin: 15px 0px 25px;
	}
	input {
		width: 100%;
		height: 62px;
		background: rgba(255, 255, 255, 0.15);
		border: none;
		border-radius: 16px;
		font-size: 22px;
		line-height: 30px;
		padding: 0px 30px;
		color: #fff;
		&:focus-visible {
			border: none;
			outline: none;
		}
	}
	img {
		width: 27px;
		height: 27px;
		margin-bottom: -5px;
	}
	p.gray {
		margin-top: 50px;
		color: #acacac;
	}
}

@media only screen and (max-width: 1490px) {
	.container {
		max-width: 1200px;
	}
}
@media only screen and (max-width: 1240px) {
	.container {
		max-width: 1000px;
		width: 90%;
	}
	.intro {
		&__inner {
			padding: 20px;
		}
	}
	.courseExperience {
		padding-top: 300px;
	}
	.button__register {
		width: 100%;
	}
}
@media only screen and (max-width: 1040px) {
	.container {
		max-width: 90%;
		margin: auto;
	}
	.intro {
		&__inner {
			height: unset;
		}
	}
}
@media only screen and (max-width: 768px) {
	.container {
		flex-direction: column;
	}
	.intro {
		&__inner {
			div {
				width: 90%;
			}
			h1 {
				font-size: 38px;
				line-height: 55px;
			}
			h2 {
				font-size: 28px;
				line-height: 42px;
			}
			p {
				font-size: 18px;
				line-height: 35px;
			}
		}
		img {
			display: block;
			width: 60%;
			margin: 30px auto;
		}
		.button__register {
			display: block;
			margin: 20px auto;
		}
	}
	.courseExperience {
		.tabs {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			margin-top: 50px;
			&__content {
				flex-direction: column;
				img {
					display: block;
					width: 60%;
					max-width: unset;
					margin: 0px auto 30px auto;
				}
				div {
					width: 90%;
					margin: auto;
				}
				p {
					line-height: 35px;
				}
			}
		}
		h3 {
			padding: 40px 50px 20px;
		}
	}
	.requestHeadings {
		&__inner div {
			width: 90%;
			margin: auto;
		}
	}
}
@media only screen and (max-width: 600px) {
	.courseExperience {
		h3 {
			padding: 30px 40px 20px;
		}
	}
}
@media only screen and (max-width: 400px) {
	.courseExperience {
		h3 {
			padding: 15px 0px 11px;
		}
	}
}
</style>
