function Payment() {
  return (
    <div className="login">
      <h1>Payment</h1>
      <p>100$ fee to pay:</p>
      <div className="form">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@emial.com"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="phone number"
        />
        <button>Pay</button>
      </div>
    </div>
  );
}

export default Payment;
