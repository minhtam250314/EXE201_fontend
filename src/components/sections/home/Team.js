import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import axios from 'axios';

const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const Team = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7173/api/v1/houseHelper');
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching the doctors data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="section section-padding sigma_team-sec style-14 bg-gray">
            <div className="container-fluid p-sm-0">
                <div className="section-title centered">
                    <span className="subtitle text-white">Meet Our Team</span>
                    <h3 className="title text-white">Our Creative Team</h3>
                </div>
                <Slider {...settings} className="sigma_team-slider-2">
                    {/* Data */}
                    {doctors.map((item, i) => (
                        <div key={i} className="sigma_team style-14">
                            <div className="sigma_team-thumb">
                                <img src={process.env.PUBLIC_URL + "/" + item.avatar} alt={item.username} />
                            </div>
                            <div className="sigma_team-body">
                                <h5>
                                    <Link to={"/doctor-details/" + item.helperId}>{item.username}</Link>
                                </h5>
                                <div className="sigma_team-categories">
                                    <Link to={"/doctor-details/" + item.helperId} className="sigma_team-category">{item.district}</Link>
                                </div>
                                <div className="sigma_team-info">
                                    <span>
                                        <i className="fal fa-map-marker-alt" />
                                        {item.district}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </Slider>
            </div>
        </div>
    );
};

export default Team;