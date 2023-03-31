import React from 'react'
import '../styles/counter.css'

export default function Counter(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="counter">
                            <div className="counter-content">
                                <div className="counter-icon">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <h3>Total Employee</h3>
                            </div>
                            <span className="counter-value">{props.statusdata[0]}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter green">
                            <div className="counter-content">
                                <div className="counter-icon">
                                    <i className="fa fa-rocket"></i>
                                </div>
                                <h3>Remote Location</h3>
                            </div>
                            <span className="counter-value">{props.statusdata[1]}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter blue">
                            <div className="counter-content">
                                <div className="counter-icon">
                                    <i className="fa fa-clock"></i>
                                </div>
                                <h3>Contract Employee</h3>
                            </div>
                            <span className="counter-value">{props.statusdata[2]}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter gray">
                            <div className="counter-content">
                                <div className="counter-icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <h3>Full-time</h3>
                            </div>
                            <span className="counter-value">{props.statusdata[3]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
