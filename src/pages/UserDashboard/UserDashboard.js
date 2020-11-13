import React, { PureComponent } from 'react';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import SellAccount from '../Accounts/SellAccount';




class UserDashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

            isLoading: false,

        };
    }
    componentDidMount() {

    }
    render() {


        return (
            <div class="wrapper">
                {/* <section class="banner-section section-background-image" >
                    <div class="container">
                        <div class="row align-items-center">
                        <Flip top delay={900}> 
                            <h1 className="text-center"> User dashboard will Comming Soon </h1>
                   

                            </Flip>
                        </div>
                    </div>
                </section> */}
                <SellAccount
                history={this.props.history}
                >
                    
                </SellAccount>

            </div>
        )
    }

}
UserDashboard.propTypes = {
};
export default (UserDashboard);

