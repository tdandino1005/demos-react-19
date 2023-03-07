import CatCard from "./components/CatCard";
import Counter from "./components/Counter";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import usersData from "./data/users";

<NavBar />;

function App() {
  return (
    <>
      <Header text="Hello cat" />
      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}

      <ul>
        {groceriesData.map((grocery) => {
          return <GroceryLI grocery={grocery} key={grocery.id} />;
        })}
      </ul>

      {usersData.map((user) => {
        return <UserCard user={user} key={user.id.value} />;
      })}
      <Counter />
    </>
  );
}
export default App;
