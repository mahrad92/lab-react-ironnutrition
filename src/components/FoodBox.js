import { Card, Row, Col, Divider, Input, Button } from "antd";

const FoodBox = ({foodB,onDelete}) => {
    return (
            <Card
                title={foodB.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >{foodB.id}
                <img src={foodB.image} height={60} />
                <p>Calories: {foodB.calories} </p>
                <p>Servings: {foodB.servings}</p>
                <p>
                    <b>Total Calories: {foodB.calories * foodB.servings} </b> kcal
                </p>
                <Button type="primary" onClick={()=>{
                    onDelete && onDelete(foodB.id)
                }}> Delete </Button>
            </Card>
    )
}
export default FoodBox;
