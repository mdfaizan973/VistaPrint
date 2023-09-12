// import React from 'react'
import "./Styles/NavHOver.css";
export default function NavHover() {
  return (
    <div className="main_container">
      <div className="blog_knownl_containers">
        <div className="blog_child">
          <div className="img_of_blog">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001639085/NPIB6574-Marquees-refresh-Standard-BC-003?cb=6bd118c58ce8a63cbe820ab3078b62dd0e59a019" />
          </div>
          <div className="contents_blogs">
            <div className="standard_business">
              <div className="text-1xl font-semibold">
                Standard Business Cards
              </div>
              <div>
                <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,w_256/page_icons/fsc-logo" />
              </div>
            </div>
            <div className="p_of_hov">
              <p>
                The options you need to create the card you want. Easily browse
                designs, papers, shapes and more. See details
              </p>
              {/* -- */}
              <div className="mt-5 w-100">
                <select
                  id="select"
                  name="select"
                  className="w-full px-6 py-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="option1">
                    Quantity <span>250 ( $0.10 / unit )</span>
                  </option>
                  <option value="option2">
                    Quantity <span>50 ( $0.26 / unit )</span>
                  </option>
                  <option value="option3">
                    Quantity <span>100 ( $0.32 / unit )</span>
                  </option>
                  <option value="option2">
                    Quantity <span>250 ( $0.16 / unit )</span>
                  </option>
                  <option value="option3">
                    Quantity <span>70 ( $0.14 / unit )</span>
                  </option>
                </select>
              </div>
              {/* --- */}

              <div className="mt-8">
                <p>
                  50 starting at $13.00 <br />
                  Get it as soon as Sep 14th to 02451 <br />
                  Pay in 4 interest-free payments on purchases of $30-$1,500.
                  Learn moreLearn more
                </p>
              </div>

              {/* ----- */}

              <div className="mt-10 w-90">
                <button className="w-full bg-black text-white  browser_btn">
                  Browse designs <br />
                  Choose one of our templates
                  <span>
                    <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto/page_icons/browseDesignsIconPrimary" />
                  </span>
                </button>
              </div>
              <div className="mt-2 w-90">
                <button className="w-full bg-white text-black  browser_btn">
                  Upload design <br />
                  Have a design? Upload and edit it
                  <span>
                    <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,co_rgb:000000,dpr_auto,e_colorize:100,f_auto,w_auto/page_icons/UploadIcon" />
                  </span>
                </button>
              </div>
              <div className="mt-4 text-center">
                <p>100% satisfaction guaranteed</p>
              </div>
              {/* ---E--- */}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- */}

      <div className="mid_link">
        <ul>
          <li className="font-bold ">Overview</li>
          <li className="font-bold">FAQ</li>
          <li className="font-bold">Options</li>
          <li className="font-bold">Specs & Templates</li>
        </ul>
      </div>

      {/* -----------One-of-a-kind cards------------ */}

      <div className="kind_cards_compo">
        <div className="text_conatiner_kcc">
          <h1 className="text-5xl font-semibold">
            Make your next card look and feel just the way you want.
          </h1>
          <div className="listing_data">
            <ull className="list_ul">
              <li>11 paper stock options</li>
              <li>Premium paper & special finish upgrades</li>
              <li>Square, slim & rounded corner upgrades</li>
              <li>Metallic foil & spot UV upgrades</li>
              <li>
                FSC® certified product: Made from responsibly forested materials
              </li>
            </ull>
          </div>
          {/* --mainlists */}
          <h2 className="text-xl font-bold">One-of-a-kind cards</h2>
          <p className="paragraph">
            Your business is unique, and your business cards should be, too.
            Whether you’re making first impressions, rewarding regulars with a
            loyalty card or giving satisfied clients your contact info for next
            time, we’re here to help you look and feel ready to impress. Create
            a card that fits your business needs, personality and style.
          </p>
          {/*  */}
          <h2 className="text-xl font-bold">Lots of options</h2>
          <p className="paragraph">
            From traditional papers to thicker, heavier stocks and
            attention-grabbing special finishes, you’ve got a lot of great
            choices for your cards. Paper options include linen, recycled matte,
            kraft and even alternatives like hemp-blend or cotton. And not only
            that, you can go with a square shape or rounded corners, too. For
            more info, go to the “Options” section.
          </p>
          {/*  */}
          <h2 className="text-xl font-bold">Easy to design</h2>
          <p className="paragraph">
            Our user-friendly design studio makes business card printing easier
            than ever. You can upload your own complete design, or you can pick
            from a wide range of templates, all tailored to specific industries,
            themes and uses. From there, it’s quick and easy to add your own
            text, logo, images and more.
          </p>
        </div>
        <div className="img_container_kcc">
          <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_900/legacy_dam/en-gb/S001539942/MXP3165-business-card-standard-overview-eu-001?cb=b16f661b79636f3ec3978b3b301c974c7e58b88b" />
        </div>
      </div>
    </div>
  );
}
