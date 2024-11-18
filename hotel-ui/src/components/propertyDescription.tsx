interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-sm-12">
            <p className="text-1 margin-big-y">About this property</p>
            <p className="text-2 margin-bottom">
              Juneau Vacation Home: Stunning View + Beach Access
            </p>
            <p className="text-normal">
              Escape to the mountains and experience the great outdoors at this
              lovely Juneau vacation rental! Perched on the shore of Lena Cove,
              this 2-bedroom, I-bath home is the perfect getaway for those
              looking to enjoy a relaxing retreat surrounded by nature. Spend
              your day fishing for King Salmon, exploring Lena Beach and the
              rocky coastline, or hiking the nearby trails. After your outdoor
              adventure, kick back on the private deck and admire the
              breathtaking panoramic views!
            </p>
            <p className="text-3 margin-y">--THE PROPERTY--</p>
            <p className="normal-text">
              CBJ1000104 | 1,115 Sq Ft | 2 Private Decks I Lena Cove &amp;
              Mountain Views | 2 Bicycles Provided
            </p>
            <p className="normal-text">
              Bedroom 1: Queen Bed, Full Floor Mattress I Bedroom 2: Extra Long
              Twin Bed
            </p>
            <p className="normal-text">
              HOME HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer
              KITCHEN: Fridge, stove, coffee maker, microwave, cooking basics,
              toaster, dishware/flatware, trash bags/paper towels, Crockpot
              GENERAL: Free WiFi, central heating, linens/towels, keyless entry,
              hair dryer, ceiling fans FAQ: No A/C, stairs required to access
              PARKING: Driveway (2 vehicles), RV parking allowed
            </p>
            <p className="text-3 margin-y">--THE LOCATION--</p>
            <p className="normal-text">
              GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area
              (0.5 miles), Glacier Gardens Rainforest Adventure (10 miles),
              Mendenhall Glacier (10 miles), Twin Lakes (13 miles)
            </p>
            <p className="normal-text">
              THINGS TO DO: Mendenhall Golf (8 miles), Diamond Park Aquatic
              Center (8 miles), Riverside Rotary Park (8 miles), Alaska State
              Museum (16 miles), Last Chance Mining Museum (18 miles), AJ Mine
              Gastineau Mill Tours (20 miles)
            </p>
            <p className="normal-text">
              LOCAL FARE: Forbidden Peak Brewery (5 miles), The Grind Coffee
              Company (7 miles), Four Plates Cocina Peruana (7 miles), Sandbar
              &amp; Grill (7 miles), Zerelda's Bistro (8 miles), Donna's
              Restaurant (9 miles), Alaskan Brewing Co. (13 miles)
            </p>
            <p className="normal-text">
              AIRPORT: Juneau International Airport (9 miles)
            </p>
            <p className="text-3 margin-y">--REST EASY WITH US--</p>
            <p className="normal-text">
              Evolve makes it easy to find and book properties you'll never want
              to leave. You can relax knowing that our properties will always be
              ready for you and that we'll answer the phone 24/7. Even better,
              if anything is off about your stay, we'll make it right. You can
              count on our homes and our people to make you feel
              welcome--because we know what vacation means to you.
            </p>
            <p className="text-3 margin-y">--POLICIES--</p>
            <p className="normal-text">-No smoking</p>
            <p className="normal-text">-No pets allowed</p>
            <p className="normal-text">
              -No events, parties, or large gatherings
            </p>
            <p className="normal-text">
              -Must be at least 25 years old to book
            </p>
            <p className="normal-text">-Additional fees and taxes may apply</p>
            <p className="normal-text">
              -Photo ID may be required upon check-in
            </p>
            <p className="normal-text">
              -NOTE: The property requires stairs to access
            </p>
            <p className="normal-text">
              -NOTE: The property does not have air conditioning
            </p>
            <p className="normal-text">
              -NOTE: The property sleeps 3 guests in 2 beds, with room for 4
              total by using the full floor mattress
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 property-manager-details margin-y">
            <p className="text-2">Property Manager</p>
            <i className="fa-brands fa-pagelines" />
            <p className="normal-text">Evolve</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 margin-y">
            <p className="text-2">Languages</p>
            <p className="normal-text">English, French, German, Spanish</p>
          </div>
        </div>
        <div className="row margin-big-y">
          <div className="col-xl-8 margin-big-y col-sm-12">
            <div className="row">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">Amenities</p>
              </div>
              <div className="col-xl-4 text-3 col-sm-6">
                <div className="amenities-info">
                  <div className="info-item">
                    <i className="fa-solid fa-kitchen-set" />
                    <span className="info-text">Kitchen</span>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-cash-register" />
                    <span className="info-text">Dryer</span>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-soap" />
                    <span className="info-text">Washer</span>
                  </div>
                </div>
                <a className="no-link bold" href="#">
                  See all 34 amenities →
                </a>
              </div>
              <div className="col-xl-4 text-3 col-sm-6">
                <div className="amenities-info">
                  <div className="info-item">
                    <i className="fa-solid fa-water" />
                    <span className="info-text">Ocean View</span>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-campground" />
                    <span className="info-text">Outer Space</span>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-square-parking" />
                    <span className="info-text">Parking Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
