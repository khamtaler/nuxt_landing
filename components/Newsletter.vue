<template>
	<section class="newsletter" :style="{ backgroundImage: `url(${requestHeadingsImg})` }">
		<div class="newsletter__container">
			<div class="newsletter__text">
				<h3 class="newsletter__header">Request a list of headings</h3>
				<p class="newsletter__paragraph">
					Please enter your email address to receive course titles, the topics will be emailed to
					you.
				</p>
				<input class="newsletter__emailInput" type="email" placeholder="email" />
			</div>
			<p class="newsletter__confirmation">
				<img
					class="newsletter__confirmationIcon"
					src="../assets/images/acceptanceIcon.svg"
					alt=""
				/>
				Your email has been successfully registered, headlines will be sent to you soon.
			</p>
		</div>
	</section>
</template>

<script>
import requestHeadingsImg from '~/assets/images/NewsletterBg.png';
export default {
	data() {
		return {
			requestHeadingsImg,
		};
	},
};
</script>

<style lang="scss" scoped>
.newsletter {
	background-color: #000;
	background: #000;
	background-position: 90%;
	background-repeat: no-repeat;
	background-size: 40%;
	margin-top: 100px;
	padding: 130px 0px;

	&__container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: left;
		max-width: 1460px;
		margin: auto;
		width: 100%;
		border-radius: 30px;
		color: #fff;
	}
	&__text {
		width: 557.5px;
	}
	&__header {
		font-size: 34px;
		line-height: 46px;
	}
	&__paragraph {
		font-size: 20px;
		line-height: 40px;
		margin: 15px 0px 25px;
	}
	&__emailInput {
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
	&__confirmation {
		margin-top: 50px;
		color: #acacac;
	}
	&__confirmationIcon {
		width: 27px;
		height: 27px;
		margin-bottom: -5px;
	}
}
@media only screen and (max-width: 1460px) {
	.newsletter {
		&__container {
			max-width: 1200px;
		}
	}
}
@media only screen and (max-width: 1240px) {
	.newsletter {
		&__container {
			max-width: 1000px;
			width: 90%;
		}
	}
}
@media only screen and (max-width: 768px) {
	.newsletter {
		&__text {
			width: 90%;
			margin: auto;
		}
	}
}
</style>
