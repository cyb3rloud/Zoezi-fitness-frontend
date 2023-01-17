import './App.css';
import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import { Route, Switch, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Account from './Components/Account'
import LoginForm from './Components/LoginForm';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import ItemContainer from './Components/ItemContainer';
import Register from './Components/Register'
import Thanks from './Components/Thanks'
import Home from './Components/Home'
import EditForm from './Components/EditForm'
import Checkout from './Components/Checkout'


const ItemsURL = "http://localhost:3000/items/"
const CartsURL = "http://localhost:3000/carts/"
const CartItemsURL = "http://localhost:3000/cart_items/"
const UsersURL = "http://localhost:3000/users/"

// 


class App extends React.Component {

    state = {
        currentUser: null, //user:{}
        loggedIn: false,
        items: [],
        carts: [],
        cart_items: [],
        filter: "All",
        movieFilter: "",
        movies: ["My Neighbor Totoro", "Ponyo", "Ghibli", "Howl's Moving Castle", "Princess Mononoke", "Spirited Away", "Kiki's Delivery Service"],
        search: "",
        limit: 0
    }


    updateCurrentUser = (user) => {
        this.setState({
            currentUser: user,
            loggedIn: true,
        });
    };

    logOut = () => {
        this.setState({ currentUser: null, loggedIn: false })
        localStorage.token = "";

    }

    logInUser = (username) => {
        let current = this.state.users.find(
            (user) => user.username === username
        );
        this.setState({ currentUser: current });
    };



    autoLogin = () => {
        let token = localStorage.token;
        if (typeof token !== "undefined" && token.length > 1) {
            this.tokenLogin(token);
        } else {
            console.log("No token found, try logging in!");
        }
    };

    tokenLogin = (token) => {
        fetch("http://localhost:3000/auto_login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token }),
        })
            .then((r) => r.json())
            .then((user) => this.updateCurrentUser(user));
    };

    componentDidMount() {
        Promise.all([fetch(ItemsURL), fetch(CartsURL), fetch(UsersURL), fetch(CartItemsURL)])
            .then(([res1, res2, res3, res4]) => {
                return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()])
            })
            .then(([items, carts, users, cart_items]) => {
                this.setState({ items });
                this.setState({ carts });
                this.setState({ users });
                this.setState({ cart_items });
                // console.log(carts, "Carts")
            });
        this.autoLogin()
    }


    addToCart = (item) => { //item is the obj
        let addCart
        addCart = {
            item_id: item.id,
            cart_id: 21 //grab from backend(localhost) to make dynamic?/ Cart.first after seeding
        };
        let reqPack = {};
        reqPack.method = "POST";
        reqPack.headers = { "Content-Type": "application/json" };
        reqPack.body = JSON.stringify(addCart);

        fetch("http://localhost:3000/cart_items", reqPack)
            .then(res => res.json())
            .then(res => {
                res.item = item
                let updateCart = [...this.state.carts, res]
                this.setState({ carts: updateCart });
                // console.log(res)
            })
    }


    removeFromCart = (cart_items) => {
        console.log(cart_items, "removeFromCart function")

        fetch(CartItemsURL + cart_items.id, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    carts: this.state.carts.filter((filteredCart) => filteredCart != cart_items)
                })
            })
    }

    patchInfo = (newInfo) => {
        this.setState({
            currentUser: {
                id: newInfo.id,
                username: newInfo.username,
                email: newInfo.email,
                // first_name: newInfo.firstName,
                // last_name: newInfo.lastName,
                // shipping_address: newInfo.shippingAddress,
                // phone_number: newInfo.phoneNumber
            }
        })
        // console.log(newInfo, "NewInfo")
        // console.log(this.state.currentUser, "Current User")

    }

    moreItems = () => {
        this.setState({
            limit: this.state.limit + 4
        })
    }

    backItems = () => {
        this.setState({
            limit: this.state.limit - 4
        })
    }

    updateFilter = (filter) => {
        this.setState({ filter })
    }


    updateMovieFilter = (movieFilter) => {
        this.setState({ movieFilter })
    }

    filteredItems = () => {
        let filtereditems = this.state.items
        if (this.state.filter !== "All") {
            filtereditems = filtereditems.filter(item => item.movie === this.state.filter)
        }
        return filtereditems
    }


    render() {
        console.log(this.state.currentUser)

        const filteredItems = this.state.items.filter(item => item.movie.toLowerCase().includes(this.state.filter.toLowerCase()))
        const filteredMovies = this.state.movies.filter(movie => movie.includes(this.state.movieFilter))

        return (
            <Fragment>
                <div className='one'>
                    <div >
                        <div maxWidth="xd">
                            <header className="App-header">
                                <div variant="h2" component="div">

                                </div>
                                <div variant="subtitle1">

                                </div>
                            </header>
                            <NavBar
                                currentUser={this.state.currentUser}
                                logOut={this.logOut} />
                            <Router />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" render={() => (
                                    this.state.currentUser == null ?
                                        <LoginForm
                                            updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/items" />
                                )} />

                                <Route exact path="/auth">
                                    Auth Check{" "}
                                    {!this.state.loggedIn
                                        ? "(Works better if you're logged in!)"
                                        : "(Try it now you're logged in!)"}
                                    <NavBar loggedIn={this.state.loggedIn} />
                                </Route>

                                <Route exact path="/register" component={Register} />
                                <Route path="/carts" render={() => (
                                    <Cart
                                        currentUser={this.state.currentUser}
                                        carts={this.state.carts}
                                        removeFromCart={this.removeFromCart} />)} />

                                <Route exact path="/edit" render={() =>
                                    <EditForm
                                        currentUser={this.state.currentUser}
                                        patchInfo={this.patchInfo} />} />

                                <Route exact path="/users" render={() =>
                                    <Account
                                        currentUser={this.state.currentUser} />} />

                                <Route exact path="/checkout" render={() =>
                                    <Checkout
                                        currentUser={this.state.currentUser} />} />

                                <Route exact path="/thanks" render={() =>
                                    <Thanks
                                        currentUser={this.state.currentUser} />} />

                                <Route exact path="/items" render={(props) => (
                                    <ItemContainer
                                        addToCart={this.addToCart}
                                        updateCurrentUser={this.updateCurrentUser}
                                        user={this.state.currentUser}
                                        filter={this.state.filter}
                                        updateFilter={this.updateFilter}
                                        movies={this.state.movies}
                                        movieFilter={this.state.movieFilter}
                                        updateMovieFilter={this.updateMovieFilter}
                                        moreItems={this.moreItems}
                                        limit={this.state.limit}
                                        items={this.filteredItems().slice(this.state.limit, this.state.limit + 4)}
                                        limits={this.state.limit}
                                        itemLength={this.state.items.length}
                                        backItems={this.backItems} />)} />

                            </Switch>
                            <Router />
                        </div>
                    </div>
                </div>

            </Fragment>

        )
    }

}

export default App;