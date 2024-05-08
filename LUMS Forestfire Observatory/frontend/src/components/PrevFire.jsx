import React from "react";

const PrevFire = () => {
  return (
    <div
      className="records-div"
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        marginTop: "20px",
        marginLeft: "100px",
      }}
    >
      <h2 style={{ marginLeft: "400px" }}>Previous Records</h2>
      <h3 style={{ marginLeft: "440px", marginBottom: "50px" }}>(1980-2020)</h3>
      <div
        className="image-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {[
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg/300px-Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg",
          "https://cdn.who.int/media/images/default-source/health-and-climate-change/fire-fighters-at-forest-fire-c-quarrie-photography.tmb-479v.jpg?sfvrsn=8b60f828_4%20479w",
          "https://magazine.columbia.edu/sites/default/files/styles/facebook_sharing_1200x630/public/2018-09/Wild-fires.jpg?itok=4COiRa2r",
          "https://media.istockphoto.com/id/1333314611/photo/massive-california-wild-fire-forcing-thousands-of-people-to-evacuate-their-homes-wildfires.jpg?s=612x612&w=0&k=20&c=BNKmR2g9sXsiXaSsGTtxOvdB_FV0N1bp0jQ1OpCMWMo=",
          "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs43017-021-00239-8/MediaObjects/43017_2021_239_Figa_HTML.png",
          "https://s.france24.com/media/display/9d0f58b6-06a9-11ed-bc6d-005056bf30b7/w:1280/p:1x1/180722-incendies-lande-m.jpg",
          "https://newjerseymonitor.com/wp-content/uploads/2023/09/Allen-Road-Wildfire-3.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCWds3lNNY9-3eQrYQr_pm4W2q1r0OniSdw&usqp=CAU",
          "https://www.theweek.in/content/dam/week/magazine/theweek/statescan/images/2022/6/24/56-A-forest-fire-in-Kumaon-division-of-Uttarakhand.jpg.transform/schema-16x9/image.jpg",
          "https://s.france24.com/media/display/9d0f58b6-06a9-11ed-bc6d-005056bf30b7/w:1280/p:1x1/180722-incendies-lande-m.jpg",
        ].map((imageUrl, index) => (
          <div
            key={index}
            style={{ textAlign: "center", position: "relative" }}
          >
            <a
              href="https://cinea.ec.europa.eu/news-events/news/life-projects-aim-reduce-deadly-forest-fires-across-europe-2023-08-22_en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imageUrl}
                alt={`Incident ${index + 1}`}
                style={{
                  width: "200px",
                  height: "150px",
                  transition: "transform 0.3s ease", // Transition effect
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")} // Grow on hover
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Shrink on hover out
              />
            </a>
            <p>Incident {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevFire;
