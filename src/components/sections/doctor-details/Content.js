import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDoctor } from "../../../helper/doctorHelper";
import { getAuthor, Rating } from "../../../helper/helper";
import axios from "axios";
import { Button } from "bootstrap";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null, // Khởi tạo state để lưu dữ liệu
    };
  }
  async componentDidMount() {
    const detailId = this.props.detailId;
    try {
      const response = await axios.get(
        `https://localhost:7173/api/v1/houseHelper/${detailId}`
      );
      this.setState({ item: response.data });
    } catch (error) {
      console.error("Error fetching the doctor data", error);
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    // Lấy các giá trị từ các trường input
    const date = event.target.date.value;
    const time = event.target.time.value;
    const startTime = date + "T" + time;
    const packageId = event.target.service.value;
    const helperId = 1;
    const customerId = localStorage.getItem("Id");
    const hours = event.target.hours.value;
    const description = "None";
    const status = 0;
    const totalPrice = 0;
    const bookingId = 0;

    // Tạo dữ liệu gửi đi
    const bookingData = {
        bookingId,
      startTime,
      packageId,
      helperId,
      customerId,
      hours,
      description,
      status,
      totalPrice
    };

    try {
      // Gửi yêu cầu POST đến API
      const response = await axios.post(
        "https://localhost:7173/api/v1/booking/createBooking",
        bookingData
      );
      console.log("Booking created:", response.data);
      // Xử lý phản hồi từ API nếu cần
    } catch (error) {
      console.error("Error creating booking:", error);
      // Xử lý lỗi nếu có
    }
  };

  render() {
    const { item } = this.state;
    if (!item) {
      return <div>Loading...</div>; // Hoặc trả về bất kỳ nội dung gì khi dữ liệu chưa được tải
    }
    return (
      <div className="section sigma_post-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sigma_post-details-inner">
                <div className="entry-content">
                  <div className="sigma_team style-17 mb-0">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <div className="sigma_team-thumb">
                          <img
                            src={process.env.PUBLIC_URL + "/" + item.avatar}
                            alt={item.username}
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sigma_team-body">
                          <h5>
                            <Link to={"/doctor-details/" + item.id}>
                              {item.username}
                            </Link>
                          </h5>
                          <div className="sigma_team-categories">
                            <Link
                              to={"/doctor-details/" + item.id}
                              className="sigma_team-category"
                            >
                              {item.specialist}
                            </Link>
                          </div>
                          <div className="sigma_team-info mt-4">
                            <span>
                              <i className="fal fa-phone" />
                              {item.phone}
                            </span>
                            <span>
                              <i className="fal fa-building" />
                              {item.district}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-menu-list">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <Link
                            to="#"
                            className="nav-link active p-0"
                            onClick={() =>
                              document
                                .getElementById("overview")
                                .scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            Overview
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <Link
                            to="#"
                            className="nav-link p-0"
                            onClick={() =>
                              document
                                .getElementById("contact")
                                .scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            Location &amp; Contact
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item border-0">
                          <Link
                            to="#"
                            className="nav-link p-0"
                            onClick={() =>
                              document
                                .getElementById("reviews")
                                .scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            Review
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer"></div>
                  <div id="contact">
                    <h4>{item.name} Location &amp; Contact Information</h4>
                    <div className="sigma_contact-wrapper">
                      <div className="sigma_contact-map">
                        <iframe
                          title={item.name}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6099415305143!2d106.80730807534013!3d10.841132857996252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1722620678494!5m2!1svi!2s"
                          height={600}
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="sigma_contact-blocks">
                        <h5>HomeAssist Center Address:</h5>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="sigma_contact-block style-3">
                              <i className="fal fa-map-marker-alt icon" />
                              <div className="contact-block-inner">
                                <p>Trường Đại học FPT TP. HCM</p>
                                <p className="mb-0">{item.location}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                              <i className="fal fa-phone icon" />
                              <div className="contact-block-inner">
                                <p>0902090768</p>
                                <p className="mb-0">0919949688</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer"></div>
                </div>
              </div>
            </div>
            {/* Sidebar Start */}
            <div className="col-lg-4">
              <div className="sidebar style-10 mt-5 mt-lg-0">
                {/* form Widget */}
                <div className="widget widget-form">
                  <h5 className="widget-title">Đặt ngay bây giờ</h5>
                  <form onSubmit={this.handleSubmit}>
                    <div className="widget-inner">
                      <label>Date</label>
                      <div className="form-group">
                        <input
                          type="date"
                          name="date"
                          data-provide="datepicker"
                          placeholder="3/8/2024"
                        />
                      </div>
                      <label>Time</label>
                      <div className="form-group mb-0">
                        <i className="far fa-clock" />
                        <input type="text" name="time" placeholder="08:30 SA" />
                      </div>
                    </div>
                    <label>How many hours do you want?</label>
                    <div className="form-group mb-0">
                      <input type="number" name="hours" placeholder="2" />
                    </div>
                    <hr />
                    <div className="widget-inner widget-service">
                      <div className="form-group">
                        <label>Choose Service</label>
                        <ul>
                          <li className="d-flex justify-content-between mb-3">
                            <div className="d-flex">
                              <input
                                type="radio"
                                id="service"
                                value="1"
                                name="service"
                              />
                              <label className="mb-0" htmlFor="service">
                                Gói giờ
                              </label>
                            </div>
                            <span>70.000đ/giờ</span>
                          </li>
                          <li className="d-flex justify-content-between mb-3">
                            <div className="d-flex">
                              <input
                                type="radio"
                                id="service1"
                                value="2"
                                name="service"
                              />
                              <label className="mb-0" htmlFor="service1">
                                Gói tháng
                              </label>
                            </div>
                            <span>7.000.000đ/tháng</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="sigma_btn btn-block btn-sm"
                    >
                      Gửi yêu cầu
                      <i className="fal fa-arrow-right ml-3" />
                    </button>
                  </form>
                </div>
                {/* form Widget 2 */}
                <div className="widget">
                  <h5 className="widget-title">Get in Touch</h5>
                  <div className="widget-inner">
                    <form>
                      <div className="form-group">
                        <i className="fal fa-user" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <i className="fal fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Message"
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className="sigma_btn btn-block btn-sm"
                      >
                        Send Message
                        <i className="fal fa-arrow-right ml-3" />
                      </button>
                    </form>
                  </div>
                </div>
                {/* Contact Widget */}
                
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;