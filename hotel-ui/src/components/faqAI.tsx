export default function FaqAI() {
  return (
    <section>
      <div className="container">
        <div className="row card query">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-11 col-sm-9">
                <p className="text-1">Have a question?</p>
              </div>
              <div className="col-xl-1 col-sm-3">
                <div className="beta bold">
                  <i className="fa-regular fa-star" />
                  Beta
                </div>
              </div>
              <div className="col-xl-12 col-sm-12">
                <p className="text-3">
                  Get instant answers with Al powered search of property
                  information and reviews.
                </p>
              </div>
            </div>
            <div className="row query-input flex">
              <div className="col-xl-11 col-sm-10">
                <div className="search-box">
                  <span className="search-icon">
                    <i className="fa-solid fa-magnifying-glass" />
                  </span>
                  <input
                    type="text"
                    placeholder="Ask a question"
                    className="search-input"
                  />
                </div>
              </div>
              <div className="col-xl-1 col-sm-2">
                <button className="search-btn">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
