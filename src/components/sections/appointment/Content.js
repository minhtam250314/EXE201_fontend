import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      dateofbirth: "",
      phoneno: "",
      gender: "",
      hospital: "",
      service: "",
      date: "",
      doctor: "",
      remarks: "",
      cardName: "",
      cardNumber: "",
      expDate: "",
      cardCvv: "",
      condition: "",
      paymentSuccessful: false,
      showModal: false,
    };
    this.fullname = this.fullname.bind(this);
    this.email = this.email.bind(this);
    this.dateofbirth = this.dateofbirth.bind(this);
    this.phoneno = this.phoneno.bind(this);
    this.gender = this.gender.bind(this);
    this.hospital = this.hospital.bind(this);
    this.service = this.service.bind(this);
    this.date = this.date.bind(this);
    this.doctor = this.doctor.bind(this);
    this.remarks = this.remarks.bind(this);
    this.cardName = this.cardName.bind(this);
    this.cardNumber = this.cardNumber.bind(this);
    this.expDate = this.expDate.bind(this);
    this.cardCvv = this.cardCvv.bind(this);
    this.condition = this.condition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  fullname(event) {
    this.setState({ fullname: event.target.value });
  }
  email(event) {
    this.setState({ email: event.target.value });
  }
  dateofbirth(event) {
    this.setState({ dateofbirth: event.target.value });
  }
  phoneno(event) {
    this.setState({ phoneno: event.target.value });
  }
  gender(event) {
    this.setState({ gender: event.target.value });
  }
  hospital(event) {
    this.setState({ hospital: event.target.value });
  }
  service(event) {
    this.setState({ service: event.target.value });
  }
  date(event) {
    this.setState({ date: event.target.value });
  }
  doctor(event) {
    this.setState({ doctor: event.target.value });
  }
  remarks(event) {
    this.setState({ remarks: event.target.value });
  }
  cardName(event) {
    this.setState({ cardName: event.target.value });
  }
  cardNumber(event) {
    this.setState({ cardNumber: event.target.value });
  }
  expDate(event) {
    this.setState({ expDate: event.target.value });
  }
  cardCvv(event) {
    this.setState({ cardCvv: event.target.value });
  }
  condition(event) {
    this.setState({ condition: event.target.checked });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.resetForm();
    this.setState({ paymentSuccessful: true, showModal: true });
  }

  handleClose() {
    this.setState({ showModal: false });
    this.props.history.push("/");
  }

  resetForm() {
    this.setState({
      fullname: "",
      email: "",
      dateofbirth: "",
      phoneno: "",
      gender: "",
      hospital: "",
      service: "",
      date: "",
      doctor: "",
      remarks: "",
      cardName: "",
      cardNumber: "",
      expDate: "",
      cardCvv: "",
      condition: "",
    });
  }

  render() {
    return (
      <div className="sidebar-style-9">
        <div className="section">
          <div className="container">
            <Modal show={this.state.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thanh Toán Thành Công</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thanh toán thành công! Đang chuyển hướng về trang chủ...
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.handleClose}>
                  Đóng
                </Button>
              </Modal.Footer>
            </Modal>
            <form onSubmit={this.handleSubmit} method="GET">
              <div className="row">
                <div className="col-lg-8">
                  <div className="sigma_form style-7">
                    <div className="form-block">
                      <h4>Thông tin của bạn:</h4>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <i className="fal fa-user" />
                            <input
                              type="text"
                              value={this.state.fullname}
                              onChange={this.fullname}
                              placeholder="Tên bệnh nhân"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <i className="fal fa-at" />
                            <input
                              type="email"
                              value={this.state.email}
                              onChange={this.email}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <i className="fal fa-calendar-alt" />
                            <input
                              type="text"
                              value={this.state.dateofbirth}
                              onChange={this.dateofbirth}
                              data-provide="datepicker"
                              placeholder="Ngày/Tháng/Năm sinh"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <i className="fal fa-phone" />
                            <input
                              type="text"
                              value={this.state.phoneno}
                              onChange={this.phoneno}
                              placeholder="Số điện thoại"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-block d-flex">
                      <h4 className="mb-0 mr-4">Giới tính:</h4>
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          id="radio"
                          value="Male"
                          checked={this.state.gender === "Male"}
                          onChange={this.gender}
                        />
                        <label className="mb-0" htmlFor="radio">
                          Nam
                        </label>
                      </div>
                      <div className="d-flex align-items-center ml-4">
                        <input
                          type="radio"
                          id="radio2"
                          value="Female"
                          checked={this.state.gender === "Female"}
                          onChange={this.gender}
                        />
                        <label className="mb-0" htmlFor="radio2">
                          Nữ
                        </label>
                      </div>
                    </div>
                    <div className="form-block">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <select
                              value={this.state.hospital}
                              onChange={this.hospital}
                            >
                              <option value="">Chọn Địa Điểm</option>
                              <option value="Địa chỉ 1">Quận 9</option>
                              <option value="Địa chỉ 2">Bình Thạnh</option>
                              <option value="Địa chỉ 3">Gò Vấp</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <select
                              value={this.state.service}
                              onChange={this.service}
                            >
                              <option value="">Chọn Dịch Vụ</option>
                              <option value="Service 1">Dịch Vụ 1</option>
                              <option value="Service 2">Dịch Vụ 2</option>
                              <option value="Service 3">Dịch Vụ 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <i className="fal fa-calendar-alt" />
                            <input
                              type="text"
                              value={this.state.date}
                              onChange={this.date}
                              data-provide="datepicker"
                              placeholder="Chọn Ngày"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <i className="fal fa-user-md" />
                            <input
                              type="text"
                              value={this.state.doctor}
                              onChange={this.doctor}
                              placeholder="Chọn Nhân Viên"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              value={this.state.remarks}
                              onChange={this.remarks}
                              rows={7}
                              placeholder="Lưu ý cho Nhân Viên (Lựa chọn)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-block mb-0">
                      <h4>Thông tin thanh toán:</h4>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label>Tên thẻ</label>
                            <input
                              type="text"
                              value={this.state.cardName}
                              onChange={this.cardName}
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>Số thẻ</label>
                            <div className="payment-card-wrapper d-flex align-items-center">
                              <input
                                type="text"
                                value={this.state.cardNumber}
                                onChange={this.cardNumber}
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                              />
                              <div
                                className="card-image"
                                style={{
                                  backgroundColor: "#f0f0f0",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                <img
                                  className="qr-image"
                                  src={`${process.env.PUBLIC_URL}/assets/img/book-apppointment/QR.png`}
                                  alt="QR Code"
                                  style={{
                                    width: "80%",
                                    height: "100%",
                                    marginLeft: "10%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Ngày hết hạn</label>
                            <input
                              type="text"
                              value={this.state.expDate}
                              onChange={this.expDate}
                              placeholder="tháng/năm"
                              data-provide="datepicker"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Mã bảo mật</label>
                            <input
                              type="text"
                              value={this.state.cardCvv}
                              onChange={this.cardCvv}
                              placeholder="CCV"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={this.state.condition}
                        onChange={this.condition}
                      />
                      <label className="mb-0" htmlFor="checkbox">
                        Tôi chấp nhận <Link to="#">Điều khoản</Link>,{" "}
                        <Link to="#">điều kiện</Link> và chính sách chung
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sidebar style-10 mt-5 mt-lg-0">
                    {/* Booking Widget */}
                    <div className="widget widget-booking">
                      <h5 className="widget-title">Tóm tắt đặt chỗ</h5>
                      <ul>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Ngày</span>
                          <span>07/10/2022</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Thời gian</span>
                          <span>08:30 Pm</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Tên Nhân Viên</span>
                          <span>Dr. Joseph Doe</span>
                        </li>
                      </ul>
                      <hr />
                      <ul>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Gói dọn dẹp 1</span>
                          <span>$80</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Gói dọn dẹp 2</span>
                          <span>$140</span>
                        </li>
                      </ul>
                      <hr />
                      <ul>
                        <li className="d-flex align-items-center justify-content-between">
                          <span className="secondary-color">
                            <b>Tổng cộng</b>
                          </span>
                          <span className="secondary-color">
                            <b>$220</b>
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <button
                            type="submit"
                            className="sigma_btn btn-block btn-sm mt-4"
                          >
                            Xác nhận và thanh toán
                            <i className="fal fa-arrow-right ml-3" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
