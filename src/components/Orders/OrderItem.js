import { useSelector } from "react-redux";
import classes from "./OrderItem.module.scss";

const OrderItem = (props) => {
  const lang = useSelector((state) => state.i18n.lang);
  const orders = [];
  const { orderedItems } = props;
  for (const key in orderedItems) {
    orders.push({
      id: orderedItems[key].id,
      key: orderedItems[key].id,
      name: orderedItems[key].name,
      amount: orderedItems[key].amount,
      price: orderedItems[key].price,
    });
  }

  return (
    <li className={classes.order}>
      <div>
        <h3>{props.userName}</h3>
      </div>
      {orders.map((order) => (
        <div className={classes.orderInfo} key={order.id}>
          <div>
            {order.name[lang]} {order.price}$ x{order.amount}
          </div>
        </div>
      ))}
      <div>Totala amount: {props.totalAmount}$</div>
    </li>
  );
};

export default OrderItem;
