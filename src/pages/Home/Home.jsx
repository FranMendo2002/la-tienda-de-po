import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
	return (
		<>
			<ItemListContainer greeting={"Fran"}></ItemListContainer>
			<ItemDetailContainer></ItemDetailContainer>
		</>
	);
};

export default Home;
