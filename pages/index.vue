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
				<div>
					<img src="../assets/images/kia ux course.png" />
				</div>
			</div>
		</section>
		<section class="courseExperience">
			<div class="container courseExperience__inner">
				<h3 :style="{ backgroundImage: `url(${courseExperience})` }">Course Experience</h3>
			</div>
		</section>
	</main>
</template>

<script>
import productDesignSectionImg from '~/assets/images/UIUX.png';
import courseExperience from '~/assets/images/Experience.png';
export default {
	data() {
		return { productDesignSectionImg, courseExperience };
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
		align-items: center;
		justify-content: center;
		padding-top: 20px;
	}
	h3 {
		display: inline-block;
		text-align: center;
		font-size: 32px;
		line-height: 43px;
		padding: 66px 169px 50px;
		font-weight: 700px;
		color: #000;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
}

@media only screen and (max-width: 1200px) {
	.introContainer__inner {
		max-width: 1000px;
	}
}
</style>
