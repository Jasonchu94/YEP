import React from 'react';
import ReviewList from '../review/review_list';
import SearchBar from '../search_bar/search_bar'
import NavBarDropdown from '../nav_bar/navbar_dropdown';
import { Link, withRouter } from 'react-router-dom';
class BusinessShow extends React.Component{

    constructor(props){
        super(props)

        this.businessWebsite = this.businessWebsite.bind(this);
        this.writeReview = this.writeReview.bind(this);
        
    }

    
    componentWillMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
        this.props.fetchReviews();
    }

    ratingPhoto(rating){      
        if(rating >= 0 && rating < 1.5) return <img src={window.rating1}></img>
        if (rating >= 1.5 && rating < 2) return <img src={window.rating15}></img>
        if (rating >= 2 && rating <2.5) return <img src={window.rating2}></img>
        if (rating >= 2.5 && rating < 3) return <img src={window.rating25}></img>
        if (rating >=3 && rating < 3.5) return <img src={window.rating3}></img>
        if (rating >= 3.5 && rating < 4) return <img src={window.rating35}></img>
        if (rating >=4 && rating < 4.5) return <img src={window.rating4}></img>
        if (rating >=4.5 && rating < 5) return <img src={window.rating45}></img>
        if (rating === 5) return <img src={window.rating5}></img>   
        if (rating === 0) return <img src={window.rating0}></img> 
    }
    getRating(business){
        this.totalReviews = 0;
        let totalRating=0;
        business.reviews.map(review=>(
            totalRating += review.rating,
            this.totalReviews +=1
        ))
     
        return (totalRating/this.totalReviews);
    }

    businessTime(){
        const {business} = this.props;

        return(`
         ${business.opentime < 12 ? business.opentime : business.opentime-12}:00
            ${business.opentime > 12 ? "PM" : "AM"} -
            ${business.closetime > 12 ? business.closetime -12 : business.closetime}:00 
            PM

        ` )
    }

    businessWebsite(business){
        if(business.website){
            return(
                <div className='business-website'>
                    <a href={business.website}></a>{business.website}
                    <img src={window.website}></img>
                </div>
            )
        } else{ return null
        }
    }

    writeReview(){
        if(!this.props.currentUser){
            this.props.history.push('/login')
        }else{
            this.props.history.push(`/businesses/${this.props.business.id}/reviews/new`)
        }
    }

    render(){
        const {business, currentUser, users} = this.props
      
        if (business){
            return(
                <div className='business-index-container'>
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                        
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>
                    </div>
                    <div className='business-show-photo-slider-container'>
                        <div className='photo-slider'>
                            {business.photoUrls.map(photo =>(
                                    <img src={photo} key={Math.random()}></img>
                            ))}
                        </div>
                        <div className='business-show-info'>
                            <h1 className='business-show-name'>{business.name}</h1>                    
                            <div className='business-rating'>{this.ratingPhoto(this.getRating(business))}&nbsp;&nbsp;{this.totalReviews} reviews</div>
                                <br></br>
                            <div className='business-price'> {business.price} &bull; {business.categories.map((category, key) => category.charAt(0).toUpperCase() + category.slice(1) + (key===business.categories.length-1 ? "" : ", "))} </div>
                            <br></br>
                            <div className='business-hours'> {this.businessTime()}</div>

                        </div>
                    </div>
                    <div className='business-show-review-container'>
                        <div className='write-review-container'>
                            <button className='review-button' onClick={this.writeReview}> ☆ Write a Review</button>                            
                        </div>                        
                        <p className='location-title'>Location & Hours</p>
                        <div className='location-and-hours'>                                                   
                            <div className='map'><img src={window.daeho}></img></div>
                            <div className='hours-container'>
                                    <p>Mon {this.businessTime()}</p>
                                    <br></br>
                                    <p>Tue {this.businessTime()}</p>
                                    <br></br>
                                    <p>Wed {this.businessTime()}</p>
                                    <br></br>
                                    <p>Thu {this.businessTime()}</p>
                                    <br></br>
                                    <p>Fri {this.businessTime()}</p>
                                    <br></br>
                                    <p>Sat {this.businessTime()}</p>
                                    <br></br>
                                    <p>Sun {this.businessTime()}</p>
                            </div>
                        </div>
                            <p className='title-reviews'>Recommended Reviews</p>
                            <ReviewList 
                            fetchReviews={this.props.fetchReviews}
                            business={business}
                            currentUser={currentUser}
                            reviews = {business.reviews}
                            rating= {this.ratingPhoto(this.getRating(business))}
                            fetchAllUsers={this.props.fetchAllUsers}
                            users={users}
                            />
                        
                        <div className='business-show-info-container'>
                                <div className='right-business-container'>
                                    {this.businessWebsite(business)}                                      
                                    <div className='business-phone-number'>
                                        <div>{business.phone_number} </div>
                                        <img src={window.phone}></img>
                                    </div>
                                    <br></br>
                                    <div className='business-directions'>
                                        <div className='directions-title'>Get Directions</div>
                                    </div>
                                    <br></br>
                                    <div className='business-address'>{business.address}, {business.city}, {business.zipcode} <img src={window.yepdirections}></img></div>

                                </div>
                        </div>
                    </div>
                </div>
            )

        } else{ return null}
    }
}

export default withRouter(BusinessShow);