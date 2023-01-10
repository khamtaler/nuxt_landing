<template>
	<section class="homepageHeader">
		<Header />
		<div class="homepageHeader__container">
			<div class="homepageHeader__textSection">
				<h1 class="homepageHeader__mainHeader">Product Design Course</h1>
				<h2
					class="homepageHeader__secondaryHeader"
					:style="{ backgroundImage: `url(${productDesignSectionImg})` }"
				>
					Product Factory
				</h2>
				<p class="homepageHeader__paragraph">
					Learn how design thinking, user research, <br />
					business vision and marketing, and finally designing and creating real digital products
					for real users.
				</p>
				<button type="button" class="button button__register">Start Register</button>
			</div>

			<img class="homepageHeader__image" src="../assets/images/kiauxcourse.png" />
		</div>
	</section>
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
.homepageHeader {
	height: 780px;
	margin: auto;
	position: relative;
	background: #111111;

	&__container {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		gap: 5%;
		top: 159px;
		left: 50%;
		transform: translateX(-50%);
		max-width: 1460px;
		height: 788px;
		margin: auto;
		padding: 0px 5%;
		background: #fff;
		width: 100%;
		border-radius: 30px;
	}
	&__textSection {
		width: 45%;
	}
	&__image {
		width: 40%;
	}

	&__mainHeader {
		font-size: 50px;
		line-height: 61px;
	}
	&__secondaryHeader {
		font-size: 38px;
		line-height: 51px;
		font-weight: 400;
		color: #8d8d8d;
		padding: 20px 0px 80px 0px;
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	&__paragraph {
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
}

@media only screen and (max-width: 1460px) {
	.homepageHeader {
		&__container {
			max-width: 1200px;
		}
	}
}
@media only screen and (max-width: 1240px) {
	.homepageHeader {
		&__container {
			max-width: 1000px;
			width: 90%;
			padding: 20px;
			margin: auto;
		}
	}
	.button__register {
		width: 100%;
	}
}
@media only screen and (max-width: 1040px) {
	.homepageHeader {
		&__container {
			height: unset;
		}
	}
}
@media only screen and (max-width: 768px) {
	.homepageHeader {
		&__container {
			flex-direction: column;
		}
		&__mainHeader {
			font-size: 38px;
			line-height: 55px;
		}
		&__secondaryHeader {
			font-size: 28px;
			line-height: 42px;
		}
		&__paragraph {
			font-size: 18px;
			line-height: 35px;
		}
		&__textSection {
			width: 90%;
		}
		&__image {
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
