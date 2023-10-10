<template>
  <main id="app">
    <SectionBlock sectionClass="intro" imageClass="introImage" descriptionClass="introDescription"
      :aosData="{ 'data-aos': 'zoom-in', 'data-aos-duration': '1500', 'data-aos-delay': '500' }" :imageSrc="picture1">
      <div>Dan ko sta mami in ati izvedela zame</div>
      <p>22.11.2022</p>
    </SectionBlock>


    <SectionBlock sectionClass="guide1" imageClass="guide1Image" descriptionClass="guide1Description" :imageSrc="picture2"
      :aosData="{
        'data-aos': 'slide-down',
        'data-aos-ease': 'ease',
        'data-aos-duration': '1500',
        'data-aos-delay': '500'
      }">
      <h1><br />23.11.2022</h1>
      <div>
        Mami seveda ni mogla verjeti,
        <br />
        zato je test ponovila... večkrat
        <br />
      </div>
    </SectionBlock>

    <SectionBlock sectionClass="intro" imageClass="introImage" descriptionClass="introDescription" :imageSrc="picture3"
      :aosData="{
        'data-aos': 'zoom-in',
        'data-aos-duration': '1500',
        'data-aos-delay': '500'
      }">
      <div>
        Mami je lahko naredila prvi noseščniški test
        <br />
        in ugotovila da sem star 2-3 tedna.
        <br />
      </div>
      <br />
      <p>24.11.2022</p>
    </SectionBlock>


    <SectionBlock sectionClass="guide1" imageClass="guide1Image" descriptionClass="guide1Description" :imageSrc="picture4"
      :aosData="{
        'data-aos': 'slide-down',
        'data-aos-ease': 'ease',
        'data-aos-duration': '1500',
        'data-aos-delay': '500'
      }">
      <h1><br />{{ moment().format("DD.MM.YYYY") }}</h1>
      <div>
        Zdaj ko si me spoznal/a, sem star
        <br />
        {{ calculateWeeks }} tednov, velik sem okoli 25cm in
        <br />
        tehtam okoli 300g.
        <br />
      </div>
    </SectionBlock>

    <SectionBlock sectionClass="guide2" imageClass="guide2Image" descriptionClass="guide2Description" :imageSrc="picture5"
      :aosData="{
        'data-aos': 'slide-down',
        'data-aos-ease': 'ease',
        'data-aos-duration': '1500',
        'data-aos-delay': '1000'
      }">
      <h1>21.2.2023 <br /></h1>
      <div>
        Dan ko sta mami
        <br />
        in ati izvedela, da sem fantek
      </div>
    </SectionBlock>
    <section class="guide1">
      <div class="guide1Description" data-aos="slide-up" data-aos-ease="ease" data-aos-duration="1500"
        data-aos-delay="1000">
        <h1>Pomagaj atiju in mamici izbrati moje ime<br /></h1>
        <div class="inputName">
          <InputName />
          <br />
        </div>
      </div>
    </section>
    <footer></footer>
  </main>
</template>
<script>
import moment from "moment";
import InputName from "./InputName.vue";
import SectionBlock from "./SectionBlock.vue";
import picture1 from '../images/picture1.jpg';
import picture2 from '../images/picture2.jpg';
import picture3 from '../images/picture3.jpg';
import picture4 from '../images/picture4.jpg';
import picture5 from '../images/picture5.jpg';
import picture6 from '../images/picture6.png';
export default {
  name: "BabyPictures",
  components: { InputName, SectionBlock },
  data() {
    return {
      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
      picture6,
    };
  },
  computed: {
    currentDate() {
      return moment().format("DD.MM.YYYY");
    },
    calculatedWeeks() {
      const date = moment("10.10.2022", "DD.MM.YYYY");
      const dateToday = moment();
      return dateToday.diff(date, "weeks");
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD,
    Georgia, serif;
  cursor: url("../images/picture6.png"), auto !important;
}

.intro {
  display: flex;
  background: lightblue;
  justify-content: space-evenly;
  padding-top: 6rem;
  padding-bottom: 6rem;
  height: 500px;
}

.introDescription {
  font-size: 30px;
  color: black;
  padding-top: 120px;
}

.introDescription p {
  font-size: 50px;
  color: black;
  font-weight: 900;
}

.guide1 {
  display: flex;
  background: whitesmoke;
  justify-content: space-evenly;
  padding-top: 4rem;
  padding-bottom: 4rem;
  height: 500px;
  overflow: hidden;
}

.guide1Image {
  box-shadow: 0.7rem 0.7rem 0rem grey;
  border: 4px solid grey;
}

/* Main text  brown  */
.guide1Description h1 {
  text-align: center;
  font-size: 50px;
  color: black;
  padding: 12px 0px 20px 0px;
}

/* description section brown */
.guide1Description div {
  font-size: 30px;
  background: lightblue;
  color: black;
  padding: 10px;
  border-radius: 10px;
}

.guide2 {
  background-color: lightblue;
  display: flex;
  justify-content: space-evenly;
  padding-top: 80px;
  padding-bottom: 4rem;
  height: 500px;
  overflow: hidden;
}

.guide2Description h1 {
  font-size: 50px;
  color: black;
  padding: 120px 0px 20px 0px;
}

.guide2Description div {
  background: white;
  color: black;
  font-size: 30px;
  padding: 10px;
  border-radius: 10px;
}

footer {
  background: #ffd4a9;
  color: black;
  padding: 10px;
  text-align: right;
  font-weight: 900;
}

.inputName {
  align-items: center;
  width: 450px;
  margin: 0 auto;
  align-items: center;
  box-shadow: 0.7rem 0.7rem 0rem grey !important;
  border: 4px solid grey !important;
}

input {
  background: lightblue;
  font-size: 30px;
  font-weight: 500;
  width: fit-content !important;
}

.introImage {
  box-shadow: 0.7rem 0.7rem 0rem grey;
  border: 4px solid grey;
}

.guide2Image {
  box-shadow: 0.7rem 0.7rem 0rem grey;
  border: 4px solid grey;
}

footer {
  background: lightblue;
}

/* responsiveness */
@media screen and (max-width: 500px) {
  .intro {
    display: block;
    padding-top: 10px;
    height: auto;
    padding: 1rem;
  }

  .introImage {
    width: 90%;
    margin-right: 1rem;
  }

  .introDescription {
    font-size: 30px;
    padding: 10px 0px 0px 20px;
  }

  .introDescription p {
    padding-bottom: 2rem;
    font-size: 40px;
    color: black;
    font-weight: 900;
  }

  .guide1 {
    display: block;
    padding-top: 10px;
    height: auto;
    padding: 1rem;
  }

  .guide1Image {
    width: 90%;
  }

  .guide1Description {
    padding: 20px;
    padding-bottom: 2rem !important;
  }

  .guide1Description h1 {
    padding-right: 0px;
    text-align: center;
    font-size: 40px;
    color: black;
    font-weight: 900;
    padding-bottom: 1rem;
    padding-top: 0rem;
  }

  .guide2 {
    display: block;
    padding-top: 10px;
    height: auto;
    padding: 3rem;
  }

  .guide2Image {
    width: 100%;
  }

  .guide2Description {
    padding-top: 0px !important;
    padding: 20px;
  }

  .guide2Description h1 {
    padding-top: 0rem;
    padding-bottom: 1rem;
    font-size: 40px;
  }

  .inputName {
    display: table-cell;
  }
}
</style>
