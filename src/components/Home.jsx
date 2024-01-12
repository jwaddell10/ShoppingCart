import { Link } from 'react-router-dom'

function HomePage() {
    //needs three icons, image assets? 
    //probably needs a router to the three icons
    //no functionality really? just display things
    return (
        <>
        <NavBar />
        <Body />
        </>
    )
}

function NavBar() {
    return (
        <div className="navbar">
            <h5>Website Name</h5>
            <Link to="/">Home</Link>
            <Link to="shopping">Shopping</Link>
            <Link to="cart">Cart</Link>
        </div>
    )
}

function Body() {
    return (
        <>
            <h1>body content here</h1>
        </>
    )
}

export default HomePage;