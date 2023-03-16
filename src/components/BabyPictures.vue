<template>
  <main id="app">
    <section class="intro">
      <div
        class="introDescription"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        Dan ko sta mami in ati izvedela zame
        <br />
        <p>22.11.2022</p>
      </div>
      <img class="introImage" :src="require('../images/picture1.jpg')" />
    </section>
    <section class="guide1">
      <img
        class="guide1Image"
        :src="require('../images/picture3.jpg')"
        alt="3d illustration of boy sitting with legs crossed"
        data-aos="slide-down"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      />
      <div
        class="guide1Description"
        data-aos="slide-up"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="1000"
      >
        <h1><br />23.11.2022</h1>
        <div>
          Mami seveda ni mogla verjeti,
          <br />
          zato je test ponovila... večkrat
          <br />
        </div>
      </div>
    </section>

    <section class="intro">
      <div
        class="introDescription"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div>
          Mami je lahko naredila prvi noseščniški test
          <br />
          in ugotovila da sem star 2-3 tedna.
          <br />
        </div>
        <br />
        <p>24.11.2022</p>
      </div>
      <img class="introImage" :src="require('../images/picture4.jpg')" />
    </section>

    <section class="guide1">
      <img
        class="guide1Image"
        :src="require('../images/picture2.jpg')"
        alt="3d illustration of boy sitting with legs crossed"
        data-aos="slide-down"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      />
      <div
        class="guide1Description"
        data-aos="slide-up"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="1000"
      >
        <h1><br />{{ moment().format("DD.MM.YYYY") }}</h1>
        <div>
          Zdaj ko si me spoznal/a, sem star
          <br />
          20 tednov, velik sem okoli 25cm in
          <br />
          tehtam okoli 300g.
          <br />
        </div>
      </div>
    </section>
    <section class="guide2">
      <div
        class="guide2Description"
        data-aos="slide-down"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="1000"
      >
        <h1>21.2.2023 <br /></h1>
        <div>
          Dan ko sta mami
          <br />
          in ati izvedela, da sem fantek
        </div>
      </div>
      <img
        class="guide2Image"
        :src="require('../images/picture5.jpg')"
        alt="3d illustration of boy with laptop sitting"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-ease="ease"
        data-aos-delay="1000"
      />
    </section>
    <section class="guide1">
      <div
        class="guide1Description"
        data-aos="slide-up"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="1000"
      >
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
import InputName from "./InputName.vue";
export default {
  name: "BabyPictures",
  components: { InputName },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
	font-family: Book Antiqua,Palatino,Palatino Linotype,Palatino LT STD,Georgia,serif; 
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
  padding: 120px 90px 20px 0px;
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
  display: flex;
  align-items: center;
  width: 450px;
  margin: 0 auto;
  align-items: center;
  box-shadow: 0.7rem 0.7rem 0rem grey !important;
  border: 4px solid grey !important;
}

.input {
  background: #fff3e2;
  font-size: 30px;
  font-weight: 500;
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

input {
  background: lightblue;
  font-size: 30px;
  font-weight: 500;
  width: fit-content !important;
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
    font-size: 50px;
    color:black;
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
  }
  .guide1Description h1 {
    text-align: center;
    height: 10rem;
    font-size: 50px;
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
    padding: 20px;
  }
  .guide2Description h1 {
    padding: 30px 0px;
  }
}
</style>
