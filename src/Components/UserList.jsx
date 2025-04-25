import UserCard from "./UserCard";

const UserList = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((el) => (
        <UserCard user={el} />
      ))}
    </div>
  );
};

export default UserList;
