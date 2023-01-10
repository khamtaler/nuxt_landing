<template>
	<main class="mainContainer">
		<section class="intro">
			<Header />
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
		<CourseExperience />
		<Newsletter />
	</main>
</template>

<script>
import productDesignSectionImg from '~/assets/images/UIUX.png';
import Tabs from '../components/Tabs';

export default {
	components: {
		Tabs,
	},

	data() {
		return {
			productDesignSectionImg,
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

@media only screen and (max-width: 1460px) {
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
}
</style>
