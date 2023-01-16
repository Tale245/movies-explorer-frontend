import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import img1 from "../../images/1img.png";
import img2 from "../../images/2img.png";
import img3 from "../../images/3img.png";
import img4 from "../../images/4img.png";
import img5 from "../../images/5img.png";
import img6 from "../../images/6img.png";
import img7 from "../../images/7img.png";
import img8 from "../../images/8img.png";
import img9 from "../../images/9img.png";
import img10 from "../../images/10img.png";
import img11 from "../../images/11img.png";
import img12 from "../../images/12img.png";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ savedMovies }) => {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        <MoviesCard
          title="33 слова о дизайне"
          time="1ч 47м"
          img={img1}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Киноальманах «100 лет дизайна»"
          time="1ч 47м"
          img={img2}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          time="1ч 47м"
          img={img3}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Баския: Взрыв реальности"
          time="1ч 47м"
          img={img4}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Бег это свобода"
          time="1ч 47м"
          img={img5}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Книготорговцы"
          time="1ч 47м"
          img={img6}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Когда я думаю о Германии ночью"
          time="1ч 47м"
          img={img7}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Gimme Danger: История Игги и The Stooge..."
          time="1ч 47м"
          img={img8}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Дженис: Маленькая девочка грустит"
          time="1ч 47м"
          img={img9}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Соберись перед прыжком"
          time="1ч 47м"
          img={img10}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="По волнам: Искусство звука в кино"
          time="1ч 47м"
          img={img11}
          savedMovies={savedMovies}
        />
        <MoviesCard
          title="Баския: Взрыв реальности"
          time="1ч 47м"
          img={img12}
          savedMovies={savedMovies}
        />
      </div>
      <Preloader />
    </section>
  );
};

export default MoviesCardList;
