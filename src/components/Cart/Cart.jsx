import PropTypes from "prop-types";
import { DisplayItemInfo } from "../Shopping/Shopping.jsx";
import styles from "./Cart.module.css";

import styled from "styled-components";

function Cart({ cart, removeFromCart }) {
	const totalPrice =
		cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

	return (
		<>
			<StyledDiv>
				<div className={styles.pagediv}>
					<h1 className={styles.h1}>Cart</h1>{" "}
					<StyledList>
						{cart && cart.length > 0 ? (
							cart.map((item) => (
								<div key={item.id}>
									<StyledCard>
										<DisplayItemInfo
											name={item.name}
											id={item.id}
											image={item.image}
											price={item.price}
										/>
										<StyledButton>
											<button
												className={styles.button}
												onClick={() =>
													removeFromCart(item)
												}
											>
												Remove From Cart
											</button>
										</StyledButton>
									</StyledCard>
								</div>
							))
						) : (
							<StyledText>
								<h3 className={styles.h3}>
									Oh no! Your cart is empty
								</h3>
							</StyledText>
						)}
					</StyledList>
					<StyledText>
						<div>Total: ${totalPrice}</div>
					</StyledText>
				</div>
			</StyledDiv>
		</>
	);
}

const StyledDiv = styled.section`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
`;

const StyledList = styled.section`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	list-style-type: none;
	width: 100vw;
`;

const StyledCard = styled.section`
	display: flex;
	border: 1px solid black;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	box-shadow: 5px 5px 5px gray;
`;

const StyledButton = styled.section`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	width: 100%;
	margin: 1px;
`;

const StyledText = styled.section`
	font-size: 1.25rem;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: unset;
	width: 100vw;
`;

Cart.propTypes = {
	cart: PropTypes.array,
	addToCart: PropTypes.func,
	removeFromCart: PropTypes.func,
};

export default Cart;
