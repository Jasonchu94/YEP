import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar'
import NavBarDropdown from '../nav_bar/navbar_dropdown'
import BusinessIndexItem from './business_index_item'
import Map from '../map/map';
import BusinessFilter from '../filter/filter';
class BusinessIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
      this.props.fetchBusinesses();
      this.props.fetchReviews();
    }
    render(){
        // debugger
        const {businesses, reviews} = this.props;
        // debugger
        if(businesses.length === 0) return null;
        // const categ  ories = businesses.map(business=> business.categories).flat().filter(category=>category)
        // debugger
        return(
            <div className='business-index-container'>               
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                       
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true} />
                       
                        
                    </div>
                    <div className='business-list-container'> 
                        <div className='business-filter'>
                            <BusinessFilter businesses={businesses}/>
                        </div>
                        <div className='business-list'>
                            <h1 className='results'>All results</h1>
                            { businesses.map(business => (
                                <BusinessIndexItem
                                business = {business}
                                key = {business.id}
                                businesses = {businesses} 
                                reviews = {reviews}
                                fetchReviews ={this.props.fetchReviews}                               
                                />                            
                                ))
                            }                           
                        </div>
                        <div className='business-map'>
                            <Map businesses={businesses}/>
                        </div>

                    </div>
          

            </div>
        )
    }
}

export default BusinessIndex;