import PersonnageList from "../data/PersonnageList";
import CartePersonnage from "./CartePersonnage";
import "../Sass/ContenairCard.scss";
function TableauPersonnages() {
  return (
    <section className="contenairCard">
      {PersonnageList.map((personnage, index) => {
        return <CartePersonnage key={index} {...personnage} />;
      })}
    </section>
  );
}
export default TableauPersonnages;
