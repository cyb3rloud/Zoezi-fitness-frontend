import React, { Component } from 'react'
import ItemCard from './ItemCard'
import Search from './Search'
import MoreButton from './MoreButton'
import BackButton from './BackButton'



class ItemContainer extends Component {


    render() {
        return (
            <div className="search">
                <Search
                    updateFilter={this.props.updateFilter}
                    movies={this.props.movies}
                    movieFilter={this.props.movieFilter}
                    updateMovieFilter={this.props.updateMovieFilter} />

                    <div className="item-container" >
                        <div className="background-img">
                            <div>
                                {this.props.limit + 1 < this.props.itemLength ? <span><br /><MoreButton moreItems={this.props.moreItems} items={this.props.items} /></span> : null}
                                {this.props.items.map(item => <ItemCard item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} updateCurrentUser={this.props.updateCurrentUser} user={this.props.currentUser} />)}
                                {this.props.limit == 0 ? null : <span><br /><BackButton backItems={this.props.backItems} items={this.props.items} /><br /></span>} <br /><br />
                            </div>
                        </div>
                    </div>
                
                <br />
                <br />
            </div>


        )
    }
};

export default ItemContainer;