interface HouseRulesProps {
  rules: string[];
}

export default function HouseRules({ rules }: HouseRulesProps) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">House Rules</p>
              </div>
              <div className="col-xl-8 col-sm-12">
                <div className="row">
                  <div className="col-xl-6">
                    <p className="normal-text">Check in after 3:00 PM</p>
                    <p className="normal-text">Check out before 11:00 AM</p>
                  </div>
                  <div className="col-xl-6">
                    <p className="normal-text">Minimum age to rent: 25</p>
                  </div>
                </div>
                <div className="row house-rules">
                  <div className="col-xl-6">
                    <div className="margin-y">
                      <div className="flex">
                        <i className="fa-solid fa-child-reaching" />
                        <p className="text-2">Children</p>
                      </div>
                      <p className="normal-text">Children allowed: ages 0-17</p>
                    </div>
                    <div className="margin-y">
                      <div className="flex">
                        <i className="fa-solid fa-dog" />
                        <p className="text-2">Pets</p>
                      </div>
                      <p className="normal-text">No pets allowed</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div>
                      <div className="margin-y">
                        <div className="flex">
                          <i className="fa-regular fa-calendar-xmark" />
                          <p className="text-2">Events</p>
                        </div>
                        <p className="normal-text">No events allowed</p>
                      </div>
                      <div className="margin-y">
                        <div className="flex">
                          <i className="fa-solid fa-ban-smoking" />
                          <p className="text-2">Smoking</p>
                        </div>
                        <p className="normal-text">Smoking is not permitted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">Damage and Incidents</p>
              </div>
              <div className="col-xl-8 col-sm-12">
                <p className="normal-text">
                  You will be responsible for any damage to the rental property
                  caused by you or your party during your stay.
                </p>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">Cancellation</p>
              </div>
              <div className="col-xl-8 col-sm-12">
                <div className="timeline-container">
                  <div className="timeline-item">
                    <div className="circle filled" />
                    <p className="timeline-label">Today</p>
                    <p className="timeline-status">Full refund</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle outlined" />
                    <p className="timeline-label">Nov 4</p>
                    <p className="timeline-status">No refund</p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle outlined" />
                    <p className="timeline-label">Check-in</p>
                  </div>
                </div>
                <div className="row margin-y">
                  <div className="col-xl-2">
                    <p className="normal-text">Before</p>
                    <p className="text-3 bold">Nov 4</p>
                  </div>
                  <div className="col-xl-10">
                    <p className="text-3 bold">Full Refund</p>
                    <p className="normal-text">
                      Cancel your reservation before Nov 4 at 11:59 PM, and
                      you'll get a full refund. Times are based on the
                      property's local time.
                    </p>
                  </div>
                </div>
                <div className="row margin-y">
                  <div className="col-xl-2">
                    <p className="normal-text">After</p>
                    <p className="text-3 bold">Nov 4</p>
                  </div>
                  <div className="col-xl-10">
                    <p className="text-3 bold">No Refund</p>
                    <p className="normal-text">
                      After that, you won't get a refund
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">Important Information</p>
              </div>
              <div className="col-xl-8 col-sm-12">
                <p className="text-2 margin-y">You need to know</p>
                <p className="normal-text margin-y">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
                <p className="normal-text margin-y">
                  Government-issued photo identification and a credit card,
                  debit card, or cash deposit may be required at check-in for
                  incidental charges
                </p>
                <p className="normal-text margin-y">
                  Special requests are subject to availability upon check-in and
                  may incur additional charges; special requests cannot be
                  guaranteed
                </p>
                <p className="normal-text margin-y">
                  Onsite parties or group events are strictly prohibited
                </p>
                <p className="normal-text margin-y">
                  Host has indicated there is a carbon monoxide detector on the
                  property
                </p>
                <p className="normal-text margin-y">
                  Host has indicated there is a smoke detector on the property
                </p>
                <p className="normal-text margin-y">
                  Safety features at this property include a fire extinguisher
                  and a first aid kit
                </p>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">Frequently asked questions</p>
              </div>
              <div className="col-xl-8 col-sm-12">
                <p className="normal-text margin-y">
                  <i className="fa-solid fa-angle-down" />
                  Is Juneau Vacation Home: Stunning View + Beach Access
                  pet-friendly?
                </p>
                <p className="normal-text margin-y">
                  <i className="fa-solid fa-angle-down" />
                  What time is check-in at Juneau Vacation Home: Stunning View +
                  Beach Access?
                </p>
                <p className="normal-text margin-y">
                  <i className="fa-solid fa-angle-down" />
                  What time is check-out at Juneau Vacation Home: Stunning View
                  + Beach Access?
                </p>
                <p className="normal-text margin-y">
                  <i className="fa-solid fa-angle-down" />
                  Where is Juneau Vacation Home: Stunning View + Beach Access
                  located?
                </p>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-3 col-sm-12">
                <p className="big-rating">9.8/10</p>
                <p className="text-1">Exceptional</p>
                <p>
                  24 Reviews <i className="fa-solid fa-circle-info" />
                </p>
                <p className="text-4">
                  Reviews are verified unless labeled otherwise
                </p>
              </div>
              <div className="col-xl-9 col-sm-12">
                <div className="row">
                  <div className="col-xl-12">
                    <p>Recent Reviews</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-sm-10">
                    <div className="card">
                      <p className="bold margin-y">10/10 Excellent</p>
                      <p>
                        A very cozy home for the two of us in a quiet area NW of
                        town. Beautiful water view. We enjoyed the art, read up
                        in it and visited the...
                      </p>
                      <a className="no-link" href="#">
                        Read more
                      </a>
                      <div className="margin-big-y">
                        <p>Kyle G.</p>
                        <p>Sep 25, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-10">
                    <div className="card">
                      <p className="bold margin-y">10/10 Excellent</p>
                      <p>
                        The cottage was just as the pictures and description
                        stated. Beautiful water view. Nice quiet area and great
                        view of the cove..
                      </p>
                      <a className="no-link" href="#">
                        Read more
                      </a>
                      <div className="margin-big-y">
                        <p>Cindy B.</p>
                        <p>Sep 25, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="secondary-btn margin-y">
                  See all 24 reviews
                  <i className="fa-solid fa-arrow-right-long" />
                </button>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">About the host</p>
              </div>
              <div className="col-xl-8 col-sm-12">
                <p className="text-2 bold">Hosted by Evolve</p>
                <div className="margin-big-y">
                  <p className="text-2 bold">Languages</p>
                  <p className="normal-text">
                    English, French, German, Spanish
                  </p>
                </div>
              </div>
            </div>
            <div className="row margin-big-y">
              <div className="col-xl-4 col-sm-12">
                <p className="text-1">Send a message</p>
              </div>
              <div className="col-xl-8">
                <button className="secondary-btn">Contact Host</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
