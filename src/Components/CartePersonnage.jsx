import { useState } from "react";
import "../Sass/card.scss";

function CartePersonnage({
  Level,
  attributName,
  attribut,
  imgP,
  name,
  force,
  defence,
  type,
  capacite,
  bonus,
  isFavori,
}) {
  const [favoritSelect, setFavoritSelect] = useState(isFavori);

  const handleClickFavorite = () => {
    setFavoritSelect(!favoritSelect);
  };

  return (
    <section className="card">
      <section className="contenairHeader">
        <div className="LevelAtribut">
          <p>{Level}</p>
          <img src={attribut} alt={attributName} />
        </div>
        <div className="imgPersonnages">
          <img src={imgP} alt={name} />
        </div>
      </section>
      <div className="typeP">
        <p>{type}</p>
      </div>
      <section className="forceAgilite">
        <div className="forceP">
          <p>
            {force}{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1904/1904608.png"
              alt="Epée"
            />
          </p>
        </div>
        <div className="defenceP">
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/59/59413.png"
              alt="Bouclier"
            />
            {defence}
          </p>
        </div>
      </section>
      <section className="contenairCapaciteBonus">
        <div className="capaciteP">
          <p>{capacite}</p>
        </div>
        <div className="bonusP">
          <p>{bonus}</p>
        </div>
      </section>
      <div className="like">
        <img
          onClick={handleClickFavorite}
          src="https://cdn-icons-png.flaticon.com/512/833/833300.png"
          alt="Coeur"
        />
      </div>
    </section>
  );
}

export default CartePersonnage;
