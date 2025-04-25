import { Button, Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title> {user.name} </Card.Title>
          <Card.Text>Age is {user.age}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;