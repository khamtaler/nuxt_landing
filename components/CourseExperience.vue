<template>
	<section class="courseExperience">
		<div class="courseExperience__container">
			<h3
				class="courseExperience__header"
				:style="{ backgroundImage: `url(${courseExperienceImg})` }"
			>
				Course Experience
			</h3>
			<Tabs :tabList="tabList" class="courseExperienceTabs">
				<template v-slot:tabPanel-1>
					<div class="courseExperienceTabs__tab">
						<img class="courseExperienceTabs__tabImage" src="../assets/images/productFactory.png" />

						<p class="courseExperienceTabs__tabParagraph">
							This course has been attempted by zero people who are eager to learn product design,
							especially user experience and user interface, so it is not a prerequisite, but due to
							the limited capacity of the priority course with early enrolled people, others can
							participate in future courses. .<br />
							 Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as
							well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,
						</p>
					</div></template
				>
				<template v-slot:tabPanel-2>
					<div class="courseExperienceTabs__tab">
						<p class="courseExperienceTabs__tabParagraph">
							This course has been attempted by zero people who are eager to learn product design,
							especially user experience and user interface, so it is not a prerequisite, but due to
							the limited capacity of the priority course with early enrolled people, others can
							participate in future courses. . <br /> Obviously, the ability to use tools like Adobe
							Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course
							a lot of enthusiasm and energy,
						</p>

						<img
							class="courseExperienceTabs__tabImage"
							src="../assets/images/productFactory.png"
						/></div
				></template>
				<template v-slot:tabPanel-3>
					<div class="courseExperienceTabs__tab">
						<img class="courseExperienceTabs__tabImage" src="../assets/images/productFactory.png" />

						<p class="courseExperienceTabs__tabParagraph">
							This course has been attempted by zero people who are eager to learn product design,
							especially user experience and user interface, so it is not a prerequisite, but due to
							the limited capacity of the priority course with early enrolled people, others can
							participate in future courses. .<br />
							 Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as
							well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,
						</p>
					</div>
				</template>
			</Tabs>
		</div>
	</section>
</template>

<script>
import courseExperienceImg from '~/assets/images/Experience.png';
import Tabs from './Tabs';

export default {
	components: {
		Tabs,
	},

	data() {
		return {
			courseExperienceImg,
			tabList: ['After attending the course', 'During the period', 'Before attending the course'],
		};
	},
};
</script>

<style lang="scss" scoped>
.courseExperience {
	padding-top: 200px;
	padding-bottom: 50px;
	background: #fafafa;
	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 1460px;
		margin: auto;
		background: #fff;
		width: 100%;
		border-radius: 30px;
		padding-top: 20px;
	}
	&__header {
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
}
.courseExperienceTabs {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top: 50px;
	&__tab {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 85%;
		gap: 3%;

		margin: 50px auto;
	}
	&__tabImage {
		width: 100%;
		max-width: 26%;
		height: auto;
	}
	&__tabParagraph {
		font-size: 20px;
		line-height: 48px;
		width: 60%;
	}
}

@media only screen and (max-width: 1460px) {
	.courseExperience {
		&__container {
			max-width: 1200px;
		}
	}
}
@media only screen and (max-width: 1240px) {
	.courseExperience {
		&__container {
			max-width: 1000px;
			width: 90%;
		}
	}
}
@media only screen and (max-width: 1000px) {
	.courseExperience {
		padding-top: 300px;
	}
}

@media only screen and (max-width: 768px) {
	.courseExperience {
		&__header {
			padding: 40px 50px 20px;
		}
	}
	.courseExperienceTabs {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin-top: 50px;
		&__tab {
			flex-direction: column;
		}
		&__tabImage {
			display: block;
			width: 60%;
			max-width: unset;
			margin: 0px auto 30px auto;
		}
		&__tabParagraph {
			width: 90%;
			margin: auto;
			line-height: 35px;
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
