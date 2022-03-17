import { useParams } from "react-router-dom";
import Item from "./item";

export default function ItemPage(props) {
  // let [isPending, setIsPending] = useState(true);

  let { id } = useParams();
  let { allItems } = props;
  let chosenItem = allItems.find((item) => item.id === Number(id));
  return (
    <div>
      {chosenItem && (
        <div>
          <Item
            itemData={chosenItem}
            displayData={"fullItemDetails"}
            onAdd={props.onAdd}
          />

          <button
            className="btn btn-success"
            onClick={() => {
              props.onAdd(chosenItem);
              alert("Item added successfully !");
            }}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}
