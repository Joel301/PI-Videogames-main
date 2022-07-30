import { useSelector } from "react-redux";
import { order } from "../../redux/reducer";
import OrderItem from "./OrderItem";

export default function OrderSelector() {
    const { orderBy } = useSelector((state) => state);

    return (
        <div className="OrderContainer" key={"SelectOption"}>
            {[
                {
                    value: order.NOMBREASC,
                    currentSelected: orderBy,
                    text: "A-Z Nombre",
                },
                {
                    value: order.NOMBREDESC,
                    currentSelected: orderBy,
                    text: "Z-A Nombre",
                },
                {
                    value: order.RATINGDESC,
                    currentSelected: orderBy,
                    text: "Mejor Rating",
                },
                {
                    value: order.RATINGASC,
                    currentSelected: orderBy,
                    text: "Peor Rating",
                },
            ].map((object) => OrderItem(object))}
        </div>
    );
}
