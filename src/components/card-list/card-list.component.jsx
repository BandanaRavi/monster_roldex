import './card-list.style.css';
import {Card} from '../card/card.component';
export const CardList = props => (//where procs is the attributes inside the tag 
                                  //and props.children is the acutal data passed in between
   <div className = 'card-list'>
    {props.monsters.map((monster) => <Card key={monster.id} monster={monster}></Card>)}
    </div>
);
