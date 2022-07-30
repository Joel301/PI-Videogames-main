import { useDispatch } from "react-redux";
import { changeOrder } from "../../redux/actions";

export default function OrderItem({ value, currentSelected, text }) {
    const dispatch = useDispatch();
    function updateOption(e) {
        dispatch(changeOrder(e.target.value));
    }
    return (
        <div className="orderItem" key={`Order_${value}`}>
            <input
                type={"radio"}
                value={value}
                id={`Order_${value}`}
                checked={currentSelected === value}
                onChange={(e) => {
                    updateOption(e);
                }}
            ></input>
            <label htmlFor="">{text}</label>
        </div>
    );
}
