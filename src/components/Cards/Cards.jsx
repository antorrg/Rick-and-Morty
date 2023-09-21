import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.body}>
    <div className={style.container}>
      {characters.map(function (character) {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </div>
    </div>
  );
}
