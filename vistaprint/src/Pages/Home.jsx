// import React from 'react'

import "./Styles/Home.css";
export default function Home() {
  return (
    <>
      <div className="home_main_container">
        <div className="text_container">
          <h1 className="text-4xl font-semibold mb-4">
            Feeling professional? We print that.
          </h1>
          <p className="text-white-700 mb-6">
            Create cards and more that look as good as you feel about your
            business. Choose from hundreds of designs, materials, and finishes.
          </p>

          <div className="flex space-x-4">
            <button className="button_home">Business Cards</button>
            <button className="button_home">Custom Marketing</button>
          </div>
        </div>
      </div>
      <div className="products_img_container">
        <div className="head-text">
          <h1 className="head-textsp text-3xl font-semibold mb-4">
            Feeling professional? We print that. <span>See all </span>
          </h1>
        </div>
        <div className="pro_card_img grid grid-cols-4 gap-6">
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001629560/MXP21851-JulyNVHP-producttile-vistapicks-postcards-001?cb=85f99bdb61cc150a59a2788a6f215de5f4f3a4d0" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Postcards</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001628351/MXP21851-JulyNVHP-producttile-vistapicks-sheet-stickers-001?cb=b2069e877285245085d17cb5f0cf8aeec35d58ef" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">T-Shirt</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649130/MXP23221-Aug-21-Homepage-VistaPrintPicks-ProductTile-Tshirt-Woman-001?cb=7f1ee4ac89d7b0c4fe1111a85ebb7900961c7b5a" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Bussness Card</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649065/MXP23221-Aug-21-Homepage-VistaPrintPicks-ProductTile-RCBC-001?cb=7b8b781bb0182b1af4298399ea1a8b39bc221705" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Sheet Stickers</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001458263/MXP2638-WPT-Mid-funnel-Homepage-I&amp;A-Tile-002?cb=6f6e32e91890ea5f094df0a1c12ae62b87cee735" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">
                Invitations & Announcements
              </h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649060/MXP23221-Aug-21-Homepage-VistaPrintPicks-ProductTile-Poster-001?cb=d95b7c999e104e11b82c036c9e46259b5a3c79c7" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Banners</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001628407/MXP21851-JulyNVHP-producttile-vistapicks-vinyl-banners-001?cb=712f1665f523d27c13b71a2808b76971eb6b7675" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">posters</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
          <div className="product_card">
            <img
              src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001628354/MXP21851-JulyNVHP-producttile-vistapicks-stamps-001?cb=abf54e729856a0466d764598a074118476dac4bf"
              alt="Flyers"
            />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Stamps</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>{" "}
          </div>
        </div>
        {/* -- */}
        <div className="head-text">
          <h1 className="head-textsp text-3xl font-semibold mb-4">
            Stock up on essentials before the holiday rush
          </h1>
        </div>
        <div className="pro_card_img grid grid-cols-6 gap-6">
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649135/MXP23221-Aug-21-Homepage-PrepSzn-ProductTile-Flyer-001?cb=8a98f39732f318ea1c6266f7cbdce98bd9b1b0d2" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Flyers</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/* // --- */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649136/MXP23221-Aug-21-Homepage-PrepSzn-ProductTile-PaperBag-001?cb=53ddaf6c737ffb6bf49892f17f349bbe5a2b170d" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Paper Bags</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/* // --- */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649089/MXP23221-Aug-21-Homepage-PrepSzn-ProductTile-StickerSingle-001?cb=caac3375c7ebcf21a59fe495ce1dc6c14618fa49" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Sticker Signales</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/* // --- */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649070/MXP23221-Aug-21-Homepage-PrepSzn-ProductTile-NARollLabel-001?cb=35277449141bcf23c001905347b2cec794a780f9" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Roll Labels</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/* // --- */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649124/MXP23221-Aug-21-Homepage-PrepSzn-ProductTile-RackCard-001?cb=90f7a255ebaca1d84f159867bd1744ea80daee81" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Rock Cards</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/* // --- */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649075/MXP23221-Aug-21-Homepage-PrepSzn-ProductTile-HangTags-001?cb=34864d34cee6415adedc2324d755813721ab67eb" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Hang Tags</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
        </div>
        {/* -- */}
        <div className="head-text">
          <h1 className="head-textsp text-3xl font-semibold mb-4">
            Custom wedding invites start at under $1 <span>See all </span>
          </h1>
        </div>
        {/* ------ */}
        <div className="pro_card_img grid grid-cols-4 gap-6">
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649168/MXP23221-Aug-21-Homepage-Consumer-ProductTile-Invitation-001?cb=4366c8e7fa9e5222e90d88857d2c05f669e564cc" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Wedding Invitations</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649145/MXP23221-Aug-21-Homepage-Consumer-ProductTile-Menus-001?cb=765187def7880bad5aa5d414a40c79505de2fada" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Menus</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649148/MXP23221-Aug-21-Homepage-Consumer-ProductTile-FoamBoards-001?cb=17d5e1aa52131e0a9a6139a1f050433b49f7195e" />
            <div className="link_area">
              <h2 className="text-1xl font-bold"> Foam Boards</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649178/MXP23221-Aug-21-Homepage-Consumer-ProductTile-Napkins-001?cb=1f4702c0e06fbb3a2dffcaab702bd3eae3e393d9" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Napkins</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
        </div>

        {/* Let your tees do the talking */}
        <div className="home_main_container2">
          <div className="text_container2">
            <h1 className="text-5xl font-semibold mb-4">
              Let your tees do the talking
            </h1>
            <p className="text-white-700 mb-6">
              Build your brand’s reputation with the help of these comfy,
              stylish T-shirts.
            </p>

            <div className="flex space-x-4">
              <button className="button_home">Shop T-shirts</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="head-text">
          <h1 className="head-textsp text-3xl font-semibold mb-4">
            Merch they’ll bring everywhere <span>See all </span>
          </h1>
        </div>
        {/*  */}
        <div className="pro_card_img grid grid-cols-4 gap-6">
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001594479/MXP17419-WPT-producttile-hoodies-001?cb=9b0ac5df62fbc80e7b8cccdf143b40a12e31bb00" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Clothing</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649183/MXP-23221-Drawstring-Bag-Tile-001?cb=3416245ff0b1158e3b113b3fc1f1f5158c4c4a4b" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Bags</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001618326/MXP20904-Hats-ProductTile-002?cb=ef956b8a56b99852f85ba75c6c0dbd66adfd2381" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Hats</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649120/MXP23221-Aug-21-Homepage-PPAG-ProductTile-Drinkware-001?cb=a51099ba607a4c17ee4461a48f907bb65014d910" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Drinkware</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
          </div>
        </div>
        {/* ---------- */}
        <div className="head-text">
          <h1 className="head-textsp text-3xl font-semibold mb-4">
            Vista’s services: We’re here to help you stand out
          </h1>
        </div>
        {/* ***** */}
        <div className="pro_card_img grid grid-cols-4 gap-6">
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001566544/MXP12383-H2vistalogos-NVHP-servicetile-NA-001?cb=036ca088af6947c089b3a6c8f7441ba0d03ccf97" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">
                Explore our logo design services
              </h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
            <p className="content-text">
              Check out the three ways we can make your logo one-of-a-kind.
            </p>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001484629/MXP2579-Q2-Homepage-Service-Tile-VistaWix-001?cb=a012f31a4ba9e5cfda4211adb430bc5ce7e3a295" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Build a business website</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
            <p className="content-text">
              Grow your business online with Wix’s world-class site builder and
              tools.
            </p>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001482290/MXP2579-Q2-Homepage-Service-Tile-VistaCreate-001?cb=8d3bbee1d7f4e1526b20b65cfe52a3a2c52cb854" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">
                Make eye-catching social posts
              </h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
            <p className="content-text">
              Turn our collection of on-trend templates into custom social media
              for your business.
            </p>
          </div>
          {/*  */}
          <div className="product_card">
            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001618915/MXP20013-NAJuneNVHP-servicetile-designservices-001?cb=db2706b1641fbe34dc4a907bdaa8da2787a7d97d" />
            <div className="link_area">
              <h2 className="text-1xl font-bold">Get product design help</h2>
              <img
                src="https://www.vistaprint.com/swan/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                className="h-6 w-5"
                alt="Arrow Right"
              />
            </div>
            <p className="content-text">
              Build your unique brand with the help of our trusted designers.
            </p>
          </div>
        </div>
        {/* ------- */}
        <div className="head-text">
          <h1 className="head-textsp text-3xl font-semibold mb-4">
            Explore all categories
          </h1>
        </div>
        {/* ****** */}
        <div className="circule_images">
          <div className="grid grid-cols-4 gap-6">
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001628459/MXP21851-JulyNVHP-categoryzone-producttile-RCBCs-001?cb=d42afb8f52decebf856a79b9067ae4eb7df95c34"
              />
              <h2 className="">Business Cards</h2>
            </div>
            {/* * */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001628467/MXP21851-JulyNVHP-categoryzone-producttile-packaging-001?cb=7d486009f1a60a798c561f2211d5a4d7ceaa00dc"
              />
              <h2 className="">Labels, Stickers &amp;Packaging</h2>
            </div>
            {/* * */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001629592/MXP21851-JulyNVHP-categoryzone-producttile-totebags-001?cb=74123c81b15ed01e7c87e71e19f04563dd0851da"
              />
              <h2 className="">Clothing &amp;Bags</h2>
            </div>
            {/* * */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001629589/MXP21851-JulyNVHP-categoryzone-producttile-signsandbanners-001?cb=273d489e5ac72ad174d03fd744b1a96e64c1b622"
              />
              <h2 className="">Signs &amp;Banners</h2>
            </div>
            {/* *------* */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001629584/MXP21851-JulyNVHP-categoryzone-producttile-homeandgifts-001?cb=93ddfb275799efa6a2d80acf0d18ff6ad7beab0e"
              />
              <h2 className="">Home &amp;Gifts</h2>
            </div>
            {/* * */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001629579/MXP21851-JulyNVHP-categoryzone-producttile-invitationsandstationary-001?cb=d70611e5eeb3547ad0f993c26b3b46db3f685274"
              />
              <h2 className="">Invitations &amp;Stationery</h2>
            </div>
            {/* * */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001628473/MXP21851-JulyNVHP-categoryzone-producttile-postcardsandprintadvertising-001?cb=b6b39759c9e99fac745cab2520ba6a5afca46c53"
              />
              <h2 className="">Postcards &amp;Print Advertising</h2>
            </div>
            {/* * */}
            <div className="small-images-round">
              <img
                className="rounded-full"
                src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001628474/MXP21851-JulyNVHP-categoryzone-producttile-digitalmarketing-001?cb=7948621abe6e6d189a627276bef01bbe4a4a9ff6"
              />
              <h2 className="">Digital Marketing</h2>
            </div>
          </div>
        </div>
      </div>
      {/* ~~~~~~~~~~~ */}
      Hello
    </>
  );
}
